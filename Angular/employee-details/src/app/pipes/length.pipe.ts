import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "lengthPipe"
})
export class LengthPipe implements PipeTransform {
    transform(value: any[]) {
        return value.length + " Employees";
    }
}