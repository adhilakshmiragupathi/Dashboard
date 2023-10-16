import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.css']
})
export class SalesByMonthComponent implements AfterViewInit {
  @ViewChild('pieChartCanvas') pieChartCanvas!: ElementRef;
  pieChart: any;

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.http.get<any[]>('http://localhost:9999/getBillOccurrences').subscribe(data => {
      console.log('Received data:', data);
  
      // Process the data and create the chart
      const labels = data.map(item => item[0].toString());
      const values = data.map(item => item[1]);

      console.log(values)

      const ctx = this.pieChartCanvas.nativeElement.getContext('2d');
      this.pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels.map(label => label.toString()),
          datasets: [{
            data: values,
            backgroundColor: ['rgba(255, 87, 51, 0.9)', '#3498DB', '#F1C40F', '#2ECC71', '#8E44AD'],
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Bill Occurrences',
              align: 'center'
            }
          },
          onClick: (event: any, chartElements: any[]) => {
            // Handle click event if needed
          }
        }
      });
    });
  }
}
