import { getEmoji } from "./emoji_controller.js";
import { copy_name } from "./emoji_controller.js";
import { showCopyTooltip } from "./mouse_event.js";
document.addEventListener("DOMContentLoaded", async function () {
    const emoji_data = await getEmoji();
    displayEmoji(emoji_data);
});

/**
 * emoji_listに絵文字を表示する
 * @param {*} data
 */
function displayEmoji(data) {
    const emojiList = document.getElementById("emoji_list");
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

        emojiElement.appendChild(emojiImage);
        emojiList.appendChild(emojiElement);

        //クリックイベント
        emojiImage.addEventListener("click", (event) => {
            copy_name(String(emojiImage.getAttribute("data_emoji_name")));
            showCopyTooltip(event);
        });
    }
}