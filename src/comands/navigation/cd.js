import path from 'path';
import { access } from 'fs/promises';
import { constants } from 'fs';

export async function cd(targetPath) {
  if (!targetPath) return console.log('Operation failed');
  const newPath = path.resolve(process.cwd(), targetPath);
  try {
    await access(newPath, constants.R_OK);
    process.chdir(newPath);
  } catch {
    console.log('Operation failed');
  }
}
