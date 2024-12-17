import { LinkedList } from "./linkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.insertAt("cow", 5);
//list.removeAt(4);
//list.pop();

//console.log(JSON.stringify(list, null, 4));
//console.log(list.listSize());
//console.log(list.firstNode());
//console.log(list.tail());
//console.log(list.at(4));
//console.log(list.contains("hamster"));
//console.log(list.find("snake"));
//console.log(list.toString());
