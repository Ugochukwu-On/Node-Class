const path = require('path');
const os = require('os');
const fs = require('fs');

// 1. Current Directory
// run with: console.log('Cutrent Directory is:', currentDirectory)

const currentDirectory = process.cwd();


//or, run with: console.log('Current directory is:', currentDir); 

const currentDir = __dirname;


// 2. Find Seperator, 3. Print out extension name for a file
// for 2- run with: console.log('Seperator :', seperator); for 3- run with: console.log('Extension name:', extension);

const filePath = '/Users/u.g/Node Class/Question_1.js';
const seperator = path.sep; 
const extension = path.extname(filePath)


// 4. Print the process ID of the current running process
// run with: console.log('Process ID:', processId);

const processId = process.pid;


// 5. Print User ID of the OS
// run loop with:   console.log(`${key}: ${userInfo[key]}`)


const userInfo = os.userInfo();

console.log('User Information:');
for(const key in userInfo) {
  
}

// 6. Print platform of OS 
// run with: console.log('Operating System Platform: ', platform);

const platform = os.platform();

//PART 2
// 1&2. MAKING DIRECTORY, and file  WITH FS MOUDULE
const folderName = 'Students';
const fileName = 'user.js';
const fileContent = 'Ugochukwu Onwubu'

fs.mkdir(folderName, (err) => {
    if (err) {
        console.error('Error making directory: ',  err);
    } else {
        const filePath = path.join(folderName, fileName);
        fs.writeFile(filePath, fileContent, (err) => {
            if (err){
                console.error('Error creating file:', err);
            } else{
                console.log('File ctreated successfully');
            }
        })

    }
});

//3. Rename the directory to names
const folderName = 'Students'
const fileName ='users.js'

const newFolder = 'Names'
//  Rename the file
fs.rename(folderName, newFolder, (err)=>{
    if (err){
        console.error('Failed to rename File:', err);
    } else {
        console.log('File rename sucessfully');
    }
});


// 4. Create the file content with fixed age, nationality, and gender etc
const folderName = 'Students';
const fileName = 'user.js';

const fileContent = `
const user = {
name: 'Ugochukwu',
  age: '20 years',
  nationality: 'Nigerian',
  gender: 'Male',
  Occupation: 'NYSC',
  Romance: 'Very Single'
};

console.log('User Information:');
console.log('Age:', user.age);
console.log('Nationality:', user.nationality);
console.log('Gender:', user.gender);
console.log('Occupation:', user.Occupation);
`;

// Get the file path
const file_Path = path.join(folderName, fileName);

// Update the content of the file
fs.writeFile(file_Path, fileContent, (err) => {
    if (err){
        console.error('File Could not be updated:', err);
    }else{
        console.log('File updated successfully');
    }
});


const folderName = 'Students';
const fileName = 'user.js';

//6. rename file to, then read the file using fs.readFile, then deleting it.
 const newFile = 'Ugochukwu.js'

// Create the file content with fixed age, nationality, and gender etc
const fileContent = `
const user = {
  name: 'Ugochukwu',
  age: '20 years',
  nationality: 'Nigerian',
  gender: 'Male',
  Occupation: 'NYSC',
  Romance: 'Very Single'
};

console.log('User Information:');
console.log('Age:', user.age);
console.log('Nationality:', user.nationality);
console.log('Gender:', user.gender);
console.log('Occupation:', user.Occupation);
`;

 // Get the file path
const file_Path = path.join(folderName, fileName);

 // 6,7,8&9. read Update and delete the content of the file
fs.writeFile(file_Path, fileContent, (err) => {
    if (err){
        console.error('File Could not be updated:', err);
    }else{
        console.log('File updated successfully');
    }
    const newFilePath = path.join(folderName, newFile);

//  Rename the file
    fs.rename(file_Path, newFilePath, (err)=>{
        if (err){
            console.error('Failed to rename File:', err);
        } else {
            console.log('File rename sucessfully');
        }
    });
    fs.readFile(newFilePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
        } else {
          console.log('File contents:');
          console.log(data);
        }
      });
      fs.unlink(file_path, newFilePath, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully.');
        }
      });
});




