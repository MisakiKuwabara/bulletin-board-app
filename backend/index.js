// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// // CORSとボディパーサーの設定
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB接続
// mongoose.connect('mongodb://localhost:27017/bulletinBoardDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDBに接続しました'))
// .catch(err => console.error('MongoDB接続エラー', err));

// // ユーザースキーマとモデルを定義
// const userSchema = new mongoose.Schema({
//     userName: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });
  
// const User = mongoose.model('User', userSchema);

// // ポストスキーマとモデル定義
// const postSchema = new mongoose.Schema({
//   userName: String,
//   title: String,
//   text: String,
//   date: { type: Date, default: Date.now }
// });

// const Post = mongoose.model('Post', postSchema);

// // ユーザー登録API
// app.post('/register', async (req, res) => {
//     const { userName, password } = req.body;
  
// // ユーザーが既に存在するかを確認
// const existingUser = await User.findOne({ userName });
// if (existingUser) {
//     return res.status(400).send({ message: 'このユーザー名は既に使われています。' });
// }
  
// // 新しいユーザーを作成
// const newUser = new User({ userName, password });
// try {
//     await newUser.save();
//     res.status(201).send({ message: 'ユーザー登録が成功しました！' });
// } catch (error) {
//     res.status(500).send({ message: '登録中にエラーが発生しました。', error });
// }
// });

// // POSTリクエストで新しい投稿を作成
// app.post('/posts', async (req, res) => {
//   const post = new Post(req.body);
//   try {
//     await post.save();
//     res.status(201).send(post);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // GETリクエストで全ての投稿を取得
// app.get('/posts', async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.status(200).send(posts);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // サーバー起動
// app.listen(3000, () => {
//   console.log('サーバーがポート3000で起動しました');
// });
