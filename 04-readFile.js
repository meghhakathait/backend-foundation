const fs = require("fs");
const fsPromises = require("fs/promises"); // Built-in Module Import
// fs is a built-in Node.js module that allows javascript programs to interact with filesystem through node APIs.

// Type                     Example                  Behaviour
// Synchronous -            readFileSync()           Blocks the javascript thread until operation completes.
// Callback-based           readFile()               Invokes a callback when operation finishes.
// Promise-based            await readFile()         Returns a promkise that can be awaited.

async function readFile() {
  try {
    const data = await fsPromises.readFile("info.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.error("UNable to read file", error.message);
  }
}

readFile();
