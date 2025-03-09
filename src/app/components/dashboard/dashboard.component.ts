import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    TableModule,
    DropdownModule,
    FormsModule,
    InputIcon,
    IconField,
    InputText,
    Select,
  ],
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  progressCards = [
    { percentage: 99, value: '300/302', label: 'Active Trips' },
    { percentage: 75, value: '375/500', label: 'Active Vehicles' },
    { percentage: 80, value: '16/20', label: 'Under Maintenance' },
  ];

  statuses = [
    { value: '2', label: 'In-Active Trips' },
    { value: '100', label: 'Stopped Vehicles' },
    { value: '4', label: 'Queue Maintenance' },
  ];

  totals = [
    { value: '7', label: 'Total Departments' },
    { value: '60', label: 'Total Fleets' },
    { value: '300', label: 'Total Drivers' },
  ];

  showSidebar = true;
  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { label: 'Report', icon: 'report', path: '/report' },
    { label: 'Organization', icon: 'organization', path: '/organization' },
    { label: 'Users', icon: 'users', path: '/users' },
  ];
  vehicles = [
    {
      vehicleType: 'SUV',
      vehicle: 'Bus-9265',
      plateNum: '04321',
      odometer: 55956,
      gps: '3-Nov-2024 13:05:50',
      device: 'Teltonika C 03 - 96321',
      sim: 'Allowance 1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
    {
      vehicleType: 'SUV',
      vehicle: 'Bus-9265',
      plateNum: '04321',
      odometer: 55956,
      gps: '3-Nov-2024 13:05:50',
      device: 'Teltonika C 03 - 96321',
      sim: 'Allowance 1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
    {
      vehicleType: 'SUV',
      vehicle: 'Bus-9265',
      plateNum: '04321',
      odometer: 55956,
      gps: '3-Nov-2024 13:05:50',
      device: 'Teltonika C 03 - 96321',
      sim: 'Allowance 1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
    {
      vehicleType: 'SUV',
      vehicle: 'Bus-9265',
      plateNum: '04321',
      odometer: 55956,
      gps: '3-Nov-2024 13:05:50',
      device: 'Teltonika C 03 - 96321',
      sim: 'Allowance 1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
  ];

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  // Method to calculate stroke-dashoffset
  calculateDashOffset(percentage: number): number {
    const circumference = 251.2; // 2 * π * r (where r = 40)
    if (percentage >= 96 && percentage < 100) {
      return circumference * 0.05;
    }
    return circumference * (1 - percentage / 100);
  }
}
