# Deno Tunnel Sample Code

Deno Tunnel のサンプルコードです

下記ブログ記事の検証用です<br> https://zenn.dev/suzutomo/articles/f98fe6bc96db52

## 実行例

```bash
> deno run -A --tunnel tunnel-xxx.ts
```

## 各スクリプトの説明

- [tunnel-simple.ts](tunnel-simple.ts)
  - ただ JSON を返すだけのシンプルなサーバ
- [tunnel-env.ts](tunnel-env.ts)
  - 環境変数から読み取った値をレスポンスに含めるサーバ
- [tunnel-telemetry](tunnel-telemetry.ts)
  - Logs, Traces, Metrics 確認用サーバ
  - （外部フェッチとログ出力）
- [tunnel-postgresql.ts](tunnel-postgresql.ts)
  - PostgreSQL に接続するサーバ
  - テーブルの初期化は以下を実行
    - [tunnel-postgresql.ts](tunnel-postgresql-init.ts)
- [tunnel-kv.ts](tunnel-kv.ts)
  - Deno KV に接続するサーバ
  - v2.6.0 時点では接続できなかった
- [tunnel-sandbox](tunnel-sandbox.ts)
  - Sandbox を使うサーバ
  - v2.6.0 時点では接続できなかった
