
//Conseguimos usar Vue porque estamos importando a biblioteca no html
//createApp permite criar uma instância do vue
const app = Vue.createApp({
    //data é uma das propriedades e onde nós guardamos os dados da aplicação vue.
    //deve ser este nome e necessáriamente deve retornar um objeto, com as nossas propriedades específicas da aplicação
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

//mount permite especificar o seletor referente ao trecho html que será controlado pelo vue
//e efetivamente faz a ligação entre a instância do vue e o local controlado.
app.mount('#user-goal');