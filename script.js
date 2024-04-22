const notes_container = document.querySelector(".notes_container");
const create_btn = document.querySelector(".button");
const notes = document.querySelectorAll(".notes");

create_btn.addEventListener("click", () => {
    let note = document.createElement("p");
    let img = document.createElement("img");
    note.className = "notes";
    note.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notes_container.appendChild(note).appendChild(img);
})

notes_container.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        storing_user_data()
    }
    else if (e.target.tagName === "P") {
        let notes = document.querySelectorAll(".notes");
        notes.forEach(note => {
            note.onkeyup = function () {
                storing_user_data()
            }
        })
    }
})

function storing_user_data(){
    localStorage.setItem("user_notes",notes_container.innerHTML);
}

function show_user_data(){
    notes_container.innerHTML = localStorage.getItem("user_notes");
}
show_user_data();


document.addEventListener("click", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
