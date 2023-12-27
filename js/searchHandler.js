import { copy_name } from "./emoji_controller.js";

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');

    /* inputタグ内の文字列で検索し、合致絵文字をピックアップして表示 */
    searchInput.addEventListener('input', function () {
        // inputタグ内の文字列がからでなければ、emoji_searchを実行する
        if (this.value.trim() !== '') {
            emoji_search();
        }
    });

});

/*リストをgetEmojiでデータを取り出し、searchInputでキーワードで検索する */
async function emoji_search() {
    const searchWord = searchInput.value;
    chrome.storage.local.get("json", function(data) {
        let true_list = [[]];
        for (const [name, url] of Object.entries(data.json)) {
            /*nameとsearchWordを部分一致で比較し、合致すればリストにaddする */
            if (name.indexOf(searchWord) != -1) {
                console.log("name:", name);
                console.log("url:", url);

                true_list.push([name, url]);
            } else {
            }
        }
        displayEmoji(true_list);
    });
}
/**
 * emoji_listの子要素を全て削除する
 */
function clearList() {
    const emojiList = document.getElementById("emoji_list");
    if (!emojiList)
        return;
    while (emojiList.firstChild) {
        emojiList.removeChild(emojiList.firstChild);

    }
}

function displayEmoji(data) {
    clearList();
    const emojiList = document.getElementById("emoji_list");
    // data[[]]を展開して、nameとurlを取り出す。取り出したら、emojiElementを作成し、emojiListに追加する。
    for (const [name, url] of data) {
        const emojiImage = document.createElement("img");
        emojiImage.id = "emoji_img";
        emojiImage.src = url;
        emojiImage.alt = name;
        //TODO リテラルのみ引き出す正規表現修正
        emojiImage.setAttribute("data_emoji_name", url);

        /* element統合 */
        const emojiElement = document.createElement("li");
        // 絵文字の名前をname属性に持たせる
        emojiElement.id = "emoji_element";
        emojiElement.name = name;
        emojiElement.class = "flex";

        emojiElement.appendChild(emojiImage);
        // emojiElement.appendChild(emojiName);
        emojiList.appendChild(emojiElement);

        //クリックイベント
        emojiImage.addEventListener("click", () => copy_name(String(emojiImage.getAttribute("data_emoji_name"))));
        // emojiImage.addEventListener("click", copy_name(emojiImage.getAttribute("data_emoji_name")));
    }
}