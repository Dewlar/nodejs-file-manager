import path from 'path';

export async function up() {
  const parent = path.resolve(process.cwd(), '..');
  try {
    process.chdir(parent);
  } catch {
    console.log('Operation failed');
  }
}
