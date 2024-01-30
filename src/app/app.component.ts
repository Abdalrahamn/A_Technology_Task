import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { TableComponent } from './table/table.component';
import { TooltipModule } from 'primeng/tooltip';
import { ChartsComponent } from './charts/charts.component';
import { QRCodeModule } from 'angularx-qrcode';
import { CardComponent } from './card/card.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    TableComponent,
    TooltipModule,
    ChartsComponent,
    QRCodeModule,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  toggle = false;
  
}
