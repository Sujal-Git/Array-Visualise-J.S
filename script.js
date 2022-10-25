const inp = document.getElementById("myinp");
const holder_box = document.getElementById("holder");

function create_array() {
    if (inp.value > 20) {
        alert("Sorry! Array's size is big");
        inp.value = "";
    }
    else {
        for (let index = 0; index < inp.value; index++) {
            var inval = parseInt(prompt(`Enter the Value Of Array[${index}]`));
            var text = document.createElement('h3');
            text.innerHTML = inval;
            var el = document.createElement("div");
            holder_box.appendChild(el);
            el.appendChild(text);
            text.classList.add("h_styler");
            el.classList.add("styler");
        }
        inp.value='';
    }
}
function delete_array() {
    var del = parseInt(prompt("Enter the array index you want to delete:"));
    if (del > inp.value) {
        alert("Index Range Not reached");
    } else {
       for (let index = 0; index < inp.value; index++) {
     if (index==del) {
    holder_box.removeChild(holder_box.children[index])
     }
       }
    }
}
