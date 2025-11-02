import os from 'os';
import {getCPUs} from "./cpus.js";
export const execOsCommand = (args) => {
  switch (args) {
    case '--EOL':
      console.log('Default system End-Of-Line:', JSON.stringify(os.EOL));
      break;
    case '--cpus':
      getCPUs();
      break;
    case '--homedir':
      console.log('Home directory:', os.homedir());
      break;
    case '--username':
      console.log('System user name:', os.userInfo().username);
      break;
    case '--architecture':
      console.log('CPU architecture:', process.arch);
      break;
    default:
      throw new Error('Invalid input.');
  }
};
