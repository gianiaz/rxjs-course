import { from } from "rxjs";
import { pluck } from "rxjs/operators";

var obs = from([
  {
    name: "Giovanni",
    age: 44,
  },
  {
    name: "Stefania",
    age: 43,
  },
  {
    name: "Letizia",
    age: 8,
  },
  {
    name: "Riccardo",
    age: 6,
  },
]);

obs.pipe(pluck("age")).subscribe((x: any) => addItem("Ages: " + x));
obs.pipe(pluck("name")).subscribe((x: any) => addItem("Name: " + x));

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
