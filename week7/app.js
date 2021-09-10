const app = Vue.createApp({
    data() {
        return {
           message: "Hi Vue!"
        }
    }
})

app.component('hello-vue', {
    props: {
        text: {

            type: String,
            required:true
        }
    },
    template: `<h3>{{ text }}</h3>`
})

app.mount('#props')