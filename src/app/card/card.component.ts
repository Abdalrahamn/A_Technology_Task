import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { ChartsComponent } from '../charts/charts.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-card',
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
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  urlToCopy: string = 'www.google.com';

  copyToClipboard() {
    const tempInput = document.createElement('input');
    tempInput.value = this.urlToCopy;

    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
}
