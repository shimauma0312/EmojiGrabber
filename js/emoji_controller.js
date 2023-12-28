export async function getEmoji() {
    const url = "https://api.github.com/emojis";
    const response = await fetch(url);
    const data = await response.json();
    chrome.storage.local.set({"json": data });

    return data;
}

export async function copy_name(data_emoji_name) {
    if (typeof data_emoji_name !== 'string') {
        console.error('data_emoji_name is not a string:', data_emoji_name);
        return;
    }
    const codePoint = parseInt(extraction(data_emoji_name), 16);
    // NaNだったらエラーを出力
    if (isNaN(codePoint)) {
        console.error('Invalid code point:', codePoint);
        return;
    }
    const emojiName = String.fromCodePoint(codePoint);
    if (!emojiName) return;
    try {
        await navigator.clipboard.writeText(emojiName);
        console.log(`Copied ${emojiName} to clipboard`);
    } catch (error) {
        console.error('Failed to copy text: ', error);
    }
}

function extraction(url) {
     return url.replace(/.*\/unicode\//, "").replace(/\.png\?v8/, "");
}
