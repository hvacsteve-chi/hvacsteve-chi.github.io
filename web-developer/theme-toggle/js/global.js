const rootHTML = document.documentElement;
console.log(rootHTML);
const rootBODY = document.body;
console.log(rootBODY);
const rootHEAD = document.head;
console.log(rootHEAD);
const rootTITLE = document.title;
console.log(rootTITLE);
const rootAPP = document.querySelector("APP");
console.log(rootAPP);
const DATENowSpan = document.getElementById("DATEnow");
console.log(DATENowSpan);
const NEWDate = new Date();
console.log(NEWDate);
DATENowSpan.innerHTML = NEWDate.getFullYear() + " ";

