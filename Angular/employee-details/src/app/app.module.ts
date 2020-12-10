import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';
import RootComponent from './root/root.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailsComponent } from './details/details.component';
import { ThemeComponent } from './theme/theme.component';
import { UpdateHeaderComponent } from './update-header/update-header.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FilterEmployeesComponent } from './filter-employees/filter-employees.component';

@NgModule({
    declarations: [
        RootComponent, 
        HeaderComponent, 
        FooterComponent, 
        EmployeeComponent, 
        DetailsComponent, 
        ThemeComponent, 
        UpdateHeaderComponent, 
        TwoWayComponent, EmployeeListComponent, EmployeeDetailsComponent, FilterEmployeesComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule
    ],
    bootstrap: [EmployeeListComponent]
})
export class AppModule { }