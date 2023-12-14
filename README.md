{
    // 必須
    "manifest_version": 3, // manifest.jsonのバージョン情報 現在は3を利用しないと拡張機能を公開・更新が行えません。
    "name": "My Extension", // 拡張機能の名前 ここで設定した内容がストアの掲載情報のパッケージのタイトルとなる。
    "version": "1.0.1", // 拡張機能のバージョン情報 拡張機能を更新する際に一緒に更新します。
    // 推奨
    "action": {...
    }, // ツールバーに表示される拡張機能のアイコンを選択した際の操作を設定することができる。
    "default_locale": "en", // デフォルトの言語を選択
    "description": "A plain text description", // 拡張機能の説明 設定した内容がストアの掲載情報のパッケージの概要となる。
    "icons": {...
    }, // 拡張機能の表示に使用するアイコン chromeが必要に応じて最適なサイズを使用する。
    // 任意
    "author": "developer@example.com", // 拡張機能の製作者
    "automation": {...
    }, // 自動化タスクの実行を可能にする設定 フォームの自動入力などができる
    "background": {...
    }, // service workerを登録する 拡張機能の初期化やイベントの設定などを行う
    "chrome_settings_overrides": {...
    }, // Chromeの設定を拡張機能から上書きすることができる 新規タブで任意のページを開くなど
    "chrome_url_overrides": {...
    }, // [URL chrome://<page名>]の形でアクセスできるページのhtmlを置き換えることができる 新規タブのhtmlを置き換えるなど
    "commands": {...
    }, // ショートカットキーを作成し、それをトリガーにしてイベントを呼び出すことができる
    "content_scripts": [
        {...
        }
    ], // コンテンツスクリプトを使用して特定のwebページのDOMの操作などが行うことができる
    "content_security_policy": {...
    }, // 拡張機能が使用できるリソースやスクリプトを制限し、セキュリティを高めることができる
    "cross_origin_embedder_policy": {...
    }, // Cross-Origin-Embedder-Policy を指定できる
    "cross_origin_opener_policy": {...
    }, // Cross-Origin-Opener-Policy を指定できる
    "declarative_net_request": {...
    }, // Web ページの読み込みや通信を制御することができ、特定のサイトからのリクエストをブロックしたりできる
    "devtools_page": "devtools.html", // 開発者ツール内にカスタムのhtmlページを表示することができ、javascriptを使ってデータの収集などができる
    "event_rules": [
        {...
        }
    ], // Declarative Event Rules API を使用して、webページのイベントを検出して、特定の処理を実行することができる
    "export": {...
    }, // 共通モジュールとしてエクスポートするリソースを定義できる
    "externally_connectable": {...
    }, // 外部アプリや拡張機能からの通信を受け付けるようになる
    "file_browser_handlers": [...
    ], // 特定の種類のファイルを開くためのハンドラーを設定することができる
    "file_system_provider_capabilities": {...
    }, // File System Provider API の使用設定 拡張機能からChrome OS のファイルシステムを操作できる
    "homepage_url": "https://path/to/homepage", // 拡張機能のホームページの URL を指定することができる
    "host_permissions": [...
    ], // 拡張機能がアクセスできるホストのパターンを指定することができる
    "import": [
        {...
        }
    ], // 共通モジュールからインポートするリソースを定義できる
    "incognito": "spanning, split, or not_allowed", // プライベートウィンドウで拡張機能を使用するかどうかを指定することができる
    "input_components": [
        {...
        }
    ], // 拡張機能に含まれる入力メソッドを定義することができる。
    "key": "publicKey", // 拡張機能を一意に識別するためのキーを指定することができる
    "minimum_chrome_version": "107", // 拡張機能を使用するために必要な最低のバージョンを指定できる
    "nacl_modules": [...
    ], // Native Client モジュールを定義するために使用される
    "oauth2": {...
    }, // 拡張機能が使用する OAuth 2.0 クライアントを定義することができる
    "offline_enabled": true, // 拡張機能がオフラインでも使用可能であるかどうかを示す
    "omnibox": {...
    }, // 拡張機能が Chrome のアドレスバー（Omnibox）に表示されるかどうかを指定することができる
    "optional_host_permissions": [
        "..."
    ], // 拡張機能が使用する可能性のあるホスト権限を指定することができる
    "optional_permissions": [
        "..."
    ], // 拡張機能が使用する可能性のある権限を指定することができる
    "options_page": "options.html", // 拡張機能のオプションページの URL を指定することができる
    "options_ui": {...
    }, // 拡張機能のオプションページの UI 要素を設定することができる
    "permissions": [
        "..."
    ], // 拡張機能が使用する権限を指定することができる
    "replacement_web_app": "https://example.com", // Web アプリを拡張機能で置き換えることができる
    "requirements": {...
    }, // 拡張機能が使用するために必要なシステム要件を指定することができる
    "sandbox": {...
    }, // 拡張機能が使用するサンドボックスを指定することができる
    "short_name": "Short Name", // 拡張機能にショートネームを指定することができる
    "storage": {...
    }, // 拡張機能のデータを保存することができる
    "tts_engine": {...
    }, // テキストを読み上げるための TTS (Text-to-Speech) エンジンを指定することができる
    "update_url": "https://path/to/updateInfo.xml", // 拡張機能のアップデートを管理するために使用する
    "version_name": "1.0 beta", // 拡張機能のバージョン名を指定することができる
    "web_accessible_resources": [...
    ] // 拡張機能ないのリソースを外部からアクセスできるようにすることができる
}