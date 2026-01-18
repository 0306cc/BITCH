# CryptoNest - 加密貨幣社群網站

一個現代化的加密貨幣社群網站，使用 GitHub Pages 部署。

## ✨ 特色功能

- 📱 響應式設計，支援各種裝置
- 🎨 現代化的加密貨幣主題介面
- 🖼️ 可點擊放大的圖片展示功能
- 🔄 平滑的頁面滾動與動畫效果
- ⌨️ 支援鍵盤操作（ESC 關閉、方向鍵切換圖片）

## 📁 檔案結構

```
cryptoNest/
├── index.html      # 主頁面
├── article.html    # 文章頁面
├── styles.css      # 樣式表
├── script.js       # JavaScript 互動功能
└── README.md       # 說明文件
```

## 🚀 部署到 GitHub Pages

### 步驟 1: 建立 GitHub Repository

1. 登入你的 GitHub 帳號
2. 點擊右上角的 "+" 並選擇 "New repository"
3. 為 Repository 命名（例如：cryptoNest）
4. 選擇 "Public"
5. 點擊 "Create repository"

### 步驟 2: 上傳檔案到 GitHub

在本地專案資料夾中執行以下指令：

```bash
# 初始化 Git repository
git init

# 添加所有檔案
git add .

# 提交變更
git commit -m "Initial commit - CryptoNest website"

# 連結到你的 GitHub repository（替換成你的使用者名稱）
git remote add origin https://github.com/你的使用者名稱/cryptoNest.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步驟 3: 啟用 GitHub Pages

1. 在你的 GitHub Repository 頁面，點擊 "Settings"
2. 在左側選單找到 "Pages"
3. 在 "Source" 下拉選單中選擇 "main" 分支
4. 點擊 "Save"
5. 等待幾分鐘後，你的網站就會在 `https://你的使用者名稱.github.io/cryptoNest/` 上線！

## 🎯 使用方式

### 主頁面功能
- 瀏覽最新的加密貨幣文章
- 查看社群統計資料
- 了解平台特色

### 文章頁面功能
- 閱讀完整的加密貨幣投資指南
- 點擊圖片進行放大檢視
- 使用方向鍵或點擊按鈕切換圖片
- 按 ESC 關閉圖片檢視器

## ⌨️ 鍵盤快捷鍵

在圖片燈箱模式下：
- `ESC` - 關閉燈箱
- `←` - 上一張圖片
- `→` - 下一張圖片

## 🎨 自訂設計

### 修改顏色主題

在 `styles.css` 中的 `:root` 區塊修改顏色變數：

```css
:root {
    --primary-color: #f7931a;    /* 主要顏色（橘色）*/
    --secondary-color: #4a90e2;  /* 次要顏色（藍色）*/
    --accent: #00d4ff;           /* 強調色（青色）*/
}
```

### 新增文章

1. 複製 `article.html` 並重新命名
2. 修改文章標題、內容和圖片
3. 在 `index.html` 中新增對應的文章卡片連結

## 📱 響應式設計

網站已針對以下裝置優化：
- 桌面電腦（1200px+）
- 平板電腦（768px - 1200px）
- 手機（< 768px）

## 🔧 技術棧

- HTML5
- CSS3（使用 CSS Grid 和 Flexbox）
- Vanilla JavaScript
- GitHub Pages（靜態網站託管）

## 📝 授權

此專案僅供學習和個人使用。

## 👥 貢獻

歡迎提交 Pull Request 或開啟 Issue！

---

Made with ❤️ for the Crypto Community
