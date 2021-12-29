import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import path from 'path';

const pythonPromise = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.resolve(
      process.cwd(),
      'src',
      'python',
      'scripts',
      'script1.py',
    );

    const python = spawn('python', [scriptPath]);
    python.stdout.on('data', (data) => {
      resolve(data.toString());
    });

    python.stderr.on('data', (data) => {
      reject(data.toString());
    });

    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
    });
  });
};

@Injectable()
export class PythonService {
  async runScript1(): Promise<string> {
    try {
      const dataFromPython = await pythonPromise();
      return dataFromPython;
    } catch (error) {
      console.error(error);
    }
  }
}
