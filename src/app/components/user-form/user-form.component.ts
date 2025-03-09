import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RouterLink } from '@angular/router';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { FileUpload, UploadEvent } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    RouterLink,
    InputText,
    Select,
    FileUpload,
    ToastModule,
    InputIcon,
    IconField,
    ToggleSwitch,
    HttpClientModule,
  ],
  providers: [MessageService],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  userForm!: FormGroup;

  roles = [
    { label: 'Super Admin', value: 'Super Admin' },
    { label: 'Admin', value: 'Admin' },
    { label: 'User', value: 'User' },
  ];

  departments = [
    { label: 'Fire Fighter', value: 'Fire Fighter' },
    { label: 'IT', value: 'IT' },
    { label: 'HR', value: 'HR' },
  ];

  fleets = [
    { label: 'Fleet 1', value: 'Fleet 1' },
    { label: 'Fleet 2', value: 'Fleet 2' },
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      rfid: [''],
      role: ['', [Validators.required]],
      department: ['', [Validators.required]],
      fleet: [''],
    });
  }

  save() {
    if (this.userForm.valid) {
      this.http
        .post('http://localhost:3000/users', this.userForm.value)
        .subscribe(
          (response) => {
            console.log('User saved:', response);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'User added successfully!',
            });
            // Reset the form after successful submission
            this.userForm.reset();
          },
          (error) => {
            console.error('Error saving user:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to add user.',
            });
          },
        );
    }
  }

  onUpload(event: UploadEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }
}
