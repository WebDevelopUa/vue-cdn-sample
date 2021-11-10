const circle = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 200
        }
    },
    computed: {
        circle_classes() {
            return {
                purple: this.isPurple
            }
        },
        circle_style() {
            return [
                {width: this.size + 'px', height: this.size + 'px', lineHeight: this.size + 'px'},
                {transform: 'rotate(180deg)'}
            ]
        }
    }
}).mount('#circle')


const viewModel = Vue.createApp({
    data() {
        return {
            firstName: 'First',
            middleName: 'Middle',
            lastName: 'Last',
            url: 'https://google.com',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateLastName(msg, event) {
            // event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            event.preventDefault()
            this.middleName = event.target.value
        },
    },
    computed: {
        fullName() {
            // console.log('---- fullName() ----')
            return `${this.firstName.toUpperCase()} 
            ${this.middleName.toUpperCase()}
            ${this.lastName.toUpperCase()}`
        },
    },
    watch: {
        age() {
            setTimeout(() => {
                this.age = 100
            }, 2000)
        }
    }
}).mount('#app')

// Get data with builtin proxy
console.log(viewModel.firstName)
console.log(viewModel.lastName)

// Get data without proxy
// setTimeout(
//     () => alert(`Hi, ${viewModel.$data.firstName}`),
//     2000
// )
