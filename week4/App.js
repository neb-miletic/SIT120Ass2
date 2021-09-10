const App = Vue.createApp({
    
    data() {
        return {

            message: "Hello Vue!",
            count: 0,
            items: [ 
                "Orange","Banana","Apple","Strawberry",
                
            ]
        }
    },
    methods :{
        incrementCounter: function () {
            this.count += 1;
        },
        counterZero: function () {
            
              this.count = 0;
        }
    }
  })

  App.mount('#app')

