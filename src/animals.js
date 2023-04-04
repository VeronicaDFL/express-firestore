import { db } from './dbConnect.js'




export function addNewAnimal(req, res) {
const newAnimal = req.body
db.collection('animals').add(newAnimal)
.then(doc => res.status(201).send("New animal added: " + doc.id))
.catch(err => res.status(500).send(err))

}

export async function getAllAnimals(req, res){
 const collection = await db.collection('animals').get()
 .catch(err => res.status(500).send(err))
// const animalList = collection.doc.map(animal => animal.data())
const animalList = collection.doc.map(animal => ({...animal.data(), id: animal.id}))
res.send(animalList)
}

