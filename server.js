const express = require('express'); // Expressフレームワークを使用
const path = require('path');

const app = express();
const PORT = 3000;

// 静的ファイルをpublicフォルダから配信
app.use(express.static(path.join(__dirname, 'public')));

// ルートパスでindex.htmlを返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`サーバーが http://localhost:${PORT} で起動しました`);
});
aaa