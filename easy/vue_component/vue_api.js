//第一个参数是标签，可以在html文件中使用，<greeting>
//可以使用``,属于ES6语法，这样可以换行
Vue.component("greeting",{
    template:`
        <div>
            <span>{{name}}---{{age}}</span>
            <button @click="button_func" >{{button_name}}</span></button>
        </div>
    `,
    /*
     * 这里的data是一个方法，返回一个对象，这样每个对象都是互不影响的当创建
        多个这样的vueComponent的时候，当然也可以共享一个变量，通过在外面定义一个
        变量，然后在return中返回一个变量，但是这样的话是共享的
    */
    data:function(){
        return{
            name:"李敬先",
            age:18,
            button_name:"摁一下",
        }
    },
    methods:{
        button_func:function(){
            this.age += 1;
        }
    },
});
    
new Vue({
      el:"#api",
})
