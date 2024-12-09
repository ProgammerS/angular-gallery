import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  feedbackForm: FormGroup;
  isSubmitted: boolean = false; // Tracks if the form has been submitted

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^\\+?[0-9]{10,15}$') // Phone number validation for international format
        ]
      ],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted:', this.feedbackForm.value);
      this.isSubmitted = true; // Set the submission state to true
      this.feedbackForm.reset(); // Optionally reset the form
    } else {
      console.log('Form is invalid');
    }
  }

  // Getters for form controls
  get name() {
    return this.feedbackForm.get('name');
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get phone() {
    return this.feedbackForm.get('phone');
  }

  get subject() {
    return this.feedbackForm.get('subject');
  }

  get message() {
    return this.feedbackForm.get('message');
  }
}
