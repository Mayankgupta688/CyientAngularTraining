import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { HelpComponent } from "./help/help.component";
import { AboutComponent } from "./about/about.component";
import { DetailsComponent } from "./details/details.component";
import { TemplateFormComponent } from "./template-form/template-form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "help", component: HelpComponent },
    { path: "about", component: AboutComponent },
    { path: "details/:userId/:userName", component: DetailsComponent},
    { path: "template", component: TemplateFormComponent},
    { path: "**", component: PageNotFoundComponent}
  ];

@NgModule({
    declarations: [
        HomeComponent, 
        HelpComponent, 
        AboutComponent,
        DetailsComponent,
        TemplateFormComponent,
        PageNotFoundComponent
    ],
    imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
    exports: [
        HomeComponent, 
        HelpComponent, 
        AboutComponent,
        DetailsComponent,
        TemplateFormComponent,
        PageNotFoundComponent
    ]
})
export default class RoutingModule {

}