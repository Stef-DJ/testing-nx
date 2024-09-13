import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-component-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-library.component.html',
  styleUrl: './component-library.component.css',
})
export class ComponentLibraryComponent {}
