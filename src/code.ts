import { ReplaySubject } from "rxjs";

var subj = new ReplaySubject(2);

subj.subscribe(
  (data) => addItem("Observer 1: " + data),
  (err) => addItem(err),
  () => addItem("Observer 1 completed")
);

subj.next("The first thing has been sent");
subj.next("Another thing as been sent");
subj.next("Observer 2 is about to subscribe");

var observer2 = subj.subscribe((data) => addItem("Observer 2: " + data));

subj.next("The second thing has been sent");
subj.next("A third second thing has been sent");

observer2.unsubscribe();

subj.next("One more event");

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
