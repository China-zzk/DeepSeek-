const API_KEY = "sk-078e463efd5b43de92990b6eb00baa8b";  // 替换为你的 DeepSeek API 密钥
const API_ENDPOINT = "https://api.deepseek.com/v1/chat/completions";

async function getDeepSeekResponse() {
    const inputText = document.getElementById("inputText").value;
    const responseElement = document.getElementById("response");

    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [{ role: "user", content: inputText }],
                temperature: 0.7
            })
        });

        const data = await response.json();
        responseElement.innerText = data.choices[0].message.content;
    } catch (error) {
        responseElement.innerText = "Error: " + error.message;
    }
}
