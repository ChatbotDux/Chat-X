
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");

const welcomeScreen = document.getElementById("welcomeScreen");

const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

const newChatBtn = document.getElementById("newChatBtn");


/* =========================================
   SEND MESSAGE
========================================= */

function sendMessage() {

    const text = messageInput.value.trim();

    if (text === "") {
        return;
    }


    // Hide welcome screen

    welcomeScreen.style.display = "none";


    // Create user message

    const userMessage = document.createElement("div");

    userMessage.className = "message user";

    userMessage.textContent = text;

    messages.appendChild(userMessage);


    // Clear input

    messageInput.value = "";

    messageInput.style.height = "auto";


    // Temporary AI response

    setTimeout(() => {

        const aiMessage = document.createElement("div");

        aiMessage.className = "message ai";

        aiMessage.textContent =
            "Hello! I am your AI assistant. My full AI system will be connected later.";

        messages.appendChild(aiMessage);

        messages.scrollTop = messages.scrollHeight;

    }, 500);


    messages.scrollTop = messages.scrollHeight;
}


/* =========================================
   SEND BUTTON
========================================= */

sendBtn.addEventListener("click", sendMessage);


/* =========================================
   ENTER TO SEND
========================================= */

messageInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();

    }

});


/* =========================================
   AUTO RESIZE TEXTAREA
========================================= */

messageInput.addEventListener("input", function() {

    this.style.height = "auto";

    this.style.height = this.scrollHeight + "px";

});


/* =========================================
   OPEN SIDEBAR
========================================= */

openSidebar.addEventListener("click", function() {

    sidebar.classList.add("open");

});


/* =========================================
   CLOSE SIDEBAR
========================================= */

closeSidebar.addEventListener("click", function() {

    sidebar.classList.remove("open");

});


/* =========================================
   NEW CHAT
========================================= */

newChatBtn.addEventListener("click", function() {

    messages.innerHTML = "";

    welcomeScreen.style.display = "block";

    messageInput.value = "";

});
