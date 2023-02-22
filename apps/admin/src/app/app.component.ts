import { NxWelcomeComponent } from './nx-welcome.component';
import { Component } from '@angular/core';
import { BannerComponent } from '@nx-test/common-ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, BannerComponent],
  selector: 'nx-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'admin';
}
