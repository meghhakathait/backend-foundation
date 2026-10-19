const fs = require("fs/promises");
const path = require("path");

// async function createNewFile() {
//   try {
//     await fs.writeFile("notes.txt", "Node Js Class");
//     //to create new file or replace data of existing file we use writeFile
//     console.log("file created");
//   } catch (error) {
//     console.log("unable to create file", error.message);
//   }
// }

// createNewFile();
//in terminal node filename.js

async function updateContent() {
  try {
    await fs.writeFile("notes.txt", "React Js Training"); //writefile new file create karega nd cnt likh dega agr existing file hai toh uska data completly replace kr dega
    console.log("file created");
  } catch (error) {
    console.log("unable to create file", error.message);
  }
}

// updateContent();

async function appendContent() {
  try {
    await fs.appendFile("notes.txt", "Javascript Training"); //if we want previous data as well as new data
    console.log("file created");
  } catch (error) {
    console.log("unable to create file", error.message);
  }
}

appendContent();

async function removeFile() {
  try {
    await fs.unlink("index.html"); // to remove file
    console.log("file created");
  } catch (error) {
    console.log("unable to delete file", error.message);
  }
}

removeFile();

//path
// const directoryPath = __dirname
// console.log("directory path",directoryPath)

const filePath = __filename;
console.log("file path", filePath); //current file name

const filePath1 = path.join(__dirname, "notes.txt");
console.log("file path", filePath1);

//e.g -
async function createNewFile() {
  const filePath = path.join(__dirname, "data", "information.txt");
  try {
    await fs.writeFile(filePath, "Node Js Class"); //jaha banani hai vha filePath se replace kr dege
    console.log("file created");
  } catch (error) {
    console.log("unable to create file", error.message);
  }
}

createNewFile();

// path.join(); // Joins the path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
console.log("file path", path.join(__dirname, "notes.txt"));

// path.resolve(); // Resolves a sequence of paths or path segemnts into an absolute path.
console.log("file path", path.resolve(__dirname, "notes.txt"));

// path.basename() Returns the last portion of a path, similar to the Unix basename command.
console.log("file path", path.basename(filePath1));

// path.extname() Returns the extension of the path, from the last occurance of the (period) character to end of string in the last portion of the path.
console.log("file path", path.extname(filePath1));

// path.parse() Returns an object whose properties represnt significant elements of the path. trailing directory separators are ignored , see path.sep .
console.log("file path", path.parse(filePath1));
