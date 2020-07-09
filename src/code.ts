import { Observable, merge } from "rxjs";
import { map } from "rxjs/operators";
var a = new Observable((observer: any) => {
  observer.next("Should be");
});

var b = new Observable((observer: any) => {
  observer.next("Uppercase");
});

var newObs = merge(a, b);

var mappedObs = newObs.pipe(map((val: any) => val.toUpperCase()));

console.log(mappedObs);
mappedObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
