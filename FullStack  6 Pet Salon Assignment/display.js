function displayPetCards(){
    //get the html element where we display the pets
    let petsDiv = document.getElementById("pets");
    let tmp = "" //tmp stands for  template
    //travel the pets array
    for(let i=0; i<petSalon.pets.length;i++){

        let aPet = petSalon.pets[i];
        tmp+=`
        <div class="pet">
            <p> Name: ${aPet.name} </p>
            <p> Age: ${aPet.age} </p>
            <p> Gender: ${aPet.gender} </p>
            <p> Breed: ${aPet.breed} </p>
            <p> Service: ${aPet.service} </p>
        </div>
            `;
    }
        // creat the template (card)
    petsDiv.innerHTML = tmp;
        //insert the card into the html element
}
function displayPetTable(){

 let pTable = document.getElementById("tablePets");
    let format = ""
        for(let i=0; i<petSalon.pets.length;i++){

            let aPet = petSalon.pets[i];
            format+=` 
            <tr> 
                <td> Name ${aPet.name}</td>
                <td> Age ${aPet.age}</td>
                <td> Gender ${aPet.gender}</td>
                <td> Breed ${aPet.breed}</td>
                <td> Service ${aPet.service}</td>
            </tr>
            `;
}
    pTable.innerHTML = format;
}