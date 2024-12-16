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
        if (this.head == null) {
            this.head = new Node(value);
        } else {
            this.head.nextNode = new Node(value);
        }
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
        return this.head;
    }

    tail() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.nextNode) {
                lastNode = lastNode.nextNode;
            }
        }
        return lastNode;
    }

    toString() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.nextNode) {
                return `(${this.head.nextNode}) -> `;
            }
        }
    }
}
