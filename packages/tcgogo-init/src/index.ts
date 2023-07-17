import { Command } from 'commander';
import { version } from '../package.json';

const program = new Command();

program.on('--help', () => {
  // console.log(`\r\n Run123 to understand the details\r\n `);
});

program.name('--version').description('CLI to some JavaScript string utilities').version(version);
program.parse();
