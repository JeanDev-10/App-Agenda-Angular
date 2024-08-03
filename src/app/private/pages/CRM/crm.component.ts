import { Component, ViewChild } from '@angular/core';
import { Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [RouterOutlet, SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, ToastModule, RouterLinkActive, RouterModule],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CRMComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible = false;
  
  constructor(private router:Router, private messageService:MessageService){

  }

  logout() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Sesión cerrada!"
    });
    this.router.navigate(['auth/login'])
  }

}
