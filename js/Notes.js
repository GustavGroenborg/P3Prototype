function createNewNote(event) {
    let newNote = document.createElement("div");
    newNote.Id = "Note";
    newNote.innerHTML = `
    <h1 contentEditable="true"> Notens Navn </h1>
    <p contentEditable="true"> Notens Indhold </p>`;
    document.body.appendChild(newNote);
}
document.getElementById("noteButton").addEventListener("click", createNewNote);