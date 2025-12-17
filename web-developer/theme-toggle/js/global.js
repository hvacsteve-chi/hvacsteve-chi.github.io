const rootHTML = document.documentElement;
console.log(rootHTML);
const rootHEAD = document.head;
console.log(rootHEAD);
const rootTITLE = document.title;
console.log(rootTITLE);
const rootBODY = document.body;
console.log(rootBODY);
const rootAPP = document.querySelector("#SITEAPP");
console.log(rootAPP);
const footerSpanDateNow = document.querySelector("#FOOTERSPANDATENOW");
console.log(footerSpanDateNow);
const newDATE = new Date();
console.log(newDATE);
const BRAND = {
    name: "Faith Heating and Cooling Chicago",
    shortName: "Faith HVAC",
    address: "1709 W. Cornelia Ave, Chicago, IL 60657",
    phone: 7734134100,
    email: "faithheatingcooling@gmail.com"
};
console.log(BRAND);
footerSpanDateNow.innerHTML = `&copy ${newDATE.getFullYear()} ${BRAND.shortName} - ${BRAND.address}`;

