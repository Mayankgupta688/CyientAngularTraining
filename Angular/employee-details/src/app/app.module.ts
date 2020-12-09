import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';
import RootComponent from './root/root.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailsComponent } from './details/details.component';
import { ThemeComponent } from './theme/theme.component';
import { UpdateHeaderComponent } from './update-header/update-header.component';

@NgModule({
    declarations: [
        RootComponent, 
        HeaderComponent, 
        FooterComponent, 
        EmployeeComponent, 
        DetailsComponent, 
        ThemeComponent, 
        UpdateHeaderComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [UpdateHeaderComponent]
})
export class AppModule { }