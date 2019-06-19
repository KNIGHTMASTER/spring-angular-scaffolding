import { Component, OnInit } from '@angular/core';
import { Business } from '../model/business';
import { BusinessClientService } from '../client/business-client.service';
import { HttpResponse } from '@angular/common/http';
import { ResponseData } from '../model/response-data';

@Component({
  selector: 'app-sac-get',
  templateUrl: './sac-get.component.html',
  styleUrls: ['./sac-get.component.css']
})
export class SacGetComponent implements OnInit {

  businesses : Business[];

  constructor(
    private businessService : BusinessClientService
    ) { }

  ngOnInit() {
    this.initContent();
  }

  deleteBusiness(personalName : string) {
    alert('processing delete '+personalName)
    this.businessService.delete(personalName).subscribe((data: HttpResponse<ResponseData>) => {
      console.log('deleted')
      this.initContent();
    });
  }

  initContent() {
    this.businessService.get().subscribe((data : Business[]) => {      
      this.businesses = data;
    })        
  }
}
