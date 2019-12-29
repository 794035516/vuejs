<template>
    <button class="demoBtn" @click="doSth">{{txt}}</button>
</template>

<script>
    export default{
        name:"myBtn",
        data:function(){
            return {
                msg:'我的按钮',
            }
        },
        props:{
            txt:{
                default:"默认属性",
            }
        },
        methods:{
            doSth:function(){
                alert("this.txt");
            }
        },
    }
</script>

<style>
</style>