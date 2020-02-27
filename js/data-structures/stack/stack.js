const Stack = function() {
    this.top = null;
    this.size = 0;
};

const Node = function(data) {
    this.data = data;
    this.previous = null;
}

Stack.prototype.push = function(data) {
    const newNode = newNode(data);
    newNode.previous = this.node;

    this.top = newNode;
    this.size = this.size + 1;

    return newNode;
}

Stack.prototype.pop = function() {
    const nodeToPop = this.top;
    this.top = nodeToPop.previous;
    this.size = this.size - 1;

    return currentNode;
}

// Test
