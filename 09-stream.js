// A stream represents a sequence of data that can be read from or written to over time. Streams are a powerful abstraction for handling I/O operations in Node.js, allowing developer to work with data in amore efficient and scalable way.

// Node Js has four main types of streams -
// Readable Stream - Provides data. - ex - reading file.
// Writable Stream - Accept data - ex - writing a file.
// Duplex - Reads and writes - ex - Netwrok Socket.
// Transform - Reads, Transform and Writes - ex - compression

const fs = require("fs/promises");
// we have to import manually
const { pipeline } = require("stream/promises");
const fileSystem = require("fs");
const { error } = require("console");

// const data = await fs.readFile("video.mp4"); //2gb File
// Reading this file may require a very large amount of memory because the entire file is read.

// Instead, streams let us process data incrementally.
// large file - Read a chunk - Process the chunk - Read another chunk -> Continue until completion.

// Read a file using stream.
const stream = fileSystem.createReadStream("notes.txt", { encoding: "utf-8" });

// on is a stream events we can attach func in it
stream.on("data", (chunk) => {
  console.log("Received Chunk", chunk.length);
});

stream.on("end", () => {
  console.log("Finished Reading");
});

stream.on("error", (error) => {
  console.log("Read error", error.message);
});

// const txt = fileSystem.readFile("notes.txt", { encoding: "utf-8" });
// console.log(txt);

const stream2 = fileSystem.createWriteStream("Output.txt");
stream2.write("First Line\n");
stream2.write("Second Line\n");

stream2.end("Final Line\n");
stream2.on("finish", () => {
  console.log("Finished Writing");
});

stream2.on("error", (error) => {
  console.log("Write error", error.message);
});

// pipe() - connects a readable stream to a writable stream, allowing data to flow automatically from a source to a destination.
// source.txt -> Readable Stream -> pipe() -> Writable Stream -> destination.txt
const readable = fileSystem.createReadStream("source.txt");
const writeable = fileSystem.createWriteStream("destination.txt");

// readable.pipe(writeable); // jise read krana hai nd jispr write kerwana hai

// Safer option for the above example is pipeline()
async function copyfile() {
  await pipeline(readable, writeable);
  console.log("Copy Completed");
}

copyfile().catch((error) => {
  console.log("Copy failed", error.message);
});
