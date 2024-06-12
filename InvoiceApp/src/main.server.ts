import { bootstrapApplication } from '@angular/platform-browser';
import { InvoiceComponent } from './app/components/invoice/invoice.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(InvoiceComponent, config);

export default bootstrap;
