import { Observable } from "rxjs/Observable";
import { observable } from "rxjs";

var obs = Observable.create((observer: any) => observer.next("WoW"));

obs.subscribe((x: any) => console.log(x));
