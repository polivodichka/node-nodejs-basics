const args = process.argv.slice(2);

console.log(`Total number of args is ${args.length}`);
console.log(`args: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
    console.log('ghbikj');
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
};

process.stdin.on('data', echoInput);