import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('bounce', [
      state('normal', style({ transform: 'translateY(0)' })),
      state('hover', style({ transform: 'translateY(-5px)' })),
      transition('normal <=> hover', [
        animate('100ms ease-in-out')
      ])
    ]),
    trigger('fadeOut', [
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent {
  username = '';
  password = '';
  buttonState = 'normal';
  fadeOut = false; // Nueva propiedad para controlar la animación de salida

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.fadeOut = true; // Inicia la animación de salida

    this.apiService.login(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(['/home']); // O ruta deseada después del login
      },
      (error) => {
        console.error('Error de autenticación', error);
        this.fadeOut = false; // Detén la animación de salida si hay un error
      }
    );
  }

  // Métodos para manejar el estado del botón
  onHover() {
    this.buttonState = 'hover';
  }

  onLeave() {
    this.buttonState = 'normal';
  }
}
