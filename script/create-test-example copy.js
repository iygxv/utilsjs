const fs = require('fs');
const path = require('path');

const folderPath = path.join(process.cwd(), 'lib');
const writeFilePath = path.join(process.cwd(), 'test');

// 确保测试文件夹存在
if (!fs.existsSync(writeFilePath)) {
  fs.mkdirSync(writeFilePath);
}

const createTestFiles = (folderPath) => {
  // 确保文件夹存在
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
    console.error(`文件夹不存在: ${folderPath}`);
    process.exit(1);
  }

  // 读取文件夹中的所有文件
  const files = fs.readdirSync(folderPath);

  files.forEach(file => {
    const extname = path.extname(file);

    // 检查是否为 .js 文件
    if (extname === '.js') {
      const fileName = path.basename(file, extname);
      const testFileName = `${fileName}.test.js`;
      const testFilePath = path.join(writeFilePath, testFileName);

      // 检查测试文件是否已存在
      if (fs.existsSync(testFilePath)) {
        return; // 如果文件已存在，则跳过创建
      }

      // 测试用例内容
      const testFileContent = `import ${fileName} from '../lib/${file}';
import { describe, it, expect } from 'vitest';
`;

      // 创建测试文件
      fs.writeFileSync(testFilePath, testFileContent, 'utf8');
      console.log(`测试文件已创建: ${testFilePath}`);
    }
  });
};

// 执行函数
createTestFiles(folderPath);