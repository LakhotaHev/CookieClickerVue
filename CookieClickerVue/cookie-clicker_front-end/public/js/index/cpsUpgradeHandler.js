import {cookies,cps,changeAmountOfCookies, changeCps} from './cookieHandler.js'

export let cursors = 0;
let cursorPrice = 15;
let cursorCPS = 0.1;
export let grandmas = 0;
let grandmaPrice = 100;
let grandmaCPS = 1;
export let farms = 0;
let farmPrice = 1100;
let farmCPS = 8;
export let mines = 0;
let minePrice = 12000;
let mineCPS = 47;
export let factories = 0;
let factoryPrice = 130000;
let factoryCPS = 260;
export let banks = 0;
let bankPrice = 1400000;
let bankCPS = 1400;
export let temples = 0;
let templePrice = 20000000;
let templeCPS = 7800;
export let wizards = 0;
let wizardPrice = 330000000;
let wizardCPS = 44000;
export let shipments = 0;
let shipmentPrice = 5100000000;
let shipmentCPS = 260000;
export let alchemies = 0;
let alchemyPrice = 75000000000;
let alchemyCPS = 1600000;
export let portals = 0;
let portalPrice = 1000000000000;
let portalCPS = 10000000;
export let timeMs = 0;
let timeMPrice = 14000000000000;
let timeMCPS = 65000000;
export let antis = 0;
let antiPrice = 170000000000000;
let antiCPS = 430000000;
export let prisms = 0;
let prismPrice = 2100000000000000;
let prismCPS = 2100000000;
export let chances = 0;
let chancePrice = 26000000000000000n;
let chanceCPS = 21000000000;
export let fractals = 0;
let fractalPrice =  310000000000000000n;
let fractalCPS = 150000000000;
export let javas = 0;
let javaPrice = 71000000000000000000n;
let javaCPS =  11000000000000;
export let idles = 0;
let idlePrice = 12000000000000000000000n;
let idleCPS = 8300000000000;
export let cortexs = 0;
let cortexPrice = 1900000000000000000000000n;
let cortexCPS = 64000000000000;


export function load(_cursors,_grandmas,_farms,_mines,_factories,_banks,_temples,_wizards,_shipments,_alchemies,_portals,_timeMs,_antis,_prisms,_chances,_fractals,_javas,_idles,_cortexs)
{
    //cursors
    cursors = isNaN(_cursors) ? 0:_cursors/* if the cursors is not a number set it to 0*/
    cursorPrice = cursorPrice*Math.pow(1.15, cursors);
    document.getElementById("cursor-building").querySelector(".price-text").innerHTML = Math.round(cursorPrice);
    changeCps(cps+cursorCPS*cursors);
    //grandmas
    grandmas = isNaN(_grandmas) ? 0:_grandmas/* pass in val of _grand unless its NAN */
    grandmaPrice = grandmaPrice * Math.pow(1.15, grandmas);
    document.getElementById("grandma-building").querySelector(".price-text").innerHTML = Math.round(grandmaPrice);
    changeCps(cps+grandmaCPS*grandmas);
    //farms
    farms = isNaN(_farms) ? 0:_farms/* pass in val of _grand unless its NAN */
    farmPrice = farmPrice * Math.pow(1.15, farms);
    document.getElementById("farm-building").querySelector(".price-text").innerHTML = Math.round(farmPrice);
    changeCps(cps+farmCPS*farms);
    //mines
    mines = isNaN(_mines) ? 0:_mines/* pass in val of _grand unless its NAN */
    minePrice = minePrice * Math.pow(1.15, mines);
    document.getElementById("mine-building").querySelector(".price-text").innerHTML = Math.round(minePrice);
    changeCps(cps+mineCPS*mines);
    //factories
    factories = isNaN(_factories) ? 0:_factories/* pass in val of _grand unless its NAN */
    factoryPrice = factoryPrice * Math.pow(1.15, factories);
    document.getElementById("factory-building").querySelector(".price-text").innerHTML = Math.round(factoryPrice);
    changeCps(cps+factoryCPS*factories);
    //banks
    banks = isNaN(_banks) ? 0:_banks/* pass in val of _grand unless its NAN */
    bankPrice = bankPrice * Math.pow(1.15, banks);
    document.getElementById("bank-building").querySelector(".price-text").innerHTML = Math.round(bankPrice);
    changeCps(cps+bankCPS*banks);
    //temples
    temples = isNaN(_temples) ? 0:_temples/* pass in val of _grand unless its NAN */
    templePrice = templePrice * Math.pow(1.15, temples);
    document.getElementById("temple-building").querySelector(".price-text").innerHTML = Math.round(templePrice);
    changeCps(cps+templeCPS*temples);
    //wizards
    wizards = isNaN(_wizards) ? 0:_wizards/* pass in val of _grand unless its NAN */
    wizardPrice = wizardPrice * Math.pow(1.15, wizards);
    document.getElementById("wizard-building").querySelector(".price-text").innerHTML = Math.round(wizardPrice);
    changeCps(cps+wizardCPS*wizards);
    //shipments
    shipments = isNaN(_shipments) ? 0:_shipments/* pass in val of _grand unless its NAN */
    shipmentPrice = shipmentPrice * Math.pow(1.15, shipments);
    document.getElementById("shipment-building").querySelector(".price-text").innerHTML = Math.round(shipmentPrice);
    changeCps(cps+shipmentCPS*shipments);
    //alchemy
    alchemies = isNaN(_alchemies) ? 0:_alchemies/* pass in val of _grand unless its NAN */
    alchemyPrice = alchemyPrice * Math.pow(1.15, alchemies);
    document.getElementById("alchemy-building").querySelector(".price-text").innerHTML = Math.round(alchemyPrice);
    changeCps(cps+alchemyCPS*alchemies);
    //portal
    portals = isNaN(_portals) ? 0:_portals/* pass in val of _grand unless its NAN */
    portalPrice = portalPrice * Math.pow(1.15, portals);
    document.getElementById("portal-building").querySelector(".price-text").innerHTML = Math.round(portalPrice);
    changeCps(cps+portalCPS*portals);
    //time machines
    timeMs = isNaN(_timeMs) ? 0:_timeMs/* pass in val of _grand unless its NAN */
    timeMPrice = timeMPrice * Math.pow(1.15, timeMs);
    document.getElementById("time-building").querySelector(".price-text").innerHTML = Math.round(timeMPrice);
    changeCps(cps+timeMCPS*timeMs);
    //antimatter condensers
    antis = isNaN(_antis) ? 0:_antis/* pass in val of _grand unless its NAN */
    antiPrice = antiPrice * Math.pow(1.15, antis);
    document.getElementById("anti-building").querySelector(".price-text").innerHTML = Math.round(antiPrice);
    changeCps(cps+antiCPS*antis);
    //prism
    prisms = isNaN(_prisms) ? 0:_prisms/* pass in val of _grand unless its NAN */
    prismPrice = prismPrice * Math.pow(1.15, prisms);
    document.getElementById("prism-building").querySelector(".price-text").innerHTML = Math.round(prismPrice);
    changeCps(cps+prismCPS*prisms);
    //chancemaker
    chances = isNaN(_chances) ? 0:_chances/* pass in val of _grand unless its NAN */
    chancePrice = chancePrice * Math.pow(1.15, chances);
    document.getElementById("chance-building").querySelector(".price-text").innerHTML = Math.round(chancePrice);
    changeCps(cps+chanceCPS*chances);
    //fractal engine
    fractals = isNaN(_fractals) ? 0:_fractals/* pass in val of _grand unless its NAN */
    fractalPrice = fractalPrice * Math.pow(1.15, fractals);
    document.getElementById("fractal-building").querySelector(".price-text").innerHTML = Math.round(fractalPrice);
    changeCps(cps+fractalCPS*fractals);
    //js console
    javas = isNaN(_javas) ? 0:_javas/* pass in val of _grand unless its NAN */
    javaPrice = javaPrice * Math.pow(1.15, javas);
    document.getElementById("java-building").querySelector(".price-text").innerHTML = Math.round(javaPrice);
    changeCps(cps+javaCPS*javas);
    //idleverse
    idles = isNaN(_idles) ? 0:_idles/* pass in val of _grand unless its NAN */
    idlePrice = idlePrice * Math.pow(1.15, idles);
    document.getElementById("idle-building").querySelector(".price-text").innerHTML = Math.round(idlePrice);
    changeCps(cps+idleCPS*idles);
    //cortex
    cortexs = isNaN(_cortexs) ? 0:_cortexs/* pass in val of _grand unless its NAN */
    cortexPrice = cortexPrice * Math.pow(1.15, cortexs);
    document.getElementById("cortex-building").querySelector(".price-text").innerHTML = Math.round(cortexPrice);
    changeCps(cps+cortexCPS*cortexs);

}

export function buy(event)
{
    console.log(event);
    switch(event.currentTarget.id.toLowerCase())
    {
        

        case "cursor-building":
            if(doPurchase(cursorPrice)===true)
            {
                //do the purchase
                changeCps(cps+cursorCPS);
                cursors++;
                cursorPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(cursorPrice);
            }
            break;
        case "grandma-building":
            if(doPurchase(grandmaPrice)===true)
            {
                //do the purchase
                changeCps(cps+grandmaCPS);
                grandmas++;
                grandmaPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(grandmaPrice);
            }
            break;
        case "farm-building":
            if(doPurchase(farmPrice)===true)
            {
                //do the purchase
                changeCps(cps+farmCPS);
                farms++;
                farmPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(farmPrice);
            }
            break;
        case "mine-building":
            if(doPurchase(minePrice)===true)
            {
                //do the purchase
                changeCps(cps+mineCPS);
                mines++;
                minePrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(minePrice);
            }
            break;
        case "factory-building":
            if(doPurchase(factoryPrice)===true)
            {
                //do the purchase
                changeCps(cps+factoryCPS);
                factories++;
                factoryPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(factoryPrice);
            }
            break;
        case "bank-building":
            if(doPurchase(bankPrice)===true)
            {
                //do the purchase
                changeCps(cps+bankCPS);
                banks++;
                bankPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(bankPrice);
            }
            break;
        case "temple-building":
            if(doPurchase(templePrice)===true)
            {
                //do the purchase
                changeCps(cps+templeCPS);
                temples++;
                templePrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(templePrice);
            }
            break;
        case "wizard-building":
            if(doPurchase(wizardPrice)===true)
            {
                //do the purchase
                changeCps(cps+wizardCPS);
                wizards++;
                wizardPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(wizardPrice);
            }
            break;
        case "shipment-building":
            if(doPurchase(shipmentPrice)===true)
            {
                //do the purchase
                changeCps(cps+shipmentCPS);
                shipments++;
                shipmentPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(shipmentPrice);
            }
            break;
            case "alchemy-building":
            if(doPurchase(alchemyPrice)===true)
            {
                //do the purchase
                changeCps(cps+alchemyCPS);
                alchemies++;
                alchemyPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(alchemyPrice);
            }
            break;
            case "portal-building":
            if(doPurchase(portalPrice)===true)
            {
                //do the purchase
                changeCps(cps+portalCPS);
                portals++;
                portalPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(portalPrice);
            }
            break;
            case "time-building":
            if(doPurchase(timeMPrice)===true)
            {
                //do the purchase
                changeCps(cps+timeMCPS);
                timeMs++;
                timeMPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(timeMPrice);
            }
            break;
            case "antimatter-building":
            if(doPurchase(antiPrice)===true)
            {
                //do the purchase
                changeCps(cps+antiCPS);
                antis++;
                antiPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(antiPrice);
            }
            break;
            case "prism-building":
            if(doPurchase(prismPrice)===true)
            {
                //do the purchase
                changeCps(cps+prismCPS);
                prisms++;
                prismPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(prismPrice);
            }
            break;
            case "chance-building":
            if(doPurchase(chancePrice)===true)
            {
                //do the purchase
                changeCps(cps+chanceCPS);
                chances++;
                chancePrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(chancePrice);
            }
            break;
            case "fractal-building":
            if(doPurchase(fractalPrice)===true)
            {
                //do the purchase
                changeCps(cps+fractalCPS);
                fractals++;
                fractalPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(fractalPrice);
            }
            break;
            case "javascript-building":
            if(doPurchase(javaPrice)===true)
            {
                //do the purchase
                changeCps(cps+javaCPS);
                javas++;
                javaPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(javaPrice);
            }
            break;
            case "idleverse-building":
            if(doPurchase(idlePrice)===true)
            {
                //do the purchase
                changeCps(cps+idleCPS);
                idles++;
                idlePrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(idlePrice);
            }
            break;
            case "cortex-building":
            if(doPurchase(cortexPrice)===true)
            {
                //do the purchase
                changeCps(cps+cortexCPS);
                cortexs++;
                cortexPrice *= 1.15/* incremenets price by 15% every purchase*/
                event.currentTarget.querySelector(".price-text").innerHTML 
                = Math.round(cortexPrice);
            }
            break;
        default:
            console.error("invalid ID was given");       
    }
}

function doPurchase(price)
{
    if(cookies>= price)
    {
        changeAmountOfCookies(cookies-price);
        return true;
    }
    return false;
}