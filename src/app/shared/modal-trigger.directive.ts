import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQUERY_TOKEN } from './jQuery.service'

@Directive({
    selector: '[modal-trigger]'
})



export class ModalTriggerDirective implements OnInit{

    private htmlElement: HTMLElement
    @Input('modal-trigger') modalId: string;

    constructor(refElement: ElementRef, @Inject(JQUERY_TOKEN) private $ : any){
        this.htmlElement = refElement.nativeElement;
    }
    
    ngOnInit(){
        let that = this;
        this.htmlElement.addEventListener('click', e => {
            let id = `#${that.modalId}`;
            console.log("id " + id)

            let element = that.$(id);
            console.log("element " + element)
            
            element.modal("show")
        })
    }
}
