var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

function roleCall(array) {
    var i = 0;
    for(i ; i <= array.length; i++) {
        console.log(array[i].first_name + " " + array[i].last_name);
    }
}

roleCall(students);