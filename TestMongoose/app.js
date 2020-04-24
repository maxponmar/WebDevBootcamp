const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

//fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Maximiliano",
    age: 21,
    favouriteFruit: fruit
});

//person.save();

Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    } else {    
        mongoose.connection.close();
        fruits.forEach(fruit => console.log(fruit.name));      
    }
});



Fruit.updateOne({_id: "itemid"}, {name: "Peach"}, function(err){
    if (err){
        console.log(err);        
    } else {
        console.log("Successfully updated the document");        
    }
})