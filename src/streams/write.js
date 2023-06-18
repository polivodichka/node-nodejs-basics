import { pipeline } from "stream";
import path from "path";
import fs from "fs";

//execute: npm run streams:write

const toWrite = path.resolve(
  path.dirname(""),
  "src",
  "streams",
  "files",
  "fileToWrite.txt"
);

export const write = async () => {
  const stream = fs.WriteStream(toWrite, "utf8");
  const read = process.stdin;
  pipeline(read, stream, () => {});
};

write();
