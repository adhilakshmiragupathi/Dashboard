import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js';
import { MyHttpService } from 'src/app/service.service'; // Update the path

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements AfterViewInit {
  chart!: Chart;
  chartData: ChartData = {
    labels: [],
    datasets: [{
      label: 'Occurrence',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  constructor(private myHttpService: MyHttpService) { }

  ngAfterViewInit() {
    this.myHttpService.getPlantData().subscribe((data: any[]) => {
      // Extracting data for labels and y-values
      this.chartData.labels = data.map(item => item[0]);  // Plan type
      this.chartData.datasets[0].data = data.map(item => ({ x: item[0], y: item[1] }));  // Plan type and occurrence count

      this.createChart();
    });
  }

  createChart() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas context is null.');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: this.chartData,
      options: {
        backgroundColor: 'rgba(42, 42, 82, 0.2)',
        plugins: {
          title: {
            display: true,
            text: 'Total Impressions by Platforms',
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Payment Method'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Occurrence'
            }
          }
        }
      }
    });
  }
}
