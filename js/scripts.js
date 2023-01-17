/* 
   OUR TEAM

   STEP:
   1. 
   2.
   3.
 */



// Array che conterrà i membri del team
const team = [];


const memberOne = {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg"
};

const memberTwo = {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg"
};

const memberThree = {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "walter-gordon-office-manager.jpg"
};

const memberFour = {
    name: "Angela Lopez",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg"
};

const memberFive = {
    name: "Scott Estrada",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg"
};

const memberSix = {
    name: "Barbara Ramos",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg"
};

// Push dei vari membri nell'array team
team.push(memberOne, memberTwo, memberThree, memberFour, memberFive, memberSix);

console.log("team", team);

// Stampa in console di ogni membro e delle informazioni relative ad esso
for (let index = 0; index < team.length; index++) {
    let member = team[index];
    console.log("Membro del team n." + [index], member);
     
 }

 // Stampa nel DOM l'elenco del team
 const listTeam = document.querySelector(".li");

 for (let index = 0; index < team.length; index++) {
    const memberItem = document.createElement("li");
    memberItem.innerHTML = team[index].name + " --- " + team[index].role + " --- " + team[index].photo;
    listTeam.append(memberItem);
    
 }