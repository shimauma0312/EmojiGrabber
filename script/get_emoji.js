/*
*/
const url = "https://api.github.com/emojis";

async function getEmoji() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayEmoji(data);
    } catch (error) {
        console.error(error);
    }
}

function displayEmoji(data) {
    const emojiList = document.getElementById("emoji_list");
    for (const [name, url] of Object.entries(data)) {
        const emojiImage = document.createElement("img");
        emojiImage.src = url;
        emojiImage.alt = name;
        emojiImage.title = name;
        const emojiName = document.createElement("span");
        emojiName.textContent = name;
        const emojiElement = document.createElement("li");
        emojiElement.appendChild(emojiImage);
        emojiElement.appendChild(emojiName);
        emojiList.appendChild(emojiElement);
    }
}

document.addEventListener("DOMContentLoaded", getEmoji);