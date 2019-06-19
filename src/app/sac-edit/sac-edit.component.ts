import { Component, OnInit } from '@angular/core';
import { BusinessClientService } from '../client/business-client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Business } from '../model/business';
import { ResponseData } from '../model/response-data';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sac-edit',
  templateUrl: './sac-edit.component.html',
  styleUrls: ['./sac-edit.component.css']
})
export class SacEditComponent implements OnInit {

  public angForm : FormGroup;
  submitted = false;
  private business : Business;
  constructor(
    public businessClientService : BusinessClientService, 
    private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit() {
    this.angForm = new FormGroup({
      personalName : new FormControl({value:'', disabled:true}, [Validators.required],),
      businessName : new FormControl('', [Validators.required]),
      businessNumber : new FormControl('', [Validators.required]),
    })

    this.route.params.subscribe(params => {
      this.businessClientService.findByName(params['personName']).subscribe((data : Business) => {
        this.angForm.get('personalName').setValue(data.personalName);
        this.angForm.get('businessName').setValue(data.businessName);
        this.angForm.get('businessNumber').setValue(data.businessNumber);
      });
    })
  }

  updateData() {
    this.submitted = true;
    if (this.angForm.invalid) {
      return;
    }else {
       this.business = new Business();
       this.business.personalName = this.angForm.get('personalName').value;
       this.business.businessName = this.angForm.get('businessName').value;
       this.business.businessNumber = this.angForm.get('businessNumber').value;

       this.businessClientService.edit(this.business).subscribe((data : HttpResponse<ResponseData>) => {
         alert('success update');
         this.router.navigate(["/business"]);
       })
    }
  }

}
