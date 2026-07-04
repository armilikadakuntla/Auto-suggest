
const users = [
  {
    "name" :"Akshitha",
    "gender" : "Female",
    "image" : "./images/avatar.jpg"
  },
  {
    "name" :"Armili",
    "gender" : "Female",
    "image" : "./images/Armili.jpg"
  },
]
let curUserId = 0;
function toggle(){
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
   document.getElementById("profile-img").src = users[curUserId].image;
    document.getElementById("card-name").innerText = users[curUserId].name;
    document.getElementById("card-gender").innerText = users[curUserId].gender;
}

  console.log("Hello from JS");
  alert("hello from js");