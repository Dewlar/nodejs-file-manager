import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import {getCurrentDirectory} from "../../utils/directory.js";

export async function cp(source, destination) {
  try {
    const srcPath = path.resolve(getCurrentDirectory(), source);
    const destPath = path.resolve(getCurrentDirectory(), destination, path.basename(source));
    await pipeline(
      createReadStream(srcPath),
      createWriteStream(destPath, { flags: 'wx' })
    );
  } catch {
    console.log('Operation failed');
  }
}
