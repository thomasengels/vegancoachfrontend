import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  title: 'Vegan Coach Antwerp';

  constructor() { }

  ngOnInit(): void {
  }

}
