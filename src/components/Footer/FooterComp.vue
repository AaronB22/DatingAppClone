<script>

    
</script>
<template>
    <div class="card footer">
        <div class="footerBtns card-body">
            <router-link to="/profile">
                <button class="footBtn">
                    <fa icon="gear" size='2xl'/>
                </button>
            </router-link>
            <router-link to="/">
                <button class="footBtn">
                    <fa icon="clone" size='2xl'/>
                </button>
            </router-link>
            <router-link to="/likes">
                <button class="footBtn">
                    <fa icon="heart" size='2xl'/>
                </button>
            </router-link>
             <router-link to="/filter">
                <button class="footBtn">
                    <fa icon="bars" size='2xl'/>
                </button>
            </router-link>
           
                
        </div>
    </div>
</template>

<style>@import 'FooterComp.scss'; </style>
