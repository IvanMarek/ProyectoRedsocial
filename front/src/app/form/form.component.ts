import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NombreServicioService } from '../uso-back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html'
})
export class FormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private service: NombreServicioService, private router: Router) {
    this.loginForm = this.fb.group({

      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      console.log('Username:', formValues.username);
      console.log('Password:', formValues.password);
      this.service.ingresar({usuario: formValues.username, contraseña: formValues.password}).subscribe((data) => {
        console.log("data: " + JSON.stringify(data))
        if(data.statusCode === 200){
          console.log("Éxito")
          this.router.navigate(["/home"])
        } else {
          let alerta : any = document.getElementById("alerta_id");
          alerta.innerHTML += ("<p style=' text-align : center; color : red;'>Usario o contraseña incorrectos</p>")
        }
      })
    } else {
      console.log('Form is invalid');
    }
  }

  navegar(): void {
    this.router.navigate(["/register"])
  }
}
