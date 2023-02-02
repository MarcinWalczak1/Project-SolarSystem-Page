const sunBtn = document.querySelector(".sun-btn a");
const beforeDiv = document.querySelector(".sun-before");
const afterDiv = document.querySelector('.list-sun-info');

const mercuryBtn = document.querySelector(".mercury-btn a");
const beforeMerkuryDiv = document.querySelector(".mercury-before");
const afterMerkuryDiv = document.querySelector('.list-mercury-info');

const wenusBtn = document.querySelector(".wenus-btn a");
const beforeWenusDiv = document.querySelector(".wenus-before");
const afterWenusDiv = document.querySelector('.list-wenus-info');

const earthBtn = document.querySelector(".earth-btn a");
const beforeEarthDiv = document.querySelector(".earth-before");
const afterEarthDiv = document.querySelector('.list-earth-info');

const marshBtn = document.querySelector(".mars-btn a");
const beforeMarsDiv = document.querySelector(".mars-before");
const afterMarsDiv = document.querySelector('.list-mars-info');

const jupiterhBtn = document.querySelector(".jupiter-btn a");
const beforeJupiterDiv = document.querySelector(".jupiter-before");
const afterJupiterDiv = document.querySelector('.list-jupiter-info');

const saturnhBtn = document.querySelector(".saturn-btn a");
const beforeSaturnDiv = document.querySelector(".saturn-before");
const afterSaturnDiv = document.querySelector('.list-saturn-info');

const uranBtn = document.querySelector(".uran-btn a");
const beforeUranDiv = document.querySelector(".uran-before");
const afterUranDiv = document.querySelector('.list-uran-info');


const neptunBtn = document.querySelector(".neptun-btn a");
const beforeNeptunDiv = document.querySelector(".neptun-before");
const afterNeptunDiv = document.querySelector('.list-neptun-info');

const plutonBtn = document.querySelector(".pluton-btn a");
const beforePlutonDiv = document.querySelector(".pluton-before");
const afterPlutonDiv = document.querySelector('.list-pluton-info');

// visibility list-sun-info div, after click
sunBtn.addEventListener('click', ()=>{
    beforeDiv.classList.add("before-after-click");
    afterDiv.style.display = 'flex';
})

// visibility list-mercury-info div, after click
mercuryBtn.addEventListener('click', ()=>{
    beforeMerkuryDiv.style.display = 'none';
    afterMerkuryDiv.style.display = 'flex';
})
// visibility list-wenus-info div, after click
wenusBtn.addEventListener('click', ()=>{
    beforeWenusDiv.style.display = 'none';
    afterWenusDiv.style.display = 'flex';
})

// visibility list-earth-info div, after click
earthBtn.addEventListener('click', ()=>{
    beforeEarthDiv.style.display = 'none';
    afterEarthDiv.style.display = 'flex';
})
// visibility list-mars-info div, after click
marshBtn.addEventListener('click', ()=>{
    beforeMarsDiv.style.display = 'none';
    afterMarsDiv.style.display = 'flex';
})
// visibility list-jupiter-info div, after click
jupiterhBtn.addEventListener('click', ()=>{
    beforeJupiterDiv.style.display = 'none';
    afterJupiterDiv.style.display = 'flex';
})
// visibility list-saturn-info div, after click
saturnhBtn.addEventListener('click', ()=>{
    beforeSaturnDiv.style.display = 'none';
    afterSaturnDiv.style.display = 'flex';
})
// visibility list-uran-info div, after click
uranBtn.addEventListener('click', ()=>{
    beforeUranDiv.style.display = 'none';
    afterUranDiv.style.display = 'flex';
})
// visibility list-neptun-info div, after click
neptunBtn.addEventListener('click', ()=>{
    beforeNeptunDiv.style.display = 'none';
    afterNeptunDiv.style.display = 'flex';
})
// visibility list-pluto-info div, after click
plutonBtn.addEventListener('click', ()=>{
    beforePlutonDiv.style.display = 'none';
    afterPlutonDiv.style.display = 'flex';
})

// scroll animation
window.addEventListener("scroll", () => {
    // get elements div
    let sunBtnDiv = document.querySelector('.sun-btn')
    let mercuryBbtnDiv = document.querySelector('.mercury-btn')
    let wenusBtnDiv = document.querySelector('.wenus-btn')
    let earthBtnDiv = document.querySelector('.earth-btn')
    let marsBtnDiv = document.querySelector('.mars-btn')
    let jupiterBtnDiv = document.querySelector('.jupiter-btn')
    let saturnBtnDiv = document.querySelector('.saturn-btn')
    let uranBtnDiv = document.querySelector('.uran-btn')
    let neptunBtnDiv = document.querySelector('.neptun-btn')
    let plutonBtnDiv = document.querySelector('.pluton-btn')
    


   //set height elements 
    let sunDivPosition = sunBtnDiv.getBoundingClientRect().top;
    let mercuryDivPosition = mercuryBbtnDiv.getBoundingClientRect().top
    let wenusDivPosition = wenusBtnDiv.getBoundingClientRect().top
    let earthDivPosition = earthBtnDiv.getBoundingClientRect().top
    let marsDivPosition = marsBtnDiv.getBoundingClientRect().top
    let jupiterDivPosition = jupiterBtnDiv.getBoundingClientRect().top
    let saturnDivPosition = saturnBtnDiv.getBoundingClientRect().top
    let uranDivPosition = uranBtnDiv.getBoundingClientRect().top
    let neptunDivPosition = neptunBtnDiv.getBoundingClientRect().top
    let plutonDivPosition = plutonBtnDiv.getBoundingClientRect().top
    
    
    let screenPosition = window.innerHeight /2 ;

    if(sunDivPosition < screenPosition){
        sunBtnDiv.classList.add('active')
    if(mercuryDivPosition < screenPosition){
        mercuryBbtnDiv.classList.add('active')
    }
    if(wenusDivPosition < screenPosition){
        wenusBtnDiv.classList.add('active')
    }
    if(earthDivPosition < screenPosition){
        earthBtnDiv.classList.add('active')
    }
    if(marsDivPosition < screenPosition){
        marsBtnDiv.classList.add('active')
    }
    if(jupiterDivPosition < screenPosition){
        jupiterBtnDiv.classList.add('active')
    }
    if(saturnDivPosition < screenPosition){
        saturnBtnDiv.classList.add('active')
    }
    if(uranDivPosition < screenPosition){
        uranBtnDiv.classList.add('active')
    }
    if(neptunDivPosition < screenPosition){
        neptunBtnDiv.classList.add('active')
    }
    if(plutonDivPosition < screenPosition){
        plutonBtnDiv.classList.add('active')
    }
    

    }else{
        sunBtnDiv.classList.remove('active')
        mercuryBbtnDiv.classList.remove('active')
        wenusBtnDiv.classList.remove('active')
        earthBtnDiv.classList.remove('active')
        marsBtnDiv.classList.remove('active')
        jupiterBtnDiv.classList.remove('active')
        saturnBtnDiv.classList.remove('active')
        uranBtnDiv.classList.remove('active')
        neptunBtnDiv.classList.remove('active')
        plutonBtnDiv.classList.remove('active')
        
    }

})








