# kintone React アプリケーション

このプロジェクトは、kintone上でReactを使用してカスタムアプリケーションを構築するためのサンプルです。現在は、詳細画面にシンプルなボタンを配置するデモンストレーションのみです。

## 機能

- kintoneの詳細画面にカスタムボタンを表示
- Reactの最新バージョン（v18以降）を使用

## セットアップ

1. このリポジトリをクローンまたはダウンロードします。
2. プロジェクトディレクトリで `npm install` を実行し、依存関係をインストールします。
3. `npm run build` を実行してプロジェクトをビルドします。
4. 生成された JavaScript ファイルを kintone アプリケーションの設定画面でアップロードします。

## kintoneでReactを動作させるための設定

kintone環境でReactを動作させるためには、通常のReactとは異なる設定があります：

1. kintoneのイベント (`kintone.events.on`) を使用して、Reactアプリケーションのレンダリングのタイミングを制御する。
2. kintoneが提供する特定の要素（例：`kintone.app.record.getHeaderMenuSpaceElement()`）にReactコンポーネントをレンダリングする。
3. 複数回のレンダリングを防ぐため、レンダリング前に既存の子要素をクリアする。

## 標準のReactとの主な違い

1. エントリーポイント：標準のReactアプリケーションでは通常 `index.js` または `index.tsx` ですが、kintone環境では kintone のイベントハンドラ内でアプリケーションを初期化する。

2. ルート要素：標準では通常 `index.html` 内の（`<div id="root"></div>`等）がルート要素だが、kintone環境では動的に作成した要素をルート要素として使用します。

3. レンダリングタイミング：標準のReactアプリケーションでは通常ページロード時に一度だけレンダリングしますが、kintone環境では特定のイベント（例：詳細画面の表示）が発生するたびにレンダリングする必要があります。

4. グローバルオブジェクト：kintone環境では `kintone` というグローバルオブジェクトが利用可能。（eslintrc.jsにグローバルオブジェクトを定義）

## 注意事項
このプロジェクトはデモンストレーション目的のサンプルです。実際の運用環境で使用する際は、セキュリティやパフォーマンスの観点から追加の考慮が必要になる場合があります。

## その他
問題の報告や改善提案は、Issueからお願いします。

## ライセンス
[MITライセンス](LICENSE)の下で公開されています。

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
