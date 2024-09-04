import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeecrudService } from '../customservices/employeecrud.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {

  _id=0;
  employee_pic:any;
  uploadError="";
  constructor(public activeRoute:ActivatedRoute, public empcrud:EmployeecrudService){
    let routeParam=activeRoute.snapshot.paramMap.get('_id')
    if(routeParam!=null)
        this._id=parseInt(routeParam);
      //console.log(this._id);
      
  }
  setFile(event:any){
   // console.log(event.target.files[0]);
    this.employee_pic=event.target.files[0]
  
  }
  fileUp(){
    // service function fileUpload : id, file
    if(this.employee_pic!=undefined)  {
      const obs=this.empcrud.fileUpload(this._id,this.employee_pic);
      obs.subscribe({
      next:(data)=>window.alert("Image uploaded successfully..."),
      error:(er)=>console.log(er)
    }) 
  }
}
}
