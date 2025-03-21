import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmiComponent } from './emi/emi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { ExitComponent } from './exit/exit.component';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { WebsiteanimationComponent } from './websiteanimation/websiteanimation.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HttpClientModule } from "@angular/common/http";
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { StudentComponent } from './student/student.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    EmiComponent,
    TemperatureComponent,
    SimpleInterestComponent,
    ExitComponent,
    LoginComponent,
    DirectivesComponent,
    WebsiteanimationComponent,
    AccountsComponent,
    FlipkartComponent,
    PinterestComponent,
    WeatherComponent,
    CreateaccountComponent,
    StudentComponent,
    CreatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
