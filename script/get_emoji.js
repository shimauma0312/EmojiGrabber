const emojiList = await octokit.request('GET /emojis', {
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
});
const emojiDiv = document.getElementById("emoji_list");
for (const [key, value] of Object.entries(emojiList.data)) {
    const img = document.createElement("img");
    img.src = value;
    img.alt = key;
    img.title = key;
    img.onclick = function () {
        navigator.clipboard.writeText(key);
    };
    emojiDiv.appendChild(img);
}
