import fsPromises from "fs/promises";
import { exit } from "process";
import path from "path";

//execute: npm run fs:create
const freshPath = path.resolve(
  path.dirname(""),
  "src",
  "fs",
  "files",
  "fresh.txt"
);

export const create = async () => {
  await fsPromises
    .access(freshPath)
    .catch(async () => {
      await fsPromises.writeFile(freshPath, "I am fresh and young");
      exit(0);
    })
    .then(() => {
      {
        try {
          throw new Error("FS operation failed");
        } catch (error) {
          console.log(error.message);
        }
      }
    });
};

create();
