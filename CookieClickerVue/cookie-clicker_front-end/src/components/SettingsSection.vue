<template>
    <div id="menu" style="background-image: url('/images/darkNoise.jpg'); height: 1385px;">
        <br>
        <div class="section">
            Options
        </div>
        <div class="block" style="padding:0px;margin:8px 4px;">
            <div class="subsection" style="padding: 0px">
                <div class="title">
                    <h3>General</h3>
                </div>
                <div class="listing">
                    <div class="smallFancyButton" style="display: inline-block; padding: 2px 8px; opacity: 0.75; font-size: 12px; vertical-align: middle; font-variant: small-caps;">
                        Language: 
                        <b>English</b>
                    </div>
                    <div class="icon" style="vertical-align: middle; display: inline-block; background-position: -1440px -1392px; transform: scale(0.5); margin: -16 -12;">
                    </div>
                    <a style="font-size: 15px;text-align: center;width: auto;min-width: 130px; " class="option smallFancyButton" id="changeLanguageOption">Change Language</a>
                    <div style="clear: both;text-align: right;padding-bottom: 2px;"></div>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton" @click="doSave()">Save</a>
                    <label>Save manually (the game autosaves every 60 seconds; shortcut: ctrl+S)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Export Save</a>
                    <a class="option smallFancyButton">Import Save</a>
                    <label>You can use this to backup your save or to transfer it to another computer</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Save To File</a>
                    <a class="option smallFancyButton">Load From File</a>
                    <label>Use this to keep saves on your computer</label>
                </div>
                <div class="listing" style="text-align: right">
                    <label>Delete all your progress, including your achievements (DOUBLE CLICK TO CONFIRM)</label>
                    <a class="option smallFancyButton warning" @dblclick="doClear()">Wipe Save</a>
                </div>
                <div class="title">
                    <h3>Settings</h3>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Fancy Graphics ON</a>
                    <label>(visual improvements; disabling may improve performance)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">CSS Filters ON</a>
                    <label>(cutting-edge visual improvements; disabling may improve performance)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Particles ON</a>
                    <label>(cookies falling down, etc; disabling may improve performance)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Numbers ON</a>
                    <label>(numbers that pop up when clicking the cookie)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Milk ON</a>
                    <label>(only appears with enough achievements)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Cursors ON</a>
                    <label>Save manually (visual display of cursors)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Wobbly Cookie ON</a>
                    <label>(your cookie will react when you click it)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Alt Cookie Sound ON</a>
                    <label>(how your cookie sounds when you click on it)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Alt Font OFF</a>
                    <label>(your cookies will be displayed using monospace font)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Short Numbers ON</a>
                    <label>Save manually (the game autosaves every 60 seconds; shortcut: ctrl+S)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Fast Notes OFF</a>
                    <label>Save manually (the game autosaves every 60 seconds; shortcut: ctrl+S)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Closing Warning OFF</a>
                    <label>Save manually (the game autosaves every 60 seconds; shortcut: ctrl+S)</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Extra Buttons ON</a>
                    <label>Add options on buildings like mute</label>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Scary Stuff</a>
                </div>
                <div class="listing">
                    <a class="option smallFancyButton">Check Mod Data</a>
                    <label>View and delete save data created by mods</label>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
import {clear, save} from '../../public/js/index/gameSaveManager'

export default {

    data() {
        return {
            showModal: false
        }
    },
    methods:
    {
        doSave: function()
        {
            save();
        },
        doClear: function()
        {
            clear();
        },

    },
};
</script>

<style>
#menu {
    overflow: auto;
}
.title, .section
{
    font-size: 28px;
    text-shadow: 0px 1px 4px #000;
    color: #fff;
}
.section::before
{
    content:'';
    display: block;
    background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0), rgba(255,255,255,0));
    height: 1px;
}
.section
{
    font-variant: small-caps;
    text-align: center;
    padding: 0px 16px;
    background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,0,0,0), rgba(0,0,0,0));
    text-shadow: 0px -2px 6px rgba(255,255,200,0.6), 0px 1px 0px rgba(100,100,100,1), 0px 2px 4px rgba(0,0,0,1);
}
.section::after
{
    content:'';
    display: block;
    background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0), rgba(255,255,255,0));
    height: 1px;
    
}
.subsection
{
    padding: 8px 0px;
    font-size: 14px;
}
.subsection div.title:before
{
    content: '';
    display: block;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0));
    height: 1px;
    width: 50%;
    margin: 6px 0px;
    margin-left: -16px;
}

.subsection div.title 
{
    font-size: 22px;
    padding-left: 16px;
    margin-bottom: 8px;
    background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0) , rgba(0,0,0,0) , rgba(0,0,0,0));
}

.subsection div.title:after
{
    content: '';
    display: block;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0));
    height: 1px;
    width: 50%;
    margin: 6px 0px;
    margin-left: -16px;
}

.listing
{
    padding: 3px 16px;
    font-size: 13px;
}

.listing label 
{
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    padding: 2px 8px;
}

a.option, a.smallFancyButton 
{
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    display: inline-block;
    border: 1px solid #ccc;
    background: #000;
    margin: 2px 4px 2px 0px;
    color: #ccc;
    font-size: 12px;
    padding: 4px 8px;
    text-decoration: none;
    font-variant: small-caps;
    font-weight: bold;
}

.warning, a.option.warning 
{
    color: #c00;
    border-color: #c00;
}

a.option.warning:hover 
{
    color: #f33;
    border-color: #f33;
}

a.option
{
    border: 1px solid #e2dd48;
    background: #000 url(/public/images/darkNoise.jpg);
    background-image: url(/public/images/shadedBordersSoft.png),url(/public/images/darkNoise.jpg);
    background-size: 100% 100%, auto;
    background-color: #000;
    border-radius: 2px;
    box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25),0px 0px 2px 2px #000 inset,0px 1px 0px 1px rgba(255,255,255,0.5) inset;
    text-shadow: 0px 1px 1px #000;
    color: #ccc;
    line-height: 100%;
}

a.option
{
    border-color: #ece2b6 #875526 #733726 #dfbc9a;
}

a.option:hover
{
    border-color: #fff;
    color: #fff;
    text-shadow: none;
}

a.option.smallFancyButton
{
    vertical-align: middle;
    width: 130px;
    text-align: right;
}

.block 
{
    padding: 8px;
    margin: 2px;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0px 0px 1px #000, 0px 0px 1px #000 inset;
}

</style>