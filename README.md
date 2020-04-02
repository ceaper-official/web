# Ceaper

# Web
### 構成
完全モジュール式で構成。（一部を除く）
各コンテンツは、下記のようにコンテンツの中にパーツを入れ込んで、柔軟に差し替えができるようにする。
アプリケーションの際にも、この手法で基本的に設計。
```
<div class= "contents">
<h2>タイトル</h2>
<p>本文</p>
</div>
```

# 開発
### 起動
```
npm run dev
```
### 外部に公開
```
ngrok http 3000
```
