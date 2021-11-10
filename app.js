const viewModel = Vue.createApp({
    data() {
        return {
            firstName: 'tom',
            middleName: 'mi',
            lastName: 'kota',
            url: 'https://google.com',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName.toUpperCase()} 
            ${this.middleName.toUpperCase()}
            ${this.lastName.toUpperCase()}`
        },
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
