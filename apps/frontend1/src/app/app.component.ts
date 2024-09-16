import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ComponentLibraryComponent} from '@testing-nx/component-library';
import {typescriptLibrary, coolJS} from '@testing-nx/typescript-library'; 


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ComponentLibraryComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = `frontend1 + ${coolJS()}`;
}
