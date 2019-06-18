import { Component, OnInit } from '@angular/core';
import { Business } from '../model/business';
import { BusinessClientService } from '../client/business-client.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-sac-get',
  templateUrl: './sac-get.component.html',
  styleUrls: ['./sac-get.component.css']
})
export class SacGetComponent implements OnInit {

  businesses : Business[];

  constructor(private businessService : BusinessClientService) { }

  ngOnInit() {
    this.businessService.get().subscribe((data : Business[]) => {
      console.log(JSON.stringify(data));
      this.businesses = data;
    })        
  }

}
