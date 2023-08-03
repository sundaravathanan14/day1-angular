import { Directive, ElementRef } from "@angular/core";

@Directive({selector:'[highlighter]'})
export class Highlight{
    constructor(private element:ElementRef){
        element.nativeElement.style.fontSize = '25px';
    }
}