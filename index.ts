class student{
    fullName:string;
    rollNumber:number;
    course:string;
    staticFee:number = 3000;
    staticSchoolName:string = "PIAIC";
    status:string;

    constructor(fullName:string,rollNumber:number,course:string, status:string){
        this.fullName = fullName;
        this.rollNumber = rollNumber;
        this.course = course;
        this.status =status;
    

    }
    getinfo(){
        console.log(`Full Name = ${this.fullName}, RollNumber = ${this.rollNumber}, Course = ${this.course}, status = ${this.status}`)


    }

}
class studentdetail extends student{
    constructor(fullName:string,rollNumber:number,course:string,status:string){super(fullName,rollNumber,course,status)
}
welcome(){
    console.log(`Full Name = ${this.fullName}, RollNumber = ${this.rollNumber}, Course = ${this.course}, status = ${this.status}`)

}


}
let system = new studentdetail("Rumman Touqeer",2147909,"WEB 3 & Metaverse","Paid")
system.welcome()

let system1 = new studentdetail("Hassan Naseer",2147911,"Block Chain","paid")
system1.welcome()

let system2 = new studentdetail("Neha Irfan",2147914,"Generative AI","unpaid")
system2.welcome()
    
























