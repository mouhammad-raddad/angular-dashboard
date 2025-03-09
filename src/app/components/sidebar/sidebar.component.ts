import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [NgClass, RouterLinkActive, RouterLink, NgOptimizedImage],
})
export class SidebarComponent {
  isOpen: boolean = false;
  isMenuOpen: boolean = false;
  isExpanded: boolean = false;

  menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'dashboard', children: [] },
    { label: 'Report', icon: 'report', path: '/report', children: [] },
    {
      label: 'Organization',
      icon: 'organization',
      path: '/organization',
      expanded: false,
      children: [
        { label: 'Invoices', path: '/invoices', icon: 'invoices' },
        { label: 'Users', path: '/user-form', icon: 'users' },
      ],
    },
  ];

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleItem(item: any) {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
}
