import { Component, inject, ViewChild } from '@angular/core';
import { Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AlertService } from '../../../core/services/Alert/alert.service';


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

  private readonly alert = inject(AlertService);
  
  constructor(private router:Router, private messageService:MessageService){

  }

  logout() {
    this.alert.success('Sesión cerrada!')
    this.router.navigate(['auth/login']);
    localStorage.clear();
  }

}
