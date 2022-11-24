const app = Vue.createApp({

    // data is a function that retirns data
    data() {
        return{
            courseGoal: 'practice korean',
            courseGoalA: 'understand vue',
            courseGoalB: 'master vue',
            googleLink: 'https://www.google.com/',
            htmltag: '<h1>this is a H1</h1>'
        };
    },

    // methods is an object full of functions
    methods: {
        outputGoal() {
            const randNumber = Math.random();
            if (randNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }

});

app.mount('#user-goal');