import User from "./User.js"
let user1 = new User("Tijmen", "18, Ik ben spontaan en houd van gamen. Mijn favorite spellen zijn: Battlefield, Call of Duty en Fortnite. Ik heb ook een passie voor schilderen.", true);
let user2 = new User("Petra", "17, Ben je gezellig en wil je een keer koffie drinken, voeg mij toe. Dan gaan we naar de dicht bij zijnste starbucks en gaan we lekker een bakkie doen.", false);
let user3 = new User("Stefan", "18, Ik ben een echte klusser. Ik ga een automonteur worden. Ik hou van formule kijken en ook van uit gaan. Hebben we dezelfde hobbies? Voeg me dan toe.", true);
let user4 = new User("Ella", "23, Ben je gezellig en wil je een keer koffie drinken, voeg mij toe. Dan gaan we naar de dicht bij zijnste starbucks en gaan we lekker een bakkie doen.", false);
let user5 = new User("Felix", "16, Ik ben een streamer. Ik speel vooral League of legends en ben er ook heel erg goed in. Ik hou ook van uit gaan. ", true);
let user6 = new User("Mo", "20, Ben een Gymleraar in opleiding. Hou van kletsen, ben een grote anime fan", true);
let user7 = new User("Finet", "17, Zit op Yudo. Heb geneeskunde geleerd op school sta open voor verschillende soorten uitdagingen", true);
let user8 = new User("Ivo", "17, Hou van dansen in de discotheek, heb een bijbaantje ik probeer altijd iets nieuws te vinden. ", false);
let user9 = new User("Branco", "18, Hou je van voetballen? dan ben ik jou grootste vriend we zijn op zoek naar een nieuwe team maatje", true);
let user10 = new User("Jan", "19, Heb altijd liefde gehad voor schilderen ben jij ook zo 1? laat het me weten!", true);
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

