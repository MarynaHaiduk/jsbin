// create my list of tasks
const myList = [
     { id: 1, title: 'First list item', done: true },
     { id: 2, title: 'Second list item', done: false }
];

function MyCounter(myList) {
    return myList.length();
}

// add everything from my list
function render() {
// Add all new tasks from my list to ordered list
    myList.forEach(el => {
        // Add only one new task to ordered list
        const listItem = document.createElement('li');
        // set attribute
        listItem.setAttribute('class', el.done ? 'done' : 'progress');
        const listItemText = document.createTextNode(el.title);
        listItem.appendChild(listItemText);

        // // Add button Up
        // const buttonUp = document.createElement('button');
        // const buttonUpText = document.createTextNode('↑');
        // buttonUp.appendChild(buttonUpText);
        // listItem.appendChild(buttonUp);
        //
        // // Add button Down
        // const buttonDown = document.createElement('button');
        // const buttonDownText = document.createTextNode('↓');
        // buttonDown.appendChild(buttonDownText);
        // listItem.appendChild(buttonDown);
        //
        // // Add button Done
        // const buttonDone = document.createElement('button');
        // const buttonDoneText = document.createTextNode('Done');
        // buttonDone.appendChild(buttonDoneText);
        // listItem.appendChild(buttonDone);
        //
        // // Add button Save
        // // const buttonSave = document.createElement('button');
        // // const buttonSaveText = document.createTextNode('Save');
        // // buttonSave.appendChild(buttonSaveText);
        // // listItem.appendChild(buttonSave);
        //
        // // Add button Update
        // const buttonUpdate = document.createElement('button');
        // const buttonUpdateText = document.createTextNode('Update');
        // buttonUpdate.appendChild(buttonUpdateText);
        // listItem.appendChild(buttonUpdate);
        //
        // // Add button Delete
        // const buttonDelete = document.createElement('button');
        // const buttonDeleteText = document.createTextNode('Delete');
        // buttonDelete.appendChild(buttonDeleteText);
        // listItem.appendChild(buttonDelete);

        // add to element to <ol>
        document.getElementById('list').appendChild(listItem);
        List();
    });
}

// display all tasks in the ordered list
render();

// add task to to ordered list
function addToList(){
    const todoInputValue = document.getElementById('todoInput').value;

    if (todoInputValue) {
        // add to my list
        myList.push({
            id: 1,
            title: todoInputValue,
        });

    }
    console.log(myList);

    // don't display my list without changes
    document.getElementById('list').innerHTML = null;
    render();
}

function DeleteAllTasks() {
    document.getElementById('list').innerHTML = null;
    document.getElementsByTagName('span')[0].innerText = 0;
}

// Count completed
let count = 0;
const counterSelector = document.getElementById('counter');

function plusComplited(){
    counterSelector.innerText = ++count;
    // counterSelector.innerText = Number(document.getElementById('counter').innerText) + 1;
}

function minusComplited(){
    counterSelector.innerText = --count;
    // counterSelector.innerText = Number(document.getElementById('counter').innerText) - 1;
}

function resetComplited(){
    count = 0;
    counterSelector.innerText = 0;
}

function List(){
    const currentCounter = Number(document.getElementsByTagName('span')[0].innerText);
    const newCounter = myList.length;
    document.getElementsByTagName('span')[0].innerText = newCounter;
}

// Count tasks
function plusOne(){
    // convert to number
    const currentCounter = Number(document.getElementsByTagName('span')[0].innerText);
    //convert to number with ~~
    // const currentCounter = ~~document.getElementsByTagName('span')[0].innerText;
    const newCounter = currentCounter + 1;
    document.getElementsByTagName('span')[0].innerText = newCounter;
}

function minusOne(){
    const currentCounter = Number(document.getElementsByTagName('span')[0].innerText);
    const newCounter = currentCounter - 1;
    document.getElementsByTagName('span')[0].innerText = newCounter;
}