import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// kintoneのイベントハンドラを設定
kintone.events.on('app.record.detail.show', (event) => {
  const headerMenuSpaceElement = kintone.app.record.getHeaderMenuSpaceElement();

  // 既存のルートがあれば削除
  while (headerMenuSpaceElement.firstChild) {
    headerMenuSpaceElement.removeChild(headerMenuSpaceElement.firstChild);
  }

  // 新しいdiv要素を作成してルートとして使用
  const rootElement = document.createElement('div');
  headerMenuSpaceElement.appendChild(rootElement);

  // createRootを使用してReactアプリケーションをレンダリング
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  return event;
});