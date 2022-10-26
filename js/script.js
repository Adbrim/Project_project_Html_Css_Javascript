let selectedRow = null;

//Show Alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = 'alert laert-${className}'

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".tableMain");   
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields
function clearFields(){
    document.querySelector("#id").value = "";
    document.querySelector("#nom").value = "";
    document.querySelector("#prenom").value = "";
    document.querySelector("#note").value = "";
}

// Add 
document.querySelector("#formulaire").addEventListener("submit", (e) =>{
    e.preventDefault();
    //get form values
    const id = document.querySelector("#id").value;
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const note = document.querySelector("#note").value;

    const list = document.querySelector("#list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td></td>
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${note}</td>
        <td>
        <button type="button" class="edit">Modifier</button>
        <button type="button" class="delete">Supprimer</button>
        </td>
    `;

    list.appendChild(row);
    selectedRow = null;
    showAlert("Student Data Deleted", "danger");
    clearFields()
})

// delete Data
document.querySelector("#list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
})