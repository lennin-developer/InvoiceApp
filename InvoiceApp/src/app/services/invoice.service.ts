import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;
  constructor() { }

  getInvoice(): Invoice{
    return this.invoice;
  }

}
