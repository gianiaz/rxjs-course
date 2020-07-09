import { Observable, merge, observable } from "rxjs";

var a = new Observable((observer: any) => {
  observer.next("Hey Guys");
});

var b = new Observable((observer: any) => {
  observer.next("How is it going");
});

var newObs = merge(a, b);

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
