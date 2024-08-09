const fs = require('fs');
const path = require('path');

const folderPath = path.join(process.cwd(), 'document/lib');
const writeFilePath = path.join(process.cwd(), 'document/.vitepress/sidebarItem.mts');



const autoSidebarItem = (folderPath) => {
  // 确保文件夹存在
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
    console.error(`文件夹不存在: ${folderPath}`);
    process.exit(1);
  }

  // 读取文件夹中的所有文件
  const files = fs.readdirSync(folderPath);

  let sidebarContent = `[` + '\n'
  files.forEach(file => {
    if (file === 'index.md') return;
    const extname = path.extname(file);
    const fileName = path.basename(file, extname)
    sidebarContent += `  {text: '${fileName}', link: '/lib/${fileName}.md' },` + '\n'
  });
  sidebarContent += `]`
  console.log('sidebarContent:', sidebarContent)

  const fileContent = `
const sidebarItem = ${sidebarContent};

export default sidebarItem;
  `;

  fs.writeFileSync(writeFilePath, fileContent, 'utf8');
};

// 执行函数
autoSidebarItem(folderPath);