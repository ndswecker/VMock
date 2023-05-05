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

    /**
     * function to add a single edge from orgin to destination to graph
     * @param {String} origin 
     * @param {String} destination 
     */
    addEdge(origin, destination) {
        this.graph.get(origin).push(destination);
        this.graph.get(destination).push(origin);
    }

    /**
     * function to add an array of key value pairs to graph
     * @param {Array} array 
     */
    addEdges(array) {
        array.forEach(route => {
            this.addEdge(...route);
        });
    }

    isThereRoute(start, end) {
        console.log(`Starting bfs Start ${start} to End ${end}`);
        const visited = new Set();
        const queue = [start];
        let link = [start];

        while (queue.length > 0) {
            const node = queue.shift();
            const nextPoints = this.graph.get(node);

            for (const next of nextPoints) {
                // console.log(`nextPoints => ${nextPoints}`);
                if (next === end) {
                    console.log(`Route Found from ${start} to ${end}`);
                    return true;
                }
                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push(next);
                }
            }
        }
    }

    findRoute(start, end) {
        this.dfs(start, end);
    }

    dfs(start, end, visted = new Set(), ) {
        // console.log(start);
        visted.add(start);

        const nextPoints = this.graph.get(start);
        for (const next of nextPoints) {
            if (next === end) {
                visted.add(next);
                // console.log(visted);
                return visted;
            }
            if (!visted.has(next)) {
                this.dfs(next, end, visted);
            }
        }
    }


    // HELPER METHODS 

    /**
     * function to translate a map to an object
     * @param {map} map 
     * @returns {Object}
     */
    mapToObject(map) {
        const object = {};
        for (let [key, value] of map) {
            object[key] = value;
        }
        return object;
    }

    /**
     * function to translate Object to String
     * @param {Object} object 
     * @returns 
     */
    objectToStringState(object) {
        return JSON.stringify(object, null, 2);
    }

    toString() {
        return this.objectToStringState(this.mapToObject(this.graph));
    }
}