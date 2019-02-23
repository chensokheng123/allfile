/*let app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        result: 0,
        first_name: 'sok',
        last_name: 'heng',
        red: true,

        todo: [{
                id: 1,
                text: 'I love Vue'
            },
            {
                id: 2,
                text: 'Haha there you are',
            }
        ],
        health: 100,
        src: 'img/shock1.jpeg',

    },
    // methods is the function or event that invoke when the user doing something like onclick or onmouseover
    methods: {
        incre() {
            this.reuslt += 1;
            console.log('I am runing now');
        },
        decre() {
            this.reuslt -= 1;
            console.log('I am running too');
        },
        punch() {
            this.health -= 10;
            console.log(this.health);
            if (this.health == 0) {
                this.src = 'img/shock2.jpeg'
            }
        },
        restart() {
            this.health = 100;
            this.src = 'img/shock1.jpeg'
        }

    },
    // computed work like the calcutor use to modify the value of the data
    computed: {
        fullname() {
            return this.first_name + this.last_name;
        },
        addClass() {
            return {
                red: this.red,
                blue: !this.red
            }
        }
    }
});
*/
Vue.com
ponent('todo-item',{
    props:['todo'],
    template: '<li>This is a todo</li>',
})

let app = new Vue({
    el: '#app',
    data:{
        message:'hello world',
        todo_list:[
            {
                id: 1,
                color: 'blue'
            },
            {
                id: 2,
                color:'red',
            }
        ]
    }
});