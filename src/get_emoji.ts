const url: string = "https://api.github.com/emojis";

interface EmojiData {
    [key: string]: string;
}

async function getEmoji(): Promise<void> {
    try {
        const response = await fetch(url);
        const data: EmojiData = await response.json();
        displayEmoji(data);
    } catch (error) {
        console.error(error);
    }
}

function displayEmoji(data: EmojiData): void {
    const emojiList = document.getElementById("emoji_list");
    if (!emojiList) return; // Element not found

    for (const [name, url] of Object.entries(data)) {
        const emojiImage = document.createElement("img");
        emojiImage.src = url;
        emojiImage.alt = name;
        emojiImage.setAttribute("data-emoji-name", name);
        emojiImage.addEventListener("click", copy_name);
        const emojiName = document.createElement("span");
        emojiName.textContent = name;
        const emojiElement = document.createElement("li");
        emojiElement.appendChild(emojiImage);
        emojiElement.appendChild(emojiName);
        emojiList.appendChild(emojiElement);
    }
}

async function copy_name(this: HTMLElement) {
    const emojiName = this.getAttribute("data-emoji-name");
    if (!emojiName) return;
    try {
        await navigator.clipboard.writeText(emojiName);
        console.log(`Copied ${emojiName} to clipboard`);
    } catch (error) {
        console.error('Failed to copy text: ', error);
    }
}

document.addEventListener("DOMContentLoaded", getEmoji);