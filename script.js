const quantity = document.getElementById("quantity");

function convertLength(q) {
    let f = (q*3.281).toFixed(3);
    let m = (q/3.281).toFixed(3);
    const c1 = document.getElementById("c1");
    c1.innerText = `${q} meters = ${f} feet | ${q} feet = ${m} meters`
}

function convertVolume(q) {
    let g = (q*0.264).toFixed(3);
    let l = (q/0.264).toFixed(3);
    const c2 = document.getElementById("c2");
    c2.innerText = `${q} liters = ${g} gallons | ${q} gallons = ${l} liters`
}

function convertMass(q) {
    let p = (q*2.204).toFixed(3);
    let k = (q/2.204).toFixed(3);
    const c3 = document.getElementById("c3");
    c3.innerText = `${q} kilos = ${p} pounds | ${q} pounds = ${k} kilos`
}

function convert() {
    const quant = parseInt(quantity.value);
    convertLength(quant);
    convertVolume(quant);
    convertMass(quant);
}