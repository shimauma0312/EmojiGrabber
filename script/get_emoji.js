// getEmoji();

// async function getEmoji() {
    
//     // const emojiList = await octokit.request('GET /emojis', {
//     //     headers: {
//     //         'X-GitHub-Api-Version': '2022-11-28'
//     //     }
//     // });
//     // const emojiDiv = document.getElementById("emoji_list");
//     // for (const [key, value] of Object.entries(emojiList.data)) {
//     //     const img = document.createElement("img");
//     //     img.src = value;
//     //     img.alt = key;
//     //     img.title = key;
//     //     img.onclick = function () {
//     //         navigator.clipboard.writeText(key);
//     //     };
//     //     emojiDiv.appendChild(img);
//     // }
// }
const url = "https://api.github.com/emojis";
const emojiList = document.getElementById("emoji_list");

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

getEmoji();
