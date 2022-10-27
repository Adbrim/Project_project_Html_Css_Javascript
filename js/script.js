let identifiant = 2;
selectedRow = null

// Clear All Fields
function clearFields(){
    document.querySelector("#id").value = "";
    document.querySelector("#nom").value = "";
    document.querySelector("#prenom").value = "";
    document.querySelector("#note").value = "";
    identifiant++;

}

// Add 
document.querySelector("#formulaire").addEventListener("submit", (e) =>{
    e.preventDefault();
    //get form values
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const note = document.querySelector("#note").value;

    const list = document.querySelector("#list");
    console.log(list);
    const row = document.createElement("tr");
    console.log(row);
    row.innerHTML = `
        <td>${identifiant}</td>
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${note}</td>
        <td>
        <button type="button" class="edits" onclick="UpStud(this);">Modifier</button>
        <button type="button" class="delete" >Supprimer</button>
        </td>
    `;

    list.appendChild(row);
    selectedRow = null;
    clearFields()
})

// delete Data
document.querySelector("#list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
    }
})



// document.querySelector("#list").addEventListener("click", (e) => {
//     target = e.target;
//     if(target.classList.contains("edit")){
//         let row = target.parentElement.parentElement;
//         row = row.parentNode.parentNode;
//         console.log(row);

//         var tr = document.createElement('tr');
        
//         var td1 = tr.appendChild(document.createElement('td'));
//         var td2 = tr.appendChild(document.createElement('td'));
//         var td3 = tr.appendChild(document.createElement('td'));
//         var td4 = tr.appendChild(document.createElement('td'));
//         var td5 = tr.appendChild(document.createElement('td'));
        
        
//         td1.innerHTML='<td><input type="number" id="id" name="id" readonly></td>';
//         td2.innerHTML='<td><input type="text" id="nom" name="nom"></td>';
//         td3.innerHTML='<td><input type="text" id="prenom" name="prenom"></td>';
//         td4.innerHTML='<td><input type="number" id="note" name="note"></td>';
//         td5.innerHTML='<td><button type="submit" class="add-btn" value="submit">Annuler</button></td>';

//         document.getElementById("#list").replaceChild(tr, row)

//         // row.parentNode.replaceChild(newRow, row);
//         // document.querySelector("#id").value = selectedRow.children[0].textContent;
//         // document.querySelector("#nom").value = selectedRow.children[1].textContent;
//         // document.querySelector("#prenom").value = selectedRow.children[2].textContent;
//         // document.querySelector("#note").value = selectedRow.children[3].textContent;
//     }
// })

function UpStud(stud){
    var id=document.form.id.value; 
    var nom=document.form.nom.value; 
    var prenom=document.form.prenom.value; 
    var note=document.form.note.value; 

    var s = stud.parentNode.parentNode;
    var tr = document.createElement('tr');
    
    var tr = document.createElement('tr');
        
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    
    
    td1.innerHTML='<td><input type="number" id="ids" name="ids" readonly></td>';
    td2.innerHTML='<td><input type="text" id="noms" name="noms"></td>';
    td3.innerHTML='<td><input type="text" id="prenoms" name="prenoms"></td>';
    td4.innerHTML='<td><input type="number" id="notes" name="notes"></td>';
    td5.innerHTML='<td><button type="submit" class="add-btn" value="submit" onclick="validStud(this);">valider</button></td>';

    document.getElementById("list").replaceChild(tr, s);

    document.querySelector("#ids").value = s.children[0].textContent;
    document.querySelector("#noms").value = s.children[1].textContent;
    document.querySelector("#prenoms").value = s.children[2].textContent;
    document.querySelector("#notes").value = s.children[3].textContent;

}

function validStud(stud){
    const id = document.querySelector("#ids").value;
    const nom = document.querySelector("#noms").value;
    const prenom = document.querySelector("#prenoms").value;
    const note = document.querySelector("#notes").value;

    var s = stud.parentNode.parentNode;
    var tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${id}</td>
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${note}</td>
        <td>
        <button type="button" class="edits" onclick="UpStud(this);">Modifier</button>
        <button type="button" class="delete" >Supprimer</button>
        </td>
    `;

    document.getElementById("list").replaceChild(tr, s);
}