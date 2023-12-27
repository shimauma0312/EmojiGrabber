import { getEmoji } from "./emoji_controller.js";
import { copy_name } from "./emoji_controller.js";

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const listBox = document.getElementById('list_box');

    /* inputタグ内の文字列で検索し、合致絵文字をピックアップして表示 */
    searchInput.addEventListener('input', emoji_search);

    /*リストをgetEmojiでデータを取り出し、searchInputでキーワードで検索する */
    function emoji_search() {
        const searchWord = searchInput.value;
        const emoji_data = getEmoji();
        for (const [name, url] of Object.entries(emoji_data)) {
            /*nameとsearchWordを部分一致で比較し、合致すればリスト表示させる */
            if (name.indexOf(searchWord) != -1) {
                listBox.style.display = "block";
                displayEmoji(emoji_data);
            } else {
                listBox.style.display = "none";
            }
        }

    }

    function displayEmoji(data) {
        const emojiList = document.getElementById("emoji_list");
        if (!emojiList)
            return;
        for (const [name, url] of Object.entries(data)) {
            const emojiImage = document.createElement("img");
            emojiImage.id = "emoji_img";
            emojiImage.src = url;
            emojiImage.alt = name;
            //クリックイベント
            emojiImage.addEventListener("click", copy_name);

            //TODO リテラルのみ引き出す正規表現修正
            const strippedUrl = url.replace(/.*\/unicode\//, "").replace(/\.png\?v8/, "");
            console.log(strippedUrl);
            emojiImage.setAttribute("data_emoji_name", strippedUrl);
            /* element統合 */
            const emojiElement = document.createElement("li");
            // 絵文字の名前をname属性に持たせる
            emojiElement.id = "emoji_element";
            emojiElement.name = name;
            emojiElement.class = "flex";

            emojiElement.appendChild(emojiImage);
            // emojiElement.appendChild(emojiName);
            emojiList.appendChild(emojiElement);
        }
    }
});