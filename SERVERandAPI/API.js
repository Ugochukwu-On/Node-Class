const http = require('http');
const url = require('url');
const fs = require('fs');

let inventory = [
  {
    id: 1,
    name: 'Item 1',
    price: 10.99,
    sizes: ['small', 'medium', 'large']
  },
  {
    id: 2,
    name: 'Item 2',
    price: 20.99,
    sizes: ['medium', 'large']
  }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET' && parsedUrl.pathname === '/inventory') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(inventory));
  }

  if (req.method === 'POST' && parsedUrl.pathname === '/inventory') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const newItem = JSON.parse(body);
      newItem.id = inventory.length + 1;
      inventory.push(newItem);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(newItem));
    });
  }

  if (req.method === 'GET' && parsedUrl.pathname.startsWith('/inventory/')) {
    const itemId = parseInt(parsedUrl.pathname.split('/')[2]);
    const item = inventory.find((item) => item.id === itemId);
    if (item) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(item));
    } else {
      res.setHeader('Content-Type', 'text/plain');
      res.writeHead(404);
      res.end('Item not found');
    }
  }

  if (req.method === 'PUT' && parsedUrl.pathname.startsWith('/inventory/')) {
    const itemId = parseInt(parsedUrl.pathname.split('/')[2]);
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const updatedItem = JSON.parse(body);
      const index = inventory.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        inventory[index] = { ...updatedItem, id: itemId };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(inventory[index]));
      } else {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(404);
        res.end('Item not found');
      }
    });
  }
//DELETE FROM INVENTORY
  if (req.method === 'DELETE' && parsedUrl.pathname.startsWith('/inventory/')) {
    const itemId = parseInt(parsedUrl.pathname.split('/')[2]);
    const index = inventory.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const deletedItem = inventory.splice(index, 1)[0];
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(deletedItem));
    } else {
      res.setHeader('Content-Type', 'text/plain');
      res.writeHead(404);
      res.end('Item not found');
    }
  }

  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(404);
  res.end('Not Found');
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
