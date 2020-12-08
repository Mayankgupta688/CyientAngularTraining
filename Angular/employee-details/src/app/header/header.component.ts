import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ['./header.component.css', "./header.component.copy.css"]
})
export default class HeaderComponent {
    userName: string = "Anshul";
    curentTime: string = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;

    constructor() {
        setInterval(() => {
            this.curentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
        }, 1000)
    }
}
