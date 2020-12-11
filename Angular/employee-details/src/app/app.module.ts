import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';
import RootComponent from './root/root.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailsComponent } from './application/components/details/details.component';
import { ThemeComponent } from './theme/theme.component';
import { UpdateHeaderComponent } from './update-header/update-header.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FilterEmployeesComponent } from './filter-employees/filter-employees.component';
import { UnderscorePipe } from './pipes/underscore.pipe';
import { DatePipe } from './pipes/date.pipe';
import { LengthPipe } from './pipes/length.pipe';
import { DelayRenderingDirective } from './directives/delayRendering.directive';
import { UseServiceComponent } from './use-service/use-service.component';
import { UseServicedataComponent } from './use-servicedata/use-servicedata.component';
import { UsingSwitchComponent } from './using-switch/using-switch.component';
import { EmployeesComponent } from './application/components/employees/employees.component';
import { FilterComponent } from './application/components/filter/filter.component';
import { InfoComponent } from './application/components/info/info.component';

@NgModule({
    declarations: [
        RootComponent, 
        HeaderComponent, 
        FooterComponent, 
        EmployeeComponent, 
        DetailsComponent, 
        ThemeComponent, 
        UpdateHeaderComponent, 
        TwoWayComponent, 
        EmployeeListComponent, 
        EmployeeDetailsComponent, 
        FilterEmployeesComponent,
        UnderscorePipe,
        DatePipe,
        LengthPipe,
        DelayRenderingDirective,
        UseServiceComponent,
        UseServicedataComponent,
        UsingSwitchComponent,
        EmployeesComponent,
        FilterComponent,
        InfoComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule,
        HttpClientModule
    ],
    bootstrap: [InfoComponent, EmployeesComponent]
})
export class AppModule { }