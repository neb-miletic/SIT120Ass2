const Todo = Vue.createApp({
    data() {
        return {
            title: "Todos: ",
            todoLists:[
                {id:'0', text:"Assignment 1: Project",checked:false},
                {id:'1', text:"Assignment 2: Project and PPT",checked:false},
                {id:'2', text:"Assignment 3: Portfolio",checked:true}
            ]
        };
    },
    methods:{
        toggleItem(todoItem) {
            todoItem.checked = !todoItem.checked
        }

    }
});

Todo.mount('#app');