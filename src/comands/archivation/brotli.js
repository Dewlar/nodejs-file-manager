import fs from 'fs';
import path from 'path';
import {pipeline} from 'stream/promises';
import {createBrotliCompress, createBrotliDecompress} from 'zlib';
import {getCurrentDirectory} from "../../utils/directory.js";

export async function compress(src, dest) {
  const srcPath = path.resolve(getCurrentDirectory(), src);
  const destPath = path.resolve(getCurrentDirectory(), dest);

  try {
    await pipeline(
      fs.createReadStream(srcPath),
      createBrotliCompress(),
      fs.createWriteStream(destPath)
    );
  } catch {
    console.log('Operation failed');
  }
}

export async function decompress(src, dest) {
  const srcPath = path.resolve(getCurrentDirectory(), src);
  const destPath = path.resolve(getCurrentDirectory(), dest);

  try {
    await pipeline(
      fs.createReadStream(srcPath),
      createBrotliDecompress(),
      fs.createWriteStream(destPath)
    );
  } catch {
    console.log('Operation failed');
  }
}
