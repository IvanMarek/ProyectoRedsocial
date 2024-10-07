import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NombreServicioService } from '../uso-back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private service: NombreServicioService, private router: Router) {
    this.registerForm = this.fb.group({
      username: [''],
      password: [''],
      confirmPassword: ['']
    });

  }

  onSubmit() {
    const { password, confirmPassword, username } = this.registerForm.value;
    if (password === confirmPassword) {
      this.service.registrar({usuario: username, contraseña: password}).subscribe((data) => {
        console.log("data: " + JSON.stringify(data))
        if(data.statusCode === 200){
          console.log("Registrado con éxito")
          this.router.navigate(["/login"])
        } else {
          console.log("Error al registrar")
        }
      })
    } else {
      console.log('Form not valid');
    }
  }

  navegar(): void {
    this.router.navigate(["/login"])
  }
}
