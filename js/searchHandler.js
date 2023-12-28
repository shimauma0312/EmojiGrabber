import { copy_name } from "./emoji_controller.js";

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');

    /* 
    * inputタグ内の文字列で検索し、合致絵文字をピックアップして表示
    */
    searchInput.addEventListener('input', function () {
        // inputタグ内の文字列が空でなければ、emoji_searchを実行する
        if (this.value.trim() !== '') {
            emoji_search();
        } else {
            console.log("searchInput is empty");
            chrome.storage.local.get("json", function(data) {
                displayEmoji(Object.entries(data.json));
            });
        }
    });

});

/**
 * リストをgetEmojiでデータを取り出し、searchInputでキーワードで検索する
 */
async function emoji_search() {
    const searchWord = searchInput.value;
    chrome.storage.local.get("json", function(data) {
        let true_list = [];
        for (const [name, url] of Object.entries(data.json)) {
            // nameとsearchWordを部分一致で比較し、合致すればリストにadd
            if (name.indexOf(searchWord) != -1) {
                console.log("name:", name);
                console.log("url:", url);

                true_list.push([name, url]);
            } else {
                // 合致しない場合は何もしない
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

/**
 * emoji_listに絵文字を表示する
 * @param {Array} data 絵文字の名前,URLの配列
 */
function displayEmoji(data) {
    clearList();
    const emojiList = document.getElementById("emoji_list");
    for (const [name, url] of data) {
        const emojiImage = document.createElement("img");
        emojiImage.id = "emoji_img";
        emojiImage.src = url;
        emojiImage.alt = name;
        emojiImage.setAttribute("data_emoji_name", url);

        /* 
        * element統合
        */
        const emojiElement = document.createElement("li");
        // 絵文字の名前をname属性に持たせる
        emojiElement.id = "emoji_element";
        emojiElement.name = name;
        emojiElement.class = "flex";

        emojiElement.appendChild(emojiImage);
        emojiList.appendChild(emojiElement);

        //クリックイベント
        emojiImage.addEventListener("click", () => copy_name(String(emojiImage.getAttribute("data_emoji_name"))));
    }
}