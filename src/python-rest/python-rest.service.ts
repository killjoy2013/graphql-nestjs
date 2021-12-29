import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import path from 'path';

const pythonPromise = (data): Promise<string> => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.resolve(
      process.cwd(),
      'src',
      'python-rest',
      'scripts',
      'script2.py',
    );

    const python = spawn('python', [scriptPath, ...data]);
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
export class PythonRestService {
  async runScript(data): Promise<string> {
    try {
      const dataFromPython = await pythonPromise(data);
      return dataFromPython;
    } catch (error) {
      console.error(error);
    }
  }
}
