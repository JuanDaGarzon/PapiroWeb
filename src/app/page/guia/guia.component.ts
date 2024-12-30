import { Component } from '@angular/core';

@Component({
  selector: 'app-guia',
  standalone: false,
  
  templateUrl: './guia.component.html',
  styleUrl: './guia.component.css'
})
export class GuiaComponent {
  pdfSrc = "guiaDidactica.pdf";
}
