import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CustomService } from '../../services/custom.service';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    HttpClientModule,
    TooltipModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  data!: Customer[];

  constructor(private customerService: CustomService) {}

  ngOnInit() {
    this.data = this.customerService.Data;
  }
}
