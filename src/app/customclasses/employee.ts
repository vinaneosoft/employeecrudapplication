export class Employee {
    constructor(
        public _id=0,  // id="0" for backend json server
        public emp_name="",
        public joining_date=new Date(),
        public emp_salary =0,
        public dept_code="",
        public experience=0,
        public emp_email="",
        public secrete_code="123",
        public employee_pic:any=""
        ){}
        static getImage(arrayBuffer:any){
            const base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
            return base64String;
        }
    // instance method
}

