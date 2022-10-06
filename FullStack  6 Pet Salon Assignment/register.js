//object literal {}
let petSalon = {
    //attributes
    name: "Pet Salon",
    Phone: "763",
    address:{
        country:"USA",
        city:"SAN DIEGO",
        street:"MARLBOROUGH",
        zip:"9000",
    }
}

console.log(petSalon.name);
console.log(petSalon.address);

let petID = [ 
    {
        Name:"Ghost",
        Age:"1",
        gender: "Male",
        service:"Neuter",
    },
     {     
        Name:"Draco",
        Age:"1",
        Gender: "Male",
        service:"Check up", 
     },
    {   
        Name: "LuLu",
        Age:"1",
        Gender:"Female",  
        Service: "Grooming",
        }
]

//start point; stopping conditon ; increment
// length return the number of elements in the array
for(let i=0; i<petID.length; i++){
    console.log(petID.length);
}

alert( "The current number of pets registered is : " + petID.length);