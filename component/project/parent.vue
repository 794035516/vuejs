<template>
    <div>
        <span>限时购买</span>
        <child :text=btnMsg class="child-com"></child>
    </div>
</template>

<script>
//  import child from '@/components/button'
    import child from 'button'
    export default{
        components:{
            child
        },
        props:{
            btnMsg:{default:"购买"}
        }
    }
</script>

<style>
    .child-com{
        margin:10px;
    }
</style>