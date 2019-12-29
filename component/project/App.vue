<template>
    <div id="app">
        <img src="./assets/logo.png">
        <parent></parent>
        <parent btnMsg='不可购买'></parent>
    </div>
</template>

<script>
    //@是找到src目录
//  import parent from '@/components/parent'
    import parent from 'parent'
    export default{
        name:'App',
        components:{
            Parent,
        }
    }
</script>

<style>
    #app{
        font-family: 'Avenir' , Helvetica , Arial , sans-serif;
        
    }
</style>