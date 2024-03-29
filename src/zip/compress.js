import path from "path";
import zlib from "zlib";
import fs from "fs";

//execute: npm run zip:compress

const toRead = path.resolve(
  path.dirname(""),
  "src",
  "zip",
  "files",
  "fileToCompress.txt"
);
const toWrite = path.resolve(
  path.dirname(""),
  "src",
  "zip",
  "files",
  "archive.gz"
);

export const compress = async () => {
  const input = fs.createReadStream(toRead);
  const output = fs.createWriteStream(toWrite);
  const gzip = zlib.createGzip();

  input.pipe(gzip).pipe(output);
};

compress();
