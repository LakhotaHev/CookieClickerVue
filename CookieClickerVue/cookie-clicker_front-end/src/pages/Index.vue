<template>
    <RenameModal/>
    <div class="notif-toasts toast-container bottom-0 start-50 translate-middle-x" id="toast-container">
    
    </div>
    <table id="game-window">
        <tr>
            <td class="cookie column">
                <CookieBanners/>
                <CookieButton/>
            </td>
            <img src="\images\panelVertical.png">
            <img src="\images\panelVertical.png">
            <img src="\images\panelVertical.png">
            <td class="minigame column">
                <div class="news-section">
                    <table>
                        <!--table w two rows and two columns-->
                        <tr>
                            <td class="panelbutton" id="prefs-button" @click="settings()" style="background-image: url('/images/panelMenu3.png');">
                                Options
                            </td>
                            <!--this will span two rows-->
                            <td class="news-column" rowspan="2">
                            </td>
                            <td class="panelbutton" id="info-button" style="background-image: url('/images/panelMenu3.png');">
                                Info
                            </td>
                        </tr>
                        <tr>
                            <td class="panelbutton" id="stats-button" @click="stats()" style="background-image: url('/images/panelMenu3.png');">
                                Stats
                            </td>
                            <td class="panelbutton" id="save-button" @click="doSave()" style="background-image: url('/images/panelMenu3.png');">
                                Save
                            </td>
                        </tr>
                    </table>
                    <img class="top-horizontal-panel" src="\images\panelHorizontal.png" style="width: 735px; height: 20px;">
                    <img class="horizontal-panel" src="\images\panelHorizontal.png" style="width: 735px; height: 20px;">
                </div>
                <SettingsDiv v-if="showSettings" @close="showSettings = false" /> <StatsDiv v-if="showStats" @close="showStats = false" />
            </td>
            <img src="\images\panelVertical.png" style="padding: 0px;">
            <img src="\images\panelVertical.png" style="padding: 0px;">
            <img src="\images\panelVertical.png">
            <td class="upgrade column">
                <UpgradeStore />
            </td>
        </tr>
    </table>
</template>

<script>
import $ from 'jquery';
//import * as bakeryName from '../../public/js/index/bakeryName.js';
import * as goldenCookie from '../../public/js/index/goldenCookie.js';
import { load, save } from '../../public/js/index/gameSaveManager.js';
import CookieButton from '../components/Cookie.vue';
import RenameModal from '../components/RenameModal.vue';
import CookieBanners from '../components/Banners.vue';
import UpgradeStore from '../components/Store.vue';
import SettingsDiv from '../components/SettingsSection.vue';
import StatsDiv from '../components/StatsSection.vue';

export default {
    mounted() {
      setInterval(save, 60000);
    },
    name: 'CookieClicker',
    created()
    {
        document.title = "IT 211 Cookie Clicker";
    },
    components: {
        CookieButton,
        RenameModal,
        CookieBanners,
        UpgradeStore,
        SettingsDiv,
        StatsDiv
    },
    methods:
    {
        doSave: function()
        {
            save();
        },
        settings()
        {
            this.showSettings = !this.showSettings;
            this.showStats = false;
            this.clickCount++;
            const index = this.clickCount > 1 ? 1 : 0; // If clicked once, play sound1, if clicked again play sound2
            const audio = new Audio(this.sounds[index]);
            audio.play();
            if (this.clickCount >= 2) {
                this.clickCount = 0; // Reset click count to zero
            }
        },
        stats()
        {
            this.showStats = !this.showStats;
            this.showSettings = false;
            this.clickCount++;
            const index = this.clickCount > 1 ? 1 : 0; // If clicked once, play sound1, if clicked again play sound2
            const audio = new Audio(this.sounds[index]);
            audio.play();
            if (this.clickCount >= 2) {
                this.clickCount = 0; // Reset click count to zero
            }
        }
    },
    data(){
        return {
            showSettings: false,
            showStats: false,
            clickCount: 0,
            sounds: [
                '/sounds/clickOn2.mp3',
                '/sounds/clickOff2.mp3'
            ]
        };
    },
}

$(document).ready(function () {
    
    goldenCookie.convertGCookieTimeToMS();
    goldenCookie.setNextSpawnTime();
    setInterval(goldenCookie.removeGoldenCookie, 100);
    load();
    setInterval(save, 60000);
});

</script>

<style>
@import "../../public/css/variables.css";
@import "../../public/css/Index/index.css";
@import "../../public/css/Index/news.css";
</style>