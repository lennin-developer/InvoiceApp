import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { RowItemsComponent } from '../row-item/row-item.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    RowItemsComponent,
    ListItemsComponent,
    CompanyViewComponent,
    ClientViewComponent,
    InvoiceViewComponent,
  ],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
