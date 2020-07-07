import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/share";

var obs = Observable.create((observer: any) => {
  try {
    observer.next("WoW");
    observer.next("how are you?");
    setInterval(() => {
      observer.next("I am good");
    }, 2000);
    //observer.complete();
    observer.next("this will not send");
  } catch (err) {
    observer.error(err);
  }
}).share();

var observer = obs.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("completed")
);

setTimeout(() => {
  var observer2 = obs.subscribe((x: any) => addItem("Subscriber 2: " + x));
}, 1000);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
