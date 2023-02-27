<template>
<div id="menu" style="background-image: url('/images/darkNoise.jpg'); height: 875px;">
        <br>
        <div class="section">
            Statistics
        </div>
        <div class="subsection">
            <div class="title">
                General
            </div>
            <div id="statsGeneral"></div>
            <div class="listing">
                <b>Cookies in da bank:</b>
                <div class="price plain">
                <div class="tinyCookie"></div>
                {{ roundedCookies }}
                </div>
            </div>
            <div class="listing">
                <b>Cookies baked (this ascension):</b>
                <div class="price plain">
                <div class="tinyCookie"></div>
                0
                </div>
            </div>
            <div class="listing">
                <b>Cookies baked (all time):</b>
                <div class="price plain">
                <div class="tinyCookie"></div>
                {{ totalCookies }}
                </div>
            </div>
            <div class="listing">
                <b>Run started:</b>
                {{ timeOnPage }}
            </div>
            <div class="listing">
                <b>Buildings owned:</b>
                {{ numOfBuildings }}
            </div>
            <div class="listing">
                <b>Cookies per second:</b>
                {{ statsCPS }}
                <small>(multiplier: 100%)</small>
            </div>
            <div class="listing">
                <b>Raw cookies per second:</b>
                {{ statsCPS }}
                <small>(highest this ascension)</small>
            </div>
            <div class="listing">
                <b>Cookies per click:</b>
                {{ clickCookies }}
            </div>
            <div class="listing">
                <b>Cookie clicks:</b>
                {{ bakedCookies }}
            </div>
            <div class="listing">
                <b>Hand-made cookies:</b>
            </div>
            <div class="listing">
                <b>Golden cookie clicks: </b>
                {{  goldenClicks }}
                <small>(all time: {{  goldenClicks }})</small>
            </div>
            <br>
            <div class="listing">
                <b>Running version:</b>
                2.048
            </div>
        </div>
        <div class="subsection">
            <div class="title">
                Upgrades
            </div>
            <div id="statsUpgrade">
                <div class="listing">
                    <b>Upgrades unlocked:</b>
                    0/663 (0%)
                <div class="listing crateBox">

                </div>
            </div>
        </div>
        <div class="subsection">
            <div class="title">
                Achievements
            </div>
            <div id="statsAchievs">
                <div class="listing">
                    <b>Upgrades unlocked:</b>
                    0/663 (0%)
                </div>
                <div class="listing">
                    <b>Milk:</b>
                    Plain milk
                </div>
                <div class="listing">
                    <b>Milk flavors unlocked:</b>
                </div>
            </div>
        </div>
        <div style="padding-bottom: 128px;"></div>
    </div>
</div>
</template>

<script>
import { cookies, cps, cookiesGainedOnClick, bakedCookie } from '../../public/js/index/cookieHandler.js';
import { startTimer, getTimeOnPage } from '../../public/js/index/timeHelper.js';
import { goldenCookieClicks } from '../../public/js/index/goldenCookie.js';
import { buildings } from '../../src/components/Building.vue';



export default {
  name: 'StatsSection',
  data() {
    return {
      intervalId: null,
      roundedCookies: Math.round(cookies),
      statsCPS: cps,
      //totalCookies: cookies,
      timeOnPage: getTimeOnPage(),
      clickCookies: cookiesGainedOnClick,
      bakedCookies: bakedCookie,
      goldenClicks: goldenCookieClicks,
      numOfBuildings: buildings,


    };
  },
  created() {
    startTimer(); // start the timer when the component is created
    this.intervalId = setInterval(() => {
      this.roundedCookies = Math.round(cookies);
      this.statsCPS = cps;
      this.clickCookies = cookiesGainedOnClick;
      this.bakedCookies = bakedCookie;
      this.goldenClicks = goldenCookieClicks;
      this.numOfBuildings = buildings;
      //this.totalCookies += Math.round(cookies) - this.roundedCookies;
    }, 1000); // update every second
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  mounted() {
    setInterval(() => {
      this.timeOnPage = getTimeOnPage();
    }, 1000);
  },
};
</script>

<style>

</style>