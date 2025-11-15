let user = "Гость";

function enterChat(event) {
    event.preventDefault();
    const nickname = document.getElementById("nickname").value.trim();
    
    if (nickname) {
        user = nickname;
        document.getElementById('currentUser').textContent = `Ник: ${user}`;
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('chatScreen').style.display = 'flex';
        
        const messages = document.getElementById('messages');
        const welcomeMsg = document.createElement('p');
        welcomeMsg.innerHTML = `<b>Система:</b> Привет, ${user}!`;
        messages.appendChild(welcomeMsg);
        
        document.getElementById('messageInput').focus();
    }
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    
    if (text) {
        const messages = document.getElementById('messages');
        const messageElement = document.createElement('p');
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        messageElement.innerHTML = `<b>[${time}] ${user}:</b> ${text}`;
        messages.appendChild(messageElement);
        
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
}

function changeNick() {
    const newNick = prompt("Введите новый ник:", user);
    
    if (newNick && newNick.trim() !== "") {
        const oldNick = user;
        user = newNick.trim();
        document.getElementById('currentUser').textContent = `Ник: ${user}`;
        
        const messages = document.getElementById('messages');
        const systemMsg = document.createElement('p');
        systemMsg.innerHTML = `<b>Система:</b> ${oldNick} теперь известен как ${user}`;
        messages.appendChild(systemMsg);
        messages.scrollTop = messages.scrollHeight;
    }
}

document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});