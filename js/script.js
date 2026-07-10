console.log("Welcome to Dev Yadav Portfolio");

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.background="#0d6efd";
card.style.color="white";

});

card.addEventListener("mouseout",()=>{

card.style.background="white";
card.style.color="black";

});

});