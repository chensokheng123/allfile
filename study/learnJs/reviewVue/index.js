// // let name = prompt('Enter the name');


// let app = new Vue({
//     el: '#app',
//     data: {
//         name: '',
//         greeting: `Welcome to KIT`,

//         image: 'img/shock1.jpeg',
//         image_sc: ['img/shock1.jpeg', 'img/shock2.jpeg'],
//         url: 'https://www.facebook.com/sok.heng.7773631',
//         none: 'text-coration:none',


//         //Take the user input
//         todo_lists: [{
//                 text: '1.Learn Javascript is really fun'
//             },
//             {
//                 text: '2.I love learning Js'
//             },
//             {
//                 text: '3.Tommorow is the best day'
//             }
//         ],


//         items: true,
//     },
//     methods: {
//         next() {
//             let i = 1;
//             this.image = this.image_sc[i];
//         },
//         pre() {
//             let i = 0;
//             this.image = this.image_sc[i];
//         },
//         show() {
//             alert('hello');
//         },
//         submit() {
//             console.log("hello")
//         },
//         checkName() {
//             if (this.name == 'jonh') {
//                 return 'Hello jonh';
//             } else {
//                 return 'who are you?';
//             }
//         }
//     }
// });







// let app = new Vue({
//     el: '#app',
//     data: {
//         // items: true,
//         items: 20,
//         name: '',
//         isJonh: '',
//         check: false,

//     },
//     methods: {
//         checkName() {
//             if (this.name == 'jonh') {
//                 this.isJonh = true;
//             } else {
//                 this.isJonh = false;
//             }
//         }
//     }
// })



// let todo = ['1. Learn Vue', '2.awesome'];
let todo = [
    {
        id: 1,
        action: 'learn JS',
    },
    {
        id: 2,
        action: 'learn Math',
    }
]

let app = new Vue({
    el: '#app',
    data: {
        lists: todo,
        // lists: [' Learn Vue', 'awesome']
    }
})