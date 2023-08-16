const ws = new WebSocket("ws://localhost:8080");

function showMessage(text, isMine) {
    document.getElementById("messages").innerHTML += `
    <div class="message-row ${isMine ? "mine" : "their"}">
        <div class="bubble">${text}</div>
    </div>
` }


ws.addEventListener("message", (event) => {
    event.data.text().then((text) => {
        showMessage(text, false);
    })
});

document.querySelector("form").onsubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector("input");
    ws.send(input.value);
    showMessage(input.value, true);



    input.value = "";
};
