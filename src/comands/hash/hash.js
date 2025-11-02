import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import {getCurrentDirectory} from "../../utils/directory.js";

export async function hash(filePath) {
  try {
    const fullPath = path.resolve(getCurrentDirectory(), filePath);
    const stream = createReadStream(fullPath);
    const hash = createHash('sha256');

    return await new Promise((resolve, reject) => {
      stream.on('error', () => reject('Operation failed'));
      stream.on('data', chunk => hash.update(chunk));
      stream.on('end', () => {
        console.log(hash.digest('hex'));
        resolve();
      });
    });
  } catch {
    console.log('Operation failed');
  }
}
