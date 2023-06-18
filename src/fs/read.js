import path from "path";
import fs from "fs";

//execute: npm run read

const toRead = path.resolve(
  path.dirname(""),
  "src",
  "fs",
  "files",
  "fileToRead.txt"
);

export const read = async () => {
  fs.readFile(toRead, "utf8", function (error, data) {
    if (error)
      try {
        throw new Error("FS operation failed");
      } catch (error) {
        console.log(error.message);
      }
    else console.log(data);
  });
};

read();
