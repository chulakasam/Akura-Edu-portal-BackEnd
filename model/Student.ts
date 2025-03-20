export default class Student {
    studentName: string;
    nic:number;
    dob:string;
    address:string;
    email:string;
    mobilePhone:number;
    guardianphone:number;

    constructor(studentName:string,nic:number,dob:string,address:string,email:string,mobilePhone:number,guardianPhone:number) {
        this.studentName=studentName;
        this.nic=nic;
        this.dob=dob;
        this.address=address;
        this.email=email;
        this.mobilePhone=mobilePhone;
        this.guardianphone=guardianPhone;
    }
}