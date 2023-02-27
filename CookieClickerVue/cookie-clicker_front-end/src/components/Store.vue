<template>
    <div class="store">
        <div class="header">Store</div>
        <!--<img src="\images\panelHorizontal.png">
        <div class="category" id="switches"></div>-->
        <img src="\images\panelHorizontal.png">
        <div class="category" id="upgrades"></div>
        <img src="\images\panelHorizontal.png">
        <div class="category" id="buildings">
            <StoreBuilding name="Cursor" description="Autoclicks once every ten seconds"
            identifier="cursor-building" imgName="cursor.png" baseCost="15" />
            <StoreBuilding name="Grandma" description="A nice grandma to bake more cookies"
            identifier="grandma-building" imgName="grandma.png" baseCost="100" />
            <StoreBuilding name="Farm" description="Grows cookie plants from cookie seeds"
            identifier="farm-building" imgName="FarmIcon.png" baseCost="1,100" />
            <StoreBuilding name="Mine" description="Mines out cookie dough and chocolate chips"
            identifier="mine-building" imgName="MineIcon.png" baseCost="12,000" />
            <StoreBuilding name="Factory" description="Produces large quantities of cookies"
            identifier="factory-building" imgName="FactoryIcon.png" baseCost="130,000" />
            <StoreBuilding name="Bank" description="Generates cookies from interest"
            identifier="bank-building" imgName="BankIcon.png" baseCost="1,400,000" />
            <StoreBuilding name="Temple" description="Full of precious, ancient chocolate"
            identifier="temple-building" imgName="TempleIcon.png" baseCost="20,000,000" />
            <StoreBuilding name="Wizard Tower" description="Summons cookies with magic spells"
            identifier="wizard-building" imgName="WizardTower.png" baseCost="330,000,000" />
            <StoreBuilding name="Shipment" description="Brings in fresh cookies from the cookie planet"
            identifier="shipment-building" imgName="ShipmentIcon.png" baseCost="5,000,000,000" />
            <StoreBuilding name="Alchemy Lab" description="Turns gold into cookies"
            identifier="alchemy-building" imgName="AlchemyLabIcon.png" baseCost="75,000,000,000" />
            <StoreBuilding name="Portal" description="Opens the door to the cookieverse"
            identifier="portal-building" imgName="PortalIcon.png" baseCost="1,000,000,000,000" />
            <StoreBuilding name="Time Machine" description="Brings cookies from the past, before they were even eaten"
            identifier="time-building" imgName="TimeMachineIcon.png" baseCost="14,000,000,000,000" />
            <StoreBuilding name="Antimatter" description="Condenses the antimatter in the universe into cookies"
            identifier="antimatter-building" imgName="AntimatterCondenserIcon.png" baseCost="170,000,000,000,000" />
            <StoreBuilding name="Prism" description="Converts light itself into cookies"
            identifier="prism-building" imgName="PrismIcon.png" baseCost="2,100,000,000,000,000" />
            <StoreBuilding name="Chancemaker" description="Generate cookies out of thin air through sheer luck"
            identifier="chancemaker-building" imgName="Chance.png" baseCost="26,000,000,000,000,000" />
            <StoreBuilding name="Fractal Engine" description="Turns cookies into even more cookies"
            identifier="fractal-building" imgName="Fractal_Engine.png" baseCost="310,000,000,000,000,000" />
            <StoreBuilding name="JScript Console" description="Create cookies from the very code this game was written in"
            identifier="javascript-building" imgName="Javascript_console.png" baseCost="71,000,000,000,000,000,000" />
            <StoreBuilding name="Idleverse" description="Theres been countless other idle universes running alongisde our own. You've finally found a way to hijack their production and convert whatever they've been making into cookies"
            identifier="idleverse-building" imgName="Idleverse.png" baseCost="12000000000000000000000" />
            <StoreBuilding name="Cortex Baker" description="These artificial brains the size of planets are capable of simply dreaming up cookies into existence. Time and space are inconsequential. Reality is arbitrary"
            identifier="cortex-building" imgName="Cortex_Baker.png" baseCost="1900000000000000000000000" />
        </div>
    </div>
</template>

<script>
import StoreBuilding from './Building.vue';

export default
{
    name:"UpgradeStore",
    components:
    {
        StoreBuilding,
    }
}

</script>

<style scoped>
.category
{
    min-height: 64px;
}

hr
{
    margin:0;
    padding: 0;
    opacity: 1;
}

.store
{
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    display: inline-table;
}

.header
{
    /* 170% normal text size */
    font-size: 1.7em;
    font-weight: bold;
    text-align: center;
    padding-top: 4px;
}

img {
    width: 305px;
    height: 20px;
}
</style>