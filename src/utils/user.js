function parseArgs() {
  const cliArg = process.argv.find(arg => arg.startsWith('--username='));
  const envArg = process.env.npm_config_username;

  if (cliArg) return cliArg.split('=')[1];
  if (envArg) return envArg;
  return 'Anonymous';
}

const username = parseArgs();

export function printWelcomeMessage() {
  console.log(`Welcome to the File Manager, ${username}!`);
}

export function exitHandler() {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
}
