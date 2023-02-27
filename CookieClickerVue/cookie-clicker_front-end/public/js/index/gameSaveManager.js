import $ from "jquery";
import {createToast} from "./toastController.js";
import * as cookieHandler from "./cookieHandler.js"
import * as upgradeHandler from "./cpsUpgradeHandler.js"


export function clear()
{
    document.cookie = "cookies=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure;";
    document.cookie = "bakeryName=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure;";
    document.cookie = "cursors=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure;";
    document.cookie = "grandmas=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure;";
    document.cookie = "farms=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure;";
    document.cookie = "mines=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure;";
    location.reload();
}

export function save()
{
    console.log("cookie stuff is happenin");
    createToast("Game saved", 2000);
    let timeElapsed = 0;
    let name = $("#bakery-name").text();
    //save cookies and bakery name
    document.cookie = `cookies=${cookieHandler.cookies}; SameSite=none; Secure; expires=Fri, 31 Dec 9999 23:59:59`;
    document.cookie = `bakeryName=${$("#bakery-name").text()}; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `cursors=${upgradeHandler.cursors}; SameSite=none; Secure; expires=Fri, 31 Dec 9999 23:59:59`;
    document.cookie = `grandmas=${upgradeHandler.grandmas}; SameSite=none; Secure; expires=Fri, 31 Dec 9999 23:59:59`;
    document.cookie = `timeElapsed=${timeElapsed}; SameSite=none; Secure; expires=Fri, 31 Dec 9999 23:59:59`;
}

export function load()
{
    
    cookieHandler.changeAmountOfCookies(Number(getCookie("cookies")));
    /*below is how we handle the first time loading a page*/

    cookieHandler.changeAmountOfCookies(isNaN(cookieHandler.cookies) ? 0 : cookieHandler.cookies);
    $("#bakery-name").text(getCookie("bakeryName"));
    console.log(getCookie("bakeryName"));
    let cursors = Number(getCookie("cursors"));
    let grandmas = Number(getCookie("grandmas"));
    upgradeHandler.load(cursors,grandmas);

    // Check if the start time is already stored in a cookie
  let startTime = getCookie("startTime");
  if (startTime) {
    // If the start time is stored, calculate the elapsed time since then
    let elapsedTime = Math.floor((Date.now() - Number(startTime)) / 1000);
    // Update the timer display with the elapsed time
    $("#timer").text(`Time: ${elapsedTime} seconds`);
    // Start the timer with the elapsed time as the starting value
    startTimer(elapsedTime);
  } else {
    // If the start time is not stored, start the timer from 0
    startTimer(0);
  }
}

function startTimer(startTime) {
  // Start the timer with the specified starting time
  let currentTime = startTime;
  setInterval(() => {
    currentTime++;
    $("#timer").text(`Time: ${currentTime} seconds`);
    // Store the current time in a cookie every time it updates
    getCookie("startTime", Date.now(), 365);
  }, 1000);
}

function getCookie(name)
{
   return document.cookie.split("; ").find((row) => row.startsWith(`${name}=`))?.split("=")[1];
}

