function createInstructor (firstName, lastName){
    return{
        firstName,
        lastName,
        instructorStatus : "active"
    }
}

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

const instructor2 = {
    firstName: 'Colt',
    sayHi(){
        return 'Hi!';
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

function createAnimal(species, onomon, noise) {
    return{
        species,
        [onomon](){
            return noise;
        }
    }
}