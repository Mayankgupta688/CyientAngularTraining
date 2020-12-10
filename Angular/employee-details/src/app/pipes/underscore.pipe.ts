import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertUnderscore"
})
export class UnderscorePipe implements PipeTransform {
    transform(value: string, from: string, to: string) {
        return value.replace(from, to);
    }
}