import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { CustomValidatorFormComponent } from './components/custom-validator-form/custom-validator-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent,
    CustomValidatorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
