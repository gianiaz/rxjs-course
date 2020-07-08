import { ReplaySubject } from "rxjs";

var ReplaySubject2 = new ReplaySubject(30, 500);

ReplaySubject2.subscribe(
  (data) => addItem("Replay subject 2, observer1: " + data),
  (err) => addItem(err),
  () => addItem("Replay subject 2, observer 1 completed")
);

var i = 1;
var int = setInterval(() => ReplaySubject2.next(i++), 100);

setTimeout(() => {
  var obs2 = ReplaySubject2.subscribe((data) =>
    addItem("Replay subject 2, observer2: " + data)
  );
}, 500);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
