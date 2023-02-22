import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { exampleProducts } from '@nx-test/products';
import { BannerComponent } from '@nx-test/common-ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BannerComponent],
  selector: 'nx-test-root',
  template: `
    <nx-test-banner></nx-test-banner>
    <ul>
      <li *ngFor="let product of products">
        <strong>{{ product.name }}</strong> Price: {{ product.price }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  products = exampleProducts;
}
