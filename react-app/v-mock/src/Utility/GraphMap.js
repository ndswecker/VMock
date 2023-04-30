export default class GraphMap {
    graph;

    constructor() {
        this.graph = new Map();
    }

    addNode(node) {
        this.graph.set(node, []);
    }

    addNodes(array) {
        array.forEach(element => {
            this.addNode(element);
        });
    }

    addEdge(origin, destination) {
        this.graph.get(origin).push(destination);
        this.graph.get(destination).push(origin);
    }

    addEdges(array) {
        array.forEach(route => {
            this.addEdge(...route);
        })
    }

    mapToObject(map) {
        const object = {};
        for (let [key, value] of map) {
            object[key] = value;
        }
        return object;
    }

    objectToStringState(object) {
        return JSON.stringify(object, null, 2);
    }

    toString() {
        return this.objectToStringState(this.mapToObject(this.graph));
    }
}