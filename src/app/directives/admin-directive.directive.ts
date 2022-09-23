import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

@Directive({
  selector: '[appAdminDirective]'
})
export class AdminDirectiveDirective {

  constructor(
    private eleRef: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService:AuthenticationService
  ) {

  }

  @Input() set appAdminDirective(value: any) {
    const auth = this.authService.userDetails ? JSON.parse(this.authService.userDetails) : null;
    if (auth) {
      const roles = auth.user.roles.filter(role => role.title === value);
      if (roles && roles.length > 0) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainer.clear();
      }
    }
    else {
      this.viewContainer.clear();
    }
  }
}
