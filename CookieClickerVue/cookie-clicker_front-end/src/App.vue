<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>

.header_section
{
    width: 100%;
    float: left;
    position: relative;
    z-index: 1;
}

.logo
{
    width: 40%;
    float: left;
}

.navbar-light .navbar-nav .nav-link
{
    color: #040000;
    font-size: 18px;
}

.navbar-expand-lg .navbar-nav .nav-link
{
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 30px;
}

.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show>.nav-link
{
    color: #fff;
    background-color: #003c61;
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover
{
    color: #fff;
    background-color: #003c61;
}

.navbar
{
    padding: 0px 25px 30px 25px;
}

.search_icon
{
    padding-top: 30px;
}

.bg-light
{
    background-color: #fff !important;
}
</style>
