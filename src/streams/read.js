import path from "path";
import fs from "fs";

//execute: npm run streams:read

const toRead = path.resolve(
  path.dirname(""),
  "src",
  "streams",
  "files",
  "fileToRead.txt"
);

export const read = async () => {
  const stream = fs.ReadStream(toRead, "utf8");
  stream.on("error", () => {
    throw new Error("Operation failed");
  });
  stream.on("data", (data) => process.stdout.write(data));
};

read();
