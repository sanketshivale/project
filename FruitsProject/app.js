const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});


const Fruit = mongoose.model("Fruit" , fruitSchema);


const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Prety solid  as a fruit"
});


//
// fruit.save();
//

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const   person = new Person({
  name: "Sanket",
  age: 20
});

person.save();
