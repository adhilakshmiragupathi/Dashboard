import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit { 
  customers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:9999/getCustomers').subscribe(
      (response) => {
        this.customers = response;
      },
      (error) => {
        console.error('Error fetching customer data: ', error);
      }
    );
  }
}