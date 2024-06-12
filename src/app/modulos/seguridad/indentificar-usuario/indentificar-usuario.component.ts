import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indentificar-usuario',
  templateUrl: './indentificar-usuario.component.html',
  styleUrls: ['./indentificar-usuario.component.css']
})
export class IndentificarUsuarioComponent implements OnInit {
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(){
    
  }

  get_login(){
    this.http.get('http://127.0.0.1:8000/signup').subscribe((res:any)=>{
      console.log(res);
    });
  }

  onSubmit() {
    window.location.href = 'http://127.0.0.1:8000';
  }

}
