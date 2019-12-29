import Vue from 'Vue'
import App from './App'
import router from './router/routerTest'

Vue.config.productionTip = false;

new Vue({
    el:"#app",
    router,
    components:{
        App,
    },
    template:'</App>',
})
