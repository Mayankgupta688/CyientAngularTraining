import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';
import RootComponent from './root/root.component';

@NgModule({
    declarations: [RootComponent, HeaderComponent, FooterComponent],
    imports: [
        BrowserModule
    ],
    bootstrap: [RootComponent]
})
export class AppModule { }