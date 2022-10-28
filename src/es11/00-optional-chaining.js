const users = {
    gndx: {
        country: 'MX'
    },
    ana:{
        country: 'CO'
    }
}
console.log(users.gndx);//{ country: 'MX' }
console.log(users.gndx.country);//MX
console.log(users.gndx.age);//Undefined

//console.log(users.bebeloper.country);//Error.

// Implementa Optional Chaining - Ya no genera error!!.
console.log(users?.bebeloper?.country);//Undefined
