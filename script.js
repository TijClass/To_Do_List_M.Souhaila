var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

var userinput = document.getElementById("userinput");
function inputValue(inp) {
    return inp.value.length;
}
function createElement() {
    if (inputValue(userinput) == 0){
        alert ("box empty")
    }
    else {
        var ulItem = document.getElementById("ul");
        var divItem = document.createElement("div");
        divItem.classList.add("li-wrapper");
        ulItem.append(divItem);
        var liItem = document.createElement('li');
        divItem.append(liItem);
        var inputLi = document.createTextNode(userinput.value);
        liItem.appendChild(inputLi)
        var divItem2 = document.createElement("div");
        divItem.append(divItem2);
        var iconItem = document.createElement("i");
        divItem2.append(iconItem);
        iconItem.classList.add("fas");
        iconItem.classList.add("fa-backspace");
        iconItem.addEventListener('click', deleteElement);
        console.log(inputValue(userinput));
        userinput.value = ""; 

    }
}
function deleteElement(e){
        var item = e.target;
        item.parentElement.parentElement.remove();
}

var button = document.getElementById("enter");
button.addEventListener('click', createElement);

/*        keypress enter         */
input.addEventListener("keypress", function (event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enter").click();
    }
/*        keyCode         */

if (event.keyCode === 13){
}
});
var clear = document.getElementById("clear");
clear.addEventListener('click', clearList);
function clearList(){
    var List = document.querySelectorAll(".li-wrapper");
    List.forEach(element => {
        element.remove();
    });
}
/*        Fin           */

// clearButton.addEventListener("click", clearList);
// ul.addEventListener("click", strikeThrough);
// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);
// createDeleteButtonIcon();
// deleteParentNodeOnClick();