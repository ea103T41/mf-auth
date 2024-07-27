import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";

@Component({
    selector: 'au-home',
    standalone: true,
    imports: [LoginComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
