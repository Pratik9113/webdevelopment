// creating object
const bioData={
    name : "pratik",
    age : 19
};

// change object into json format 
const jsonData = JSON.stringify(bioData);
 // undefined  console.log(json.name);


 // change json to object format
const objData = JSON.parse(jsonData);
console.log(objData);
