import { roundToNearest } from "../site.js";

//global variables

export let cookies = 0;
export let cookiesGainedOnClick = 1;
export let cps = 0;
export let bakedCookie = 0;

export function cookieClicked() {
    cookies += cookiesGainedOnClick;
    bakedCookie++;
    updateGUI();

}

function updateGUI() {
    document.getElementById("cookie-counter").innerHTML = roundToNearest(cookies, 0);
    document.getElementById("cps-counter").innerHTML = roundToNearest(cps, 1);
}
export function increaseCookieCount(amount)
{
    cookies+=amount;
    updateGUI();
}

export function changeAmountOfCookies(amount)
{
    cookies = amount;
    updateGUI();
}

export function changeCps(amount)
{
    cps = amount;
    
}

export function calculateCPS()
{
    cookies += cps/100;
    updateGUI();
}
