import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [RouterOutlet, SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, ToastModule],
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

  show() {
    this.messageService.add({ severity: 'success', summary: 'Enhorabuena!', detail: 'Cerraste sesión' });
  }

}
