<script>

    export default{
        props:[
            'likeObj'
        ],
        data(){
            return{
                person:{
                    name:null,
                    age:null,
                    location:null,
                    profileImg:null,
                    gender:null,
                }

            }
        },
        methods:{
            setLike(){
                const user= JSON.parse(this.likeObj)
                this.person=user
            }
        },
        mounted(){
            this.setLike()
        }
    }   
</script>
<template>
    <div class="card">
        <div class="card-body center">
            {{person.name}}
        <div>
            <img :src="person.profileImg">

        </div>
        <div>
            Age:{{person.age}} <span></span> Location: {{person.location}}
        </div>
        </div>
    </div>
</template>