import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _ls:LoginService) {}

  ngOnInit() {
  }

}