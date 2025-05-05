import path from 'path';
import { readdir } from 'node:fs/promises';
import { stat } from 'fs/promises';
import {getCurrentDirectory} from "../../utils/directory.js";

export async function ls() {
  try {
    const items = await readdir(getCurrentDirectory());
    const output = await Promise.all(
      items.map(async name => {
        const fullPath = path.join(getCurrentDirectory(), name);
        const stats = await stat(fullPath);
        const isDir = stats.isDirectory();
        return { Name: name, Type: isDir ? 'directory' : 'file' };
      })
    );

    output.sort((a, b) => {
      if (a.Type === b.Type) return a.Name.localeCompare(b.Name);
      return a.Type === 'directory' ? -1 : 1;
    });

    console.table(output);
  } catch (err) {
    console.log('Operation failed');
  }
}
