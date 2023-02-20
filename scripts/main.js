//objetos//
const person = {  name: "Edu",  age: 30,  hobbies: ["music", "movies", ["futbol",  {    name:"tenis",    team:["individual","por parejas"]  }  , "baloncesto"]],  address: {    street: "50 Main st",    city: "Boston",    state: "MA",  },}; 

console.log(person.hobbies[2][1].team[0])