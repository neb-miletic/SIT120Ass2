const App = ({
    
    data() {
        return {
         
           
           links: [ 
               { id:1, link: 'Home' },
               { id:2, link: 'TV Shows' },
               { id:3, link: 'About' },
               { id:4, link: 'Contact' }
           ],
           movies: [
               {
                   id:1,
                   name: "Game of Thrones", 
                   photo: "Game Of Thrones.jpeg",
                   category: "Fantasy"
               },
               {
                id:2,
                name: "Game of Thrones", 
                photo: "Game Of Thrones.jpeg",
                category: "Fantasy"
               },
               {
                id:3,
                name: "Game of Thrones", 
                photo: "Game Of Thrones.jpeg",
                category: "Fantasy"
               },
               {
                id:4,
                name: "Game of Thrones", 
                photo: "Game Of Thrones.jpeg",
                category: "Fantasy"
               }
           ]
        }
     }
  })

const app = Vue.createApp(App)

app.component('navbar-item', {
    props: ['link'],
    template: `<a :href="link">{{ link }}</a>`
})

app.component('card', {
    props: ['photo','name','category','imgT'],
    template: ` 
    <div class="card">
      <img :src = "photo" width="190"/>
      <div class="container">
        <h4><b>{{ name }}</b></h4>
        <p>{{ category }}</p>
      </div>
    </div>`
    
  })

  app.mount('#app')