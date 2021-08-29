import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTema() {
    const btn = document.getElementById('btn-tema');
    if(btn.classList.contains('fa-sun')){
      btn.classList.remove('fa-sun');
      btn.classList.add('fa-moon');

      document.body.classList.add('dark');
      document.getElementById('header').classList.add('dark');
      document.getElementById('nav').classList.add('dark');
      document.getElementById('options').classList.add('dark');
    }else{
      btn.classList.remove('fa-moon');
      btn.classList.add('fa-sun');

      document.body.classList.remove('dark');
      document.getElementById('header').classList.remove('dark');
      document.getElementById('nav').classList.remove('dark');
      document.getElementById('options').classList.remove('dark');
    }
  }

}
