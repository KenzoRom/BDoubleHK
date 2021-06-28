let matchedUsers = JSON.parse(sessionStorage.getItem("matchedusersarray"));

const name1 = document.querySelector('.name-1');
const name2 = document.querySelector('.name-2');
const name3 = document.querySelector('.name-3');
const name4 = document.querySelector('.name-4');
const name5 = document.querySelector('.name-5');
const name6 = document.querySelector('.name-6');
const name7 = document.querySelector('.name-7');
const profilePic1 = document.querySelector('.profile-pic');
const profilePic2 = document.querySelector('.profile-pic2');
const profilePic3 = document.querySelector('.profile-pic3');
const profilePic4 = document.querySelector('.profile-pic4');
const profilePic5 = document.querySelector('.profile-pic5');
const profilePic6 = document.querySelector('.profile-pic6');
const profilePic7 = document.querySelector('.profile-pic7');


if(matchedUsers[0]){
    name1.textContent = matchedUsers[0];
}else {
    profilePic1.style.display='none';
    name1.textContent = "";
}
if(matchedUsers[1]){
    name2.textContent = matchedUsers[1];
}else {
    profilePic2.style.display='none';
    name2.textContent = "";
}
if(matchedUsers[2]){
    name3.textContent = matchedUsers[2];
}else {
    profilePic3.style.display='none';
    name3.textContent = "";
}
if(matchedUsers[3]){
    name4.textContent = matchedUsers[3];
}else {
    profilePic4.style.display='none';
    name4.textContent = "";
}
if(matchedUsers[4]){
    name5.textContent = matchedUsers[4];
}else {
    profilePic5.style.display='none';
    name5.textContent = "";
}
if(matchedUsers[5]){
    name6.textContent = matchedUsers[5];
}else {
    profilePic6.style.display='none';
    name6.textContent = "";
}
if(matchedUsers[6]){
    name7.textContent = matchedUsers[6];
}else {
    profilePic7.style.display='none';
    name7.textContent = "";
}




/*for(let i = 0; i = nameLabels.length; i++){
    name1.textContent = "hallo";
    console.log("hallo")
}*/

