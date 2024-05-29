export async function getEmoji() {
    // APIのURLを定義
    const url = "https://api.github.com/emojis";
    // APIからデータを取得
    const response = await fetch(url);
    const data = await response.json();
    // 取得したデータをローカルストレージに保存
    chrome.storage.local.set({ "json": data });

    return data;
}

export async function copy_name(data_emoji_name) {
    // data_emoji_nameが文字列でない場合はエラーを出力して終了
    if (typeof data_emoji_name !== 'string') {
        console.error('data_emoji_name is not a string:', data_emoji_name);
        return;
    }
    // data_emoji_nameからコードポイントを抽出
    const codePoint = parseInt(extraction(data_emoji_name), 16);
    // コードポイントがNaNの場合はエラーを出力して終了
    if (isNaN(codePoint)) {
        console.error('Invalid code point:', codePoint);
        return;
    }
    // コードポイントから絵文字名を生成
    const emojiName = String.fromCodePoint(codePoint);
    if (!emojiName) return;
    try {
        // 絵文字名をクリップボードにコピー
        await navigator.clipboard.writeText(emojiName);
        console.log(`Copied ${emojiName} to clipboard`);
    } catch (error) {
        console.error('Failed to copy text: ', error);
    }
}

function extraction(url) {
    // URLから絵文字名を抽出
    return url.replace(/.*\/unicode\//, "").replace(/\.png\?v8/, "");
}

export function bookmarkEmoji(data_emoji_name) {
    // emojiがオブジェクトでない場合はエラーを出力して終了
    if (typeof data_emoji_name !== 'object') {
        console.error('emoji is not an object:', data_emoji_name);
        return;
    }
    // emojiからnameとurlを取り出す
    const { name, url } = data_emoji_name;
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (!bookmarks) {
        bookmarks = [];
    }
    // 同じ絵文字がすでにブックマークされている場合は何もしない
    if (bookmarks.some(([n, u]) => n === name && u === url)) {
        return;
    }
    bookmarks.push([name, url]);
    // bookmarks配列の要素数が10を超えていた場合、10以下になるまで先頭の要素を削除
    while (bookmarks.length > 10) {
        bookmarks.shift();
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}