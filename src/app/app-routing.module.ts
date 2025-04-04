import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { HomeComponent } from './home/home.component';
import { EmiComponent } from './emi/emi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { ExitComponent } from './exit/exit.component';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { WebsiteanimationComponent } from './websiteanimation/websiteanimation.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { StudentComponent } from './student/student.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
  {path:'', component:LoginComponent,
  children: [
    {path: 'websiteanimation', component: WebsiteanimationComponent}]},
  {path:'login', component:LoginComponent,
    children: [
    {path: 'websiteanimation', component: WebsiteanimationComponent}]},
  {path: 'dashboard', component: DashboardComponent, 
      children: [
        {path: 'websiteanimation', component: WebsiteanimationComponent},
        { path: 'home', component: HomeComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: 'databinding', component: DatabindingComponent },
        { path: 'calculator', component: CalculatorComponent },
        { path: 'rectangle', component: RectangleComponent },
        { path: 'circle', component: CircleComponent },
        { path: 'bmi', component: BmiComponent },
        { path: 'emi', component: EmiComponent},
        { path: 'temperature', component: TemperatureComponent},
        { path: 'SimpleInterest', component: SimpleInterestComponent},
        { path: 'directives', component: DirectivesComponent},
        { path: 'accounts', component: AccountsComponent},
        { path: 'flipkart', component:FlipkartComponent},
        { path: 'pinterest',component: PinterestComponent},
        { path:'weather', component:WeatherComponent},
        { path:'createaccount', component:CreateaccountComponent},
        { path:'student',component:StudentComponent},
        { path:'createstudent',component:CreatestudentComponent},
        { path:'reactiveforms', component:ReactiveformsComponent},
        { path: 'accountdetails/:id', component: AccountdetailsComponent},
        { path:'createaccount/:id', component:CreateaccountComponent},
        { path:'viewstudents/:id',component:ViewstudentsComponent},
        { path:'createstudent/:id',component:CreatestudentComponent},
      ]
    },
    {path:'exit',component:LoginComponent}

  ]
 
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
