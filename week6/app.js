const form = Vue.createApp({
    data() {
        return {
           msg: "This is exercise!"
            
        }
    },
 
})

form.mount('#form');

const checkbox = Vue.createApp({
    data() {
        return {
            checkedNames: []
        }
    }
}).mount('#checkbox')


const dynamic = Vue.createApp({
    data() {
      return {
        selected: 'Game of Thrones',
        movies: [
          { text: 'One', name: 'Game of Thrones' },
          { text: 'Two', name: 'Vanilla Sky' },
          { text: 'Three', name: 'Godfather' }
        ]
      }
    }
  }).mount('#v-for')

  const lazy = Vue.createApp ({
      data() {
          return {
              inputValue:''
          }
      }
  }).mount('#lazy')