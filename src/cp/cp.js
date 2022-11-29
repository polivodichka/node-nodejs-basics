//execute: npm run cp
import path from 'path';
import { spawn } from 'child_process';

const scriptPath = path.resolve(path.dirname(''), 'src', 'cp', 'files', 'script.js');

export const spawnchild = async (args) => {
    const child = spawn('node', [scriptPath, ...args.split(' ')])

    process.stdin.on('data', (data) => {
        child.stdin.write(data);
    })

    child.stdout.on('data', (data) => {
        console.log(data.toString());
    })
};

spawnchild('--arg1 --arg2');