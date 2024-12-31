class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

export class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = new Node(value);
            return;
        }
        let lastNode = this.head;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = newNode;
        return;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.nextNode;
        }
        return count;
    }

    firstNode() {
        return this.head.value;
    }

    tail() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.nextNode) {
                lastNode = lastNode.nextNode;
            }
        }
        return lastNode.value;
    }

    at(index) {
        if (index < 0) {
            return console.log("Insert correct index");
        } else {
            let curr;
            let prev;
            curr = this.head;
            if (index == 0) {
                return this.head.value;
            } else {
                curr = this.head;
                for (let i = 0; i < index; i++) {
                    prev = curr;
                    curr = curr.nextNode;
                }
                return curr.value;
            }
        }
    }

    pop() {
        if (!this.head) {
            return null;
        }
        if (!this.head.value) {
            return null;
        }
        let secondLast = this.head;
        while (secondLast.nextNode.nextNode) {
            secondLast = secondLast.nextNode;
        }
        secondLast.nextNode = null;
        return;
    }

    contains(value) {
        let curr;
        curr = this.head;
        while (curr !== null) {
            if (curr.value == value) {
                return true;
            }
            curr = curr.nextNode;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let lastNode = this.head;
        while (lastNode) {
            if (lastNode.value == value) {
                return index;
            }
            lastNode = lastNode.nextNode;
            index++;
        }
        return -1;
    }

    toString() {
        let lastNode = this.head;
        let str = "";
        while (lastNode) {
            if (!lastNode.nextNode) {
                str += ` (${lastNode.value}) -> null`;
            }
            if (lastNode.nextNode) {
                str += ` (${lastNode.value}) ->`;
            }
            lastNode = lastNode.nextNode;
        }
        return str;
    }

    insertAt(value, index) {
        if (index == null || index < 0 || index > this.size()) {
            return console.log(`Insert correct index`);
        } else {
            let newNode = new Node(value);
            let curr;
            let prev;
            curr = this.head;
            if (index == 0) {
                newNode.nextNode = this.head;
                this.head = newNode;
            } else {
                curr = this.head;
                for (let i = 0; i < index; i++) {
                    prev = curr;
                    curr = curr.nextNode;
                }
                newNode.nextNode = curr;
                prev.nextNode = newNode;
            }
        }
    }

    removeAt(index) {
        if (index < 0) {
            return console.log("Insert correct index");
        } else {
            let curr;
            let prev;
            curr = this.head;
            prev = curr;
            if (index == 0) {
                this.head = curr.nextNode;
            } else {
                for (let i = 0; i < index; i++) {
                    prev = curr;
                    curr = curr.nextNode;
                }
                prev.nextNode = curr.nextNode;
            }
            return console.log(`${curr.value} is removed`);
        }
    }
}
