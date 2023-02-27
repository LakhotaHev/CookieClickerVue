<template>
    <div class="cookie-container">
        <img class="shine" draggable="false" src="/images/shine.png" />
        <!--two classes shine and reverse-->
        <img class="shine reverse" draggable="false" src="/images/shine.png" />
        <img @click="doCookieClicked()" id="cookie-button" src="/images/cookie.png" draggable="false" />
        
    </div>
</template>

<script>
    
    import * as cookieHandler from '../../public/js/index/cookieHandler.js';

    export default {
        data() {
            return {
                sounds: [
                    new Audio('/sounds/clickb1.mp3'),
                    new Audio('/sounds/clickb2.mp3'),
                    new Audio('/sounds/clickb3.mp3'),
                    new Audio('/sounds/clickb4.mp3'),
                    new Audio('/sounds/clickb5.mp3'),
                    new Audio('/sounds/clickb6.mp3'),
                    new Audio('/sounds/clickb7.mp3'),
            ]
    }
  },
    name: 'CookieClicker',
    methods:
    {
        doCookieClicked: function() 
        {
            console.log("clicked");
            cookieHandler.cookieClicked();
            const index = Math.floor(Math.random() * this.sounds.length);
            const sound = this.sounds[index];
            sound.play();
            const cookieElement = document.querySelector('.cookie-image');
            cookieElement.classList.add('fly-away');
        }
    }
}

setInterval(cookieHandler.calculateCPS, 10);


</script>

<style scoped>

.cookie-container {
    position: relative;
    margin: auto;
    margin-top: 16%;
    width: 45%;
    min-width: 250px;
    user-select: none;
    transition: transform 0.2s ease-in-out;
}

    .cookie-container .shine {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        /**/
        scale: 2;
        border-radius: 100%;
        display: block;
        /*50% transparent*/
        opacity: 0.5;
        animation-name: spin;
        /**/
        animation-duration: 20s;
        animation-iteration-count: infinite;
        /*keep it moving the same way the whole time*/
        animation-timing-function: linear;
        z-index: -1;
    }
        /*by not having a space its an && statement*/
        .cookie-container .shine.reverse {
            scale: 1.8;
            opacity: 0.4;
            /*if it has both classes it will play reverse*/
            animation-direction: reverse;
            animation-duration: 22s;
        }

#cookie-button:active
{
    transform:scale(0.90);
}

#cookie-button
{
    transition: transform 0.1s ease-in-out;
}


</style>