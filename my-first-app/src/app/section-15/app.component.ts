import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  answer = '';
  defaultQuestion = 'pet';
  @ViewChild('f', { static: true }) signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(formsData: NgForm) {
    // console.log(formsData.value);
    console.log(this.signupForm.value);
    this.signupForm.resetForm();
  }
}
