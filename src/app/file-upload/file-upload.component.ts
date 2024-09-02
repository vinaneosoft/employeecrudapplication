import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {

  _id=0;
  employee_pic:any;
  constructor(public activeRoute:ActivatedRoute){
    let routeParam=activeRoute.snapshot.paramMap.get('_id')
    if(routeParam!=null)
        this._id=parseInt(routeParam);
      console.log(this._id);
      
  }
  setFile(event:any){
    console.log(event.target.files[0]);
    this.employee_pic=event.target.files[0]
  }

  fileUp(){
    // service function fileUpload : id, file
  }
}
