// Enhanced Objects Literals.
function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId // Renombramos campo en objeto de retorno.
    }
}
console.log(newUser('gndx', 34, 'MX', 1));
