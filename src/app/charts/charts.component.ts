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
          name: 'أستخدام',
          data: [33, 34, 35, 34, 35, 34, 33, 34, 35, 34, 33, 34],
        },
      ],
      chart: {
        height: 230,
        width: '100%',
        type: 'area',
        dropShadow: {
          color: '#000',
          opacity: 0.35,
        },
        fontFamily: 'Helvetica, Arial, sans-serif',
      },
      xaxis: {
        categories: [
          'ديسمبر',
          'نوفمبر',
          'اكتوبر',
          'سبتمبر',
          'أغسطس',
          'يوليو',
          'يونيو',
          'مايو',
          'ابريل',
          'مارس',
          'فبراير',
          'يناير',
        ],
      },
    };
  }
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
}
