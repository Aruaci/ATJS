const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },

    methods: {
        add(nr) {
            this.counter += nr;
        },

        reduce(nr) {
            if(this.counter >= 1) {
                this.counter -= nr;
            }
        },
    }
});

app.mount('#events')