class Person {
    public name;
    constructor(name:string){
        this.name = name
    };
    getName(): string {
        return this.name
    }
};

let boy = new Person('kaka');
console.log(boy.getName())