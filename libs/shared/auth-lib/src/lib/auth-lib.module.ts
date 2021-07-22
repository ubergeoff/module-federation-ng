import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [FormsModule, CommonModule, MatButtonModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
})
export class AuthLibModule {}
