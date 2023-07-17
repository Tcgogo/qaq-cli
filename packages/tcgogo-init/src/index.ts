import { readdirSync } from 'fs';
import { Command } from 'commander';
import inquirer from 'inquirer';
import { version } from '../package.json';

const program = new Command();

function isCwdEmpty() {
  const ignoreKey = ['.git', 'node_modules'];
  const localPath = process.cwd();
  console.log('%c [ localPath ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', localPath);
  const fileList = readdirSync(localPath).filter((path) => !ignoreKey.includes(path) );
  return !fileList?.length;
}


function prepare() {
  // 1.判断目录是否为空

  // 获取当前目录 || path.resolve('.')
  const isEmpty =  isCwdEmpty();

  // eslint-disable-next-line no-new
  if(isEmpty) new Error('当前目录为空！！！');

  inquirer.prompt({
    name: '213',
  });


  // 2.是否启动强制更新
  // 3.选择创建项目或组件
  // 4.获取项目信息
}

function exec() {
  // 准备阶段
  prepare();
}

exec();


program.name('--version').description('CLI to some JavaScript string utilities').version(version);
program.parse();
