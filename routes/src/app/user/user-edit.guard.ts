import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export interface ComponenteCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<ComponenteCanDeactivate> {

  canDeactivate(component: ComponenteCanDeactivate): boolean | Observable<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
