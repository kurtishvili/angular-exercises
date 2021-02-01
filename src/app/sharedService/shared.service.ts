import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class sharedService {

    updateListItem: Subject<any> = new Subject();
    updateListItem$ = this.updateListItem.asObservable();

    updateListCount: Subject<any> = new Subject();
    updateListCount$ = this.updateListCount.asObservable();

    addListItem: Subject<any> = new Subject();
    addListItem$ = this.addListItem.asObservable();

    updatePrimaryUrl: Subject<any> = new Subject()
    updatePrimaryUrl$ = this.updatePrimaryUrl.asObservable();

    removeListItem : Subject<any> =new Subject()
    removeListItem$ =this.removeListItem.asObservable();
}