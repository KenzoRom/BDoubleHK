console.log("JS Loaded!");
const indexBtn = document.querySelector(".home-icon");
const userBtn = document.querySelector(".user-icon");
const chatListBtn = document.querySelector(".chat-icon");
const settingBtn = document.querySelector(".settings-icon");
 
if(indexBtn){
    indexBtn.addEventListener("click", ()=>{
        window.location.href = "swipe.html";
    })
}
 
if(userBtn){
    userBtn.addEventListener("click", ()=>{
        window.location.href = "user.html";
    })
}
 
if(chatListBtn){
    chatListBtn.addEventListener("click", ()=>{
        window.location.href = "chat.html";
    })
}
