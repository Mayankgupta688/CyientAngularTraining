import { Directive, TemplateRef, ViewContainerRef }  from "@angular/core";

@Directive({
    selector: "*[delayRendering]"
})
export class DelayRenderingDirective {
    constructor(private _template: TemplateRef<any>, private _container: ViewContainerRef) {
        debugger;
        setTimeout(() => {
            if(this._container["_hostTNode"].value == "div") {
                this._container.createEmbeddedView(this._template)
            }
        }, 5000)
    }
}