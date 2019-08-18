React + TypeScript をSPAなプロジェクトで使う時の汎用的なスターターキットです   

## 使用技術/思想など

- AtomicDesign https://www.amazon.co.jp/dp/477419705X
- Redux
    - Redux Thunk
        - 必要に応じてその他のミドルウェアに交換してください
    - Re-ducks https://github.com/alexnm/re-ducks
    - reselect https://github.com/reduxjs/reselect
- Webpack
    - webpack-dev-server
    - babel-loader
        - @babel/preset-typescript
- Presenter/Container パターン https://redux.js.org/basics/usage-with-react
        
## 使い方

### 開発環境立ち上げ

TODO: HotReload

```bash
$ yarn install
$ yarn dev
```

### Linter

```bash
$ yarn lint

# Lint 自動フォーマット
$ yarn lint:fix
```
