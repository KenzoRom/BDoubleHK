import User from "./User.js"
let user1 = new User("Tijmen", "18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", true);
let user2 = new User("Petra", "17, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", false);
let user3 = new User("Stefan", "18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", true);
let user4 = new User("Ella", "23, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", false);
let user5 = new User("Felix", "16, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", true);
let user6 = new User("Mo", "20, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", true);
let user7 = new User("Finet", "17, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", true);
let user8 = new User("Ivo", "17, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", false);
let user9 = new User("Branco", "18, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", true);
let user10 = new User("Jan", "19, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", true);
let currentUser = 0;
let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
let matchedUsers = [];

const dislikeButton = document.querySelector(".dislike");
const likeButton = document.querySelector(".like");
const nameUser = document.querySelector(".name");
const bioUser = document.querySelector(".bio");
const saveStorageButton = document.querySelector(".save-to-session");

nameUser.textContent = users[currentUser].name;
bioUser.textContent = users[currentUser].bio;
currentUser++;

saveStorageButton.addEventListener('click', (e) => {
    sessionStorage.setItem('matchedusersarray', JSON.stringify(matchedUsers));
})

dislikeButton.addEventListener('click', (e) => {
    if(currentUser > 8){
        nameUser.textContent = "Cool!"
        bioUser.textContent = "You're all caught up."
    }
    else{
        users[currentUser].userLike = false;
        nextUser();
    }
})

likeButton.addEventListener('click', (e) => {
    if(currentUser > 8){
        nameUser.textContent = "Cool!"
        bioUser.textContent = "You're all caught up."
    }
    else{
        users[currentUser].userLike = true;
        addMatch();
        nextUser();
    }
})

function nextUser(){
    currentUser++
    nameUser.textContent = users[currentUser].name;
    bioUser.textContent = users[currentUser].bio;
}

function addMatch(){
    if(users[currentUser].like == true){
        alert("Match!!")
        console.log(currentUser);
        matchedUsers.push(users[currentUser].name);
    }
    else{
        console.log("jnk");
        alert("Not interested in you.");
    }
}

