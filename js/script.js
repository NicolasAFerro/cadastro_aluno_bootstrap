$('#inputPhone').mask('(00) 0000-0000');

var students = [ 
    {
        id: 1,
        name: 'Maria Silva', 
        email: 'maria@gmail.com', 
        phone: '(15) 9999-9999', 
        course: 1, 
        shift: 1
    }, 
    {
        id: 2,
        name: 'João Silva', 
        email: 'joao@gmail.com', 
        phone: '(15) 9999-9999', 
        course: 2, 
        shift: 2
    },  
    {
        id: 3,
        name: 'André Silva', 
        email: 'andre@gmail.com', 
        phone: '(15) 9999-9999', 
        course: 3, 
        shift: 3
    },   
]; 

var classes = [ 
    {  
        id_course: 1,
        class_name: 'Java'
    }, 
    {  
        id_course: 2,
        class_name: 'JavaScript'
    }, 
    {  
        id_course: 3,
        class_name: 'C#'
    }
];

var shifts = [ 
    { 
        id_shift: 1, 
        name: 'Manhã'
    }, 
    { 
        id_shift: 2, 
        name: 'Tarde'
    }, 
    { 
        id_shift: 3, 
        name: 'Noite'
    }
];

loadStudents(); 

function loadStudents() { 
    for (let student of students) { // aqui é for ao inves de in
        addNewRow(student); 
    }
}

function addNewRow(student) { 
    try {  
        var table = document.getElementById("studentsTable"); 
        var newRow = table.insertRow(); 

        var idNode = document.createTextNode(student.id);  
        var nameNode = document.createTextNode(student.name);
        var emailNode = document.createTextNode(student.email);  
        var phoneNode = document.createTextNode(student.phone); 
        
        
        var courseName = classes[student.course - 1].class_name;
        var shiftName = shifts[student.shift - 1].name;
        
        var courseNode = document.createTextNode(courseName);
        var shiftNode = document.createTextNode(shiftName);

        console.log(`Numero shift estudante: ${student.shift}`); 

        // Adicionar as células na tabela
        newRow.insertCell().appendChild(idNode);  
        newRow.insertCell().appendChild(nameNode);  
        newRow.insertCell().appendChild(emailNode);  
        newRow.insertCell().appendChild(phoneNode);  
        newRow.insertCell().appendChild(courseNode);  
        newRow.insertCell().appendChild(shiftNode);  

    } catch (error) { 
        console.log(error);
    }
}
