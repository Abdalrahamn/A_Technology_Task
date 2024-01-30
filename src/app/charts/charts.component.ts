import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'My-series',
          data: [33, 34, 35, 34, 35, 34, 33, 34, 35],
        },
      ],
      chart: {
        height: 280,
        width: '100%',
        type: 'area',
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          color: '#000',
          opacity: 0.35,
        },
      },
      title: {
        text: 'My Chart',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
}
