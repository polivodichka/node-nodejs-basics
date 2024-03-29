//execute: npm run cli:args
export const parseArgs = () => {
  console.log(
    process.argv
      .filter((arg) => arg.match(/--\w*/))
      .map(
        (value) =>
          (value = `${value.slice(2)} is ${
            process.argv[process.argv.indexOf(value) + 1]
          }`)
      )
      .join(", ")
  );
};

parseArgs();
