import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Business } from '../model/business';
import { BusinessClientService } from '../client/business-client.service';
import { ResponseData } from '../model/response-data';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sac-add',
  templateUrl: './sac-add.component.html',
  styleUrls: ['./sac-add.component.css']
})
export class SacAddComponent implements OnInit {

  angForm : FormGroup
  submitted = false
  private business : Business;

  constructor(private _fb : FormBuilder, public businessClient : BusinessClientService, public router : Router) {
  }

  ngOnInit() {
    this.angForm = new FormGroup({
      personName: new FormControl('', [Validators.required]),
      businessName: new FormControl('', [Validators.required]),
      businessNumber: new FormControl('', [Validators.required])
    })
  }

  simpanData() {
      this.submitted = true;
      if (this.angForm.invalid) {
        alert("invalid");
        return;
      }else {
          this.business = new Business();
          this.business.personalName = this.angForm.get('personName').value;
          this.business.businessName = this.angForm.get('businessName').value;
          this.business.businessNumber = this.angForm.get('businessNumber').value;

          this.businessClient.simpanData(this.business).subscribe((data : HttpResponse<ResponseData>) => {
            console.log(JSON.stringify(data));
            alert("Success Insert");
            this.router.navigate(["/business"]);
          })        
      }
  }
}
