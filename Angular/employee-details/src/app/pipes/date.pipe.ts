import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "changeDate"
})
export class DatePipe implements PipeTransform {
    transform(value: string) {
        var date = new Date(value);

        return `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
    }
}