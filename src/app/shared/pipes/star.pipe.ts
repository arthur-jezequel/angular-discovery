import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'star'
})
export class StarPipe implements PipeTransform {
    transform(value: any, ...args: any[]): string {
        return "⭐" + value + "⭐";
    }
}