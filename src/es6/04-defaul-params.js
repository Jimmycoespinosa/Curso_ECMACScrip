function newUser (name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'COL');

function newAdmin(names = 'Oscar', age = 32, country = 'CL'){
    console.log(names, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');
