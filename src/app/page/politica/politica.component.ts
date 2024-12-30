import { Component } from '@angular/core';

@Component({
  selector: 'app-politica',
  standalone: false,
  
  templateUrl: './politica.component.html',
  styleUrl: './politica.component.css'
})
export class PoliticaComponent {
  pdfSrc = "politicaPrivacidad.pdf";
}
