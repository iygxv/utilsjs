const fs = require('fs');
const path = require('path');

const folderPath = path.join(process.cwd(), 'lib');
const writeFilePath = path.join(process.cwd(), 'document/lib');

// 确保测试文件夹存在
if (!fs.existsSync(writeFilePath)) {
  fs.mkdirSync(writeFilePath);
}

const createMdFiles = (folderPath) => {
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
      const mdFileName = `${fileName}.md`;
      const mdFilePath = path.join(writeFilePath, mdFileName);

      // 检查测试文件是否已存在
      if (fs.existsSync(mdFilePath)) {
        return; // 如果文件已存在，则跳过创建
      }

      // 测试用例内容
      const mdFileContent = `# ${fileName}

## 描述


## 参数


## 返回


## 例子
\`\`\`js

\`\`\`
`;

      // 创建测试文件
      fs.writeFileSync(mdFilePath, mdFileContent, 'utf8');
      console.log(`md文件已创建: ${mdFilePath}`);
    }
  });
};

// 执行函数
createMdFiles(folderPath);