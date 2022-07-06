class Developer{
    constructor(name, health=100, braincell= 1){
        this.name = name
        this.languages =["Python", "MERN", "JAVA", "C#"]
        this.health = health
        this.braincell = braincell
    }

    // method : what it DOES
    sleep(){
        console.log("Zzzzzzzzzz.......")
        this.braincell += 5
        this.health +=10
        return this
    }

    completeProject(title){
        // console.log("Completing a project named "+title)
        console.log(`${this.name} completed a project named ${title}`)
        this.health -= 15
        this.braincell += 2
        return this
    }

}

class JuniorDeveloper extends Developer{
    constructor(){
        super("Another Junior Developer", 70, 10) // calling the constructor of Developer
        this.excitementLevel = 100
    }
}


const dev1 = new Developer("Heidi")
const dev2 = new Developer("Max", 80, 5)
dev1.sleep().sleep().sleep().sleep()
dev2.completeProject("C# project")

console.log(dev1)
console.log(dev2)

const junDev = new JuniorDeveloper()
junDev.completeProject("Random number generator")
console.log(junDev)