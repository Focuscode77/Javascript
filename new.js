// v1
// // Array  It should have a place to store todo's.
// var todos = ["item 1", "item 2", "item 3"];

// // Test
// console.log(todos);

// // It should have a way to display todo's.

// console.log("My todo's:", todos);


// // It should have a way to add new todo's.

// todos.push("item 4", "item 5");

// // It should have a way to change a todo's.

// todos[0] = "item 1 updated";

// // It should have a way to delete a todo.
// todos.splice(0, 1)

// // ------------------------------------ V2 Functions-------------------------
// // It should have a place to store todo's.(array)
// var todos = ['item One', 'item Two', 'item Three', 'item Four'];

// function displayTodos() {
//     // It should have a way to display todo's.
// //     console.log('my Todos:', todos);



// // }

// // displayTodos();

// // // It should have a way to add new todo's.
// // function addTodo(todo) {
// //     todos.push(todo);
// //     displayTodos();



// // }

// // addTodo('andrew');

// // //  It should have a way to change a todo's.

// // function updateTodo(position, change) {

// //     todos[position] = change;
// //     displayTodos();
// // }

// // updateTodo(1, "got it");

// // //  It should have a way to delete a todo.

// // function deleteTodo(position) {

// //     todos.splice(position, 1);
// //     displayTodos();


// // }

// // deleteTodo(1);

// // Repeat exercise
// // It should have a place to store todo's.(array)
// var drinks = ['soda', 'juice', 'water', 'pepsi'];

// // It should have a way to display todo's.

// function displayDrinks() {

//     console.log("My Dirnks:", drinks);


// }

// displayDrinks();

// // It should have a way to add new todo's.

// function addDrinks(drink) {

//     drinks.push(drink);

//     displayDrinks();
// }

// addDrinks("Club soda");

// // It should have a way to change a todo's.

// function updateDrinks(position, change) {

//     drinks[position] = change;

//     displayDrinks();

// }

// updateDrinks(0, 'lemon water');

// //  It should have a way to delete a todo.

// function deleteDrinks(position) {


//     drinks.splice(position, 1);

//     displayDrinks();

// }

// deleteDrinks(0);
// ---------------------------Objects v3-------------------

// Example

// var myComputer = {

//     operatingSystem: 'mac',
//     screenSize: '15inches',
//     purchaseYear: 2020

// }

// console.log(myComputer);

// console.log(myComputer.operatingSystem);

// // adding functions and objects together
// var Person = {
//     name: 'Josh',
//     sayName: function () {

//         console.log(this.name);

//     }


// // }

// // console.log(Person.sayName());

// // It should have a place to store todo's.(Array)
// //  It should have a way to display todo's.(Method)
// // It should have a way to add new todo's.(Method)
// // It should have a way to change a todo's.(Method)
// // It should have a way to delete a todo.(Method)

// var todoList = {

//     drinks: ['soda', 'juice', 'water', 'pepsi'],

//     displayTodo: function () {
//         console.log('My drink List:', this.drinks);

//     },
//     addTodo: function (change) {
//         this.drinks.push = change;
//         this.displayTodo();
//     },

//     changeTodo: function (postion, change) {

//         this.drinks[postion] = change;
//         this.displayTodo();


//     },

//     deleteTodo: function (position) {

//         this.drinks.splice(position, 1);

//         this.displayTodo();


//     }



// // }
// // // Test
// // console.log(todoList.drinks);
// // console.log(todoList.displayTodo());
// // console.log(todoList.addTodo('power aide'));
// // console.log(todoList.changeTodo(0, 'wine'));
// // console.log(todoList.deleteTodo(0));

// // ---------------------------------------Booleans V4------



// // var todoList = {
// //     drinks: [],

// //     displayTodo: function () {
// //         console.log('My drink List:', this.drinks);

// //     },
// //     addTodo: function (todoText) {
// //         this.drinks.push({
// //             todoText: todoText,
// //             completed: false
// //         });

// //         this.displayTodo();
// //     },

// //     changeTodo: function (postion, todoText) {

// //         this.drinks[postion].todoText = todoText;
// //         this.displayTodo();


// //     },

// //     deleteTodo: function (position) {

// //         this.drinks.splice(position, 1);

// //         this.displayTodo();


// //     },

// //     toggleCompleted: function (position) {

// //         var drink = this.drinks[position];

// //         drink.completed = !drink.completed;

// //         this.displayTodo();

// //     }



// // }

// // console.log(todoList.addTodo('first try'));
// // console.log(todoList.changeTodo(0, 'second try'));
// // console.log(todoList.toggleCompleted(0));

// // ---------------------------------Loop V5--------------------
// // var gym = ['abs', 'arms', 'legs'];

// // for (var i = 0; i < gym.length; i++) {

// //     console.log('I LOVE TRAINING', gym[i]);


// // }
// getting accres to display todo method


var todoList = {
    drinks: [],

    // displayTodo: function () {

    //     if (this.drinks.length === 0) {

    //         console.log('your todolist is empty');

    //     } else {
    //         console.log('My drink list:');
    //         for (var i = 0; i < this.drinks.length; i++) {

    //             if (this.drinks[i].completed === true) {
    //                 console.log('(x)', this.drinks[i].todoText);
    //             } else {

    //                 console.log('()', this.drinks[i].todoText);
    //             }

    //         }
    //     }

    // },
    addTodo: function (todoText) {
        this.drinks.push({
            todoText: todoText,
            completed: false
        });


    },

    changeTodo: function (postion, todoText) {

        this.drinks[postion].todoText = todoText;



    },

    deleteTodo: function (position) {

        this.drinks.splice(position, 1);




    },

    toggleCompleted: function (position) {

        var drink = this.drinks[position];

        drink.completed = !drink.completed;



    },

    toggleAll: function () {
        var totalTodos = this.drinks.length;
        var completedTodos = 0;
        //   get number of completed todos loop
        // for (var i = 0; i < totalTodos; i++) {
        //     if (this.drinks[i].completed === true) {
        //         completedTodos++;

        //     }
        // }
        this.drinks.forEach(function (drinks) {
            if (drinks.completed === true) {
                completedTodos++;
            }
        })
        //        // case one
        // if (completedTodos === totalTodos) {
        //     //            // Make everything false
        //     // for (var i = 0; i < totalTodos; i++) {

        //     //     this.drinks[i].completed = false;
        //     // }
        //     this.drinks.forEach(function(todo){
        //        dirnks.completed = false;

        //     })

        // } else {
        //     // for (var i = 0; i < totalTodos; i++) {
        //     //     this.drinks[i].completed = true;
        //     // }
        //     this.drinks.forEach(function(todo){
        //         dirnks.completed = true;

        //      })
        this.drinks.forEach(function (drinks) {

            if (completedTodos === totalTodos) {
                drinks.completed = false;


            } else {

                drinks.completed = true;


            }

        })

    }



}

console.log(todoList.addTodo('we got this'));
console.log(todoList.addTodo('another one'));
// console.log(todoList.toggleCompleted(0));
// console.log(todoList.toggleCompleted(1));
// console.log(todoList.toggleAll());


// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById('toggleAllButton');
// console.log(toggleAllButton);
// // display eventlistener
// displayTodosButton.addEventListener('click', function () {

//     todoList.displayTodo();


// })
// // toggle eventListener
// toggleAllButton.addEventListener('click', function () {

//     todoList.toggleAll();

// })
// more efficient way of handling your code
var handlers = {


    toggleAll: function () {

        todoList.toggleAll();
        view.displayTodos();

    },

    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');

        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';

        view.displayTodos();



    },

    changeTodo: function () {

        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        var changeTodoTextValue = document.getElementById('changeTodoTextValue');

        todoList.changeTodo(changeTodoTextValue.valueAsNumber, changeTodoTextInput.value);
        changeTodoTextInput.value = '';
        changeTodoTextValue.value = '';

        view.displayTodos();

    },

    deleteTodo: function (position) {
        // var deleteTodoText = document.getElementById('deleteTodoText');

        todoList.deleteTodo(position);
        // deleteTodoText.value = '';

        view.displayTodos();



    },
    toggleCompleted: function () {
        var toggleTodo = document.getElementById('toggleTodo');

        todoList.toggleCompleted(toggleTodo.valueAsNumber);
        toggleTodo.value = '';

        view.displayTodos();


    }


};


var view = {

    displayTodos: function () {
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';

        todoList.drinks.forEach(function (drinks, position) {

            var todoLi = document.createElement('li');


            var todoTextWithCompletion = '';
            if (drinks.completed === true) {
                todoTextWithCompletion = '(x)' + drinks.todoText;


            } else {
                todoTextWithCompletion = '()' + drinks.todoText;

            }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);



        }, this)

        var todosUl = document.querySelector('ul');

        todoUl.addEventListener('click', function (event) {
            console.log(event.target.parentNode.id);
            //Get the element that was clicked;
            var elementsClicked = event.target;

            //checked if elementClicked
            if (elementsClicked.className === 'deleteButton') {
                //Run handler
                handlers.deleteTodo(parseInt(elementsClicked.parentNode.id));


            }


        });

    },

    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';

        return deleteButton;




    }


}

console.log(view.displayTodos());




// ----------------------------------Html Dom v7-----------------



var students = ['josh', 'adam', 'alex', 'peter'];


var logNames = function (name) {

    console.log(name);

}


students.forEach(logNames);



var math = multiplyNumbers(2, 5);

function multiplyNumbers(a, b) {

    var results = a * b;

    return results;

}

console.log(math);
