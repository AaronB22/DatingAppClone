<script>
import TagItemVue from '../Tags/TagItem.vue';

    export default{
        data(){
            return{
                location:'Seattle'
            }
        },
        components:{
            TagItemVue,
            
        }
    }
</script>

<template>
    <div class="swipeButtons">
        <button class="dislikeBtn swipeBtn"><fa icon="x"/></button>
        <span class="swipBtnSpacer"></span>
        <Button class="heartBtn swipeBtn"><fa icon="heart"/> </Button>
    </div>
    <div class="card profileCard centerMargin">
        <div class="card-body">
            <div class="profileImgDiv centerMargin"></div>
            <div>
                <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum, voluptatem nemo veniam fuga, maiores dignissimos provident necessitatibus voluptatibus enim blanditiis dolorum sapiente pariatur amet ab sed inventore doloremque ratione.</p>
                <h3>My Interest</h3>
            </div>
            <div class="row tagRow">
                <div class="col tagCol"><TagItemVue/></div>
                <div class="col tagCol"><TagItemVue/></div>
                <div class="col tagCol"><TagItemVue/></div>
                <div class="col tagCol"><TagItemVue/></div>
                <div class="col tagCol"><TagItemVue/></div>
            </div>
            <div>
                <h3>My Location</h3>
                {{location}}
            </div>
            <div class="bottomSpacer"></div>
        </div>
    </div>
</template>

<style>
   @import './ProfileCard.scss';
</style>