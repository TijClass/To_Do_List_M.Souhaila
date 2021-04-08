
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

/*  For now the i element is not there we will create it */
const deleteButton = document.getElementsByTagName("i");

var clearButton = document.getElementById("clear");

console.log(button);
console.log(input);
console.log(ul);
console.log(li);
console.log(deleteButton);
console.log(clearButton);

/* Functions code here */
/*        Create a function called inputLength          */

function inputLength(){

    return input.value.length;
}
button.addEventListener('click', e=> {
    e.preventDefault();
    console.log(inputLength(input));

});

/*       Create a function called createListElement          */

function createListElement(value){
    if (inputLength(input) == ""){
    } 
    else {
        const wrapper = document.createElement("div");
        wrapper.classList.add("li-wrapper")
        const li = document.createElement('li');
        const text = document.createTextNode(input.value)
        li.append(text)
        wrapper.appendChild(li)
        ul.append(wrapper)
    }
}



/*        Fin           */

// clearButton.addEventListener("click", clearList);
// ul.addEventListener("click", strikeThrough);
// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);
// createDeleteButtonIcon();
// deleteParentNodeOnClick();