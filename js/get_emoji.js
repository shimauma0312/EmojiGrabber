import { bookmarkEmoji, copy_name, getEmoji } from "./emoji_controller.js";
import { showTooltip } from "./mouse_event.js";
document.addEventListener("DOMContentLoaded", async function () {
    const emoji_data = await getEmoji();
    displayBookmarks();
    displayEmoji(emoji_data, "emoji_list", false);
});

/**
 * emoji_listに絵文字を表示する
 * @param {*} data
 * @param {*} elementId
 * 
 */
function displayEmoji(data, elementId, isBookmarkElemets) {
    const emojiList = document.getElementById(elementId);
    // emojilistのhtmlをクリアする
    emojiList.innerHTML = "";
    if (!emojiList)
        return;
    for (const [name, url] of Object.entries(data)) {
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

        emojiList.appendChild(emojiElement.appendChild(emojiImage));

        //クリックイベント
        emojiImage.addEventListener("click", (event) => {
            copy_name(String(emojiImage.getAttribute("data_emoji_name")));
            showTooltip(event);
        });

        // コピー
        emojiImage.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            bookmarkEmoji({
                name: String(emojiImage.getAttribute("data_emoji_name")),
                url: String(emojiImage.getAttribute("src"))
              });        
            displayBookmarks();
        });

        // ブックマークのツールチップを表示
        emojiImage.addEventListener("mouseover", (event) => {
            if (!isBookmarkElemets) return;
            showTooltip(event,isBookmarkElemets)
        });

    }
}

function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    console.log("ブックマーク：" + bookmarks);
    if (bookmarks){
        displayEmoji(bookmarks, "bookmark_list", true);
    }

}
