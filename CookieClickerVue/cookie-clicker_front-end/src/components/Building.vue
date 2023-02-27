<template>
    <div @click="doBuy($event)" class="item" :id="identifier" style="background-image: url('/images/storeTile.jpg'); width: 305px; ">
        <img class="thumbnail" :src="'/images/'+imgName" draggable="false"/>
        <div class="name">{{ name }}</div>
        <div class="price">
            <img class="small-cookie" src="/images/cookie.png" draggable="false"/>
            <span class="price-text">{{ baseCost }}</span>
        </div>
        
    </div>

</template>

<script>

import{buy, cursors, grandmas, farms, mines, factories, banks, wizards, shipments, alchemies, portals, timeMs, antis, prisms, chances, fractals, javas, idles, cortexs} from '../../public/js/index/cpsUpgradeHandler.js'


export default{
    data() {
            return {
                sounds: [
                    '/sounds/buy1.mp3',
                    '/sounds/buy2.mp3',
                    '/sounds/buy3.mp3',
                    '/sounds/buy4.mp3',
            ]
    }
  },
    name:'StoreBuilding',
    props:{
        name:String,
        description:String,
        identifier:String,
        imgName:String,
        baseCost:Number
    },
    methods:
    {
        doBuy:function(event)
        {
            buy(event);

            const index = Math.floor(Math.random() * this.sounds.length);
            const audio = new Audio(this.sounds[index]);
            audio.play();
        }
    }
}

</script>

<style scoped>
.item
{
    position: relative;
    width: 100%;
    height: 64px;
    border: 6px solid #00000019;
    user-select: none;/* not able to drag image*/
}

.item:hover
{
    cursor: pointer;
    -webkit-filter: brightness(115%);
}

.img:hover{
    box-shadow: 0px 0px 16px #fed inset, 0px 0px 1px #000;
}

.thumbnail
{
    position: absolute;
    top:-4px;
    left:0;
    width:64px;
    height:64px;
    filter:drop-shadow(0 0 2px black);
}

.name
{
    position: absolute;
    top:0;
    left:64px;
    font-size: 1.6em;
    font-weight: bold;
    text-shadow: 0 1px 4px black;
}
.price
{
    position:absolute;
    bottom:0;
    left:64px;
}
.small-cookie
{
    width:1em;/* as wide/tall as a text element(font)*/
    height:1em;
    filter:drop-shadow(0 0 1px black);
}
.price-text
{
    font-size: 0.8em;
    text-shadow: 0 1px 2px black;
}
</style>