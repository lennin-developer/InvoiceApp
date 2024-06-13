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
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  calculateTotal(){
    // let total = 0;
    // this.invoice.items.forEach(item => {
    //   total += item.total();
    // });
    // return total;
    //lo mismo de arriba pero con reduce
    return this.invoice.items.reduce((total, item) => total + item.total(), 0);
  }

}
