const app = Vue.createApp({

    // data is a function that retirns data
    data() {
        return{
            courseGoal: 'practice korean',
            courseGoalA: 'understand vue',
            courseGoalB: 'master vue',
            googleLink: 'https://www.google.com/',
            htmltag: '<h3>this is an H3</h3>',
            imglink: 'https://www.datocms-assets.com/205/1525708256-vue.svg?auto=format&fit=max&w=1200',
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