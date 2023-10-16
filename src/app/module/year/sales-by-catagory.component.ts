import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales-by-catagory',
  templateUrl: './sales-by-catagory.component.html',
  styleUrls: ['./sales-by-catagory.component.css']
})
export class SalesByCatagoryComponent implements OnInit {
  chartOptions: any; // Define chartOptions as any for now

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchChartData();
  }

  fetchChartData() {
    this.http.get<any>('http://localhost:9999/analytics').subscribe(
      data => {
        console.log('Response from API:', data);

        // Transform the response into the expected format
        const transformedData = Object.keys(data).map(year => ({ x: new Date(+year, 0), y: data[year] }));

        this.chartOptions = {
          animationEnabled: true,
          backgroundColor: 'rgba(42, 42, 82, 0.2)',
          title: {
            text: 'Year Based Customers'
          },
          axisY: {
            title: 'Units Sold',
            // valueFormatString: '0,,.',
            suffix: ''
          },
          data: [
            {
              type: 'splineArea',
              color: 'rgba(62, 136, 91, 0.5)',
              xValueFormatString: 'YYYY',
              dataPoints: transformedData
            }
          ]
        };
      },
      error => {
        console.error('Error fetching chart data:', error);
      }
    );
  }
}
