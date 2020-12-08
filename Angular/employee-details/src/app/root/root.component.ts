import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
    <div style="padding: 10px; border: 1px solid red;">
        <h1>This is My Content Container Updated Container....</h1><hr/>
        <app-header></app-header>
        <app-footer></app-footer>
    </div>
    `, 
    styleUrls: ["./root.component.css"]
})
export default class RootComponent {}