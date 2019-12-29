import Vue from 'Vue'
import Router from 'Vue-router'
import page1 from 'page1'
import page2 from 'page2'
import home from 'home'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:home,
        },
        {
            path:'/page1',
            name:"page1",
            component:page1,
        },
        {
            path:'/page2',
            name:'page2',
            component:page2,
        }
})
