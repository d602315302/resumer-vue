import Vue from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        newTodo:'',
        todoList:[]
    },
    created:function(){
        window.onbeforeunload=()=>{//在页面关闭之前
            let dataString=JSON.stringify(this.todoList) //把data的数据转成字符串
            window.localStorage.setItem('myTodos',dataString)
        }
        let oldDataString=window.localStorage.getItem('myTodos')
        let oldData=JSON.parse(oldDataString)
        this.todoList=oldData || []
    },
    methods:{
        addTodo:function(){
            this.todoList.push({
                title:this.newTodo,
                createdAt:new Date(),
                done:false,
            })
            this.newTodo=''
        },
        removeTodo:function(todo){
            let index=this.todoList.indexOf(todo)
            this.todoList.splice(index,1)
        }
    }
})