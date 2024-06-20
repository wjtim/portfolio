import React, { useEffect } from 'react'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.min.css"
import bellmanFord from '../Images/Algorithms/BellmanFord.gif'

require("prismjs/components/prism-python");
require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace");

const Algorithm = ({ name, description, image, code}) => {
    return (
        <div className="container mx-auto p-4 border rounded-lg w-full transform transition-transform duration-300 hover:translate-y-[-5px]">
        <div className="flex flex-col md:flex-row items-start md:space-x-4">
          <div className="mt-4 text-center">
            <p className='text-2xl font-mono my-2'>{name}</p>
            <p className='font-mono my-2'>{description}</p>
              <img src={image} alt="Sorting Algorithm GIF" className="rounded shadow-md" />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 flex flex-col">
            <pre className="flex-grow rounded shadow-md">
              <code className="language-python">{code}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  };

const Algorithms = () => {
    useEffect(() => {
        Prism.highlightAll();
      });
  return (
    <div>
    <div className="text-2xl font-mono pr-1 my-5 mx-3"> {"> Animated Algorithms:"} </div>
    <div className='my-5 mx-3'>
        <Algorithm 
        name="Bellman-Ford" 
        description="The Bellman-Ford algorithm’s primary principle is that it starts with a single source and calculates the 
        distance to each node. The distance is initially unknown and assumed to be infinite, but as time goes on, the algorithm 
        relaxes those paths by identifying a few shorter paths. Hence it is said that Bellman-Ford is based on 
        “Principle of Relaxation“.
        Initialize distance array dist[] for each vertex ‘v‘ as dist[v] = INFINITY.
        Assume any vertex (let’s say ‘0’) as source and assign dist = 0.
        Relax all the edges(u,v,weight) N-1 times as per the below condition:
        dist[v] = minimum(dist[v], distance[u] + weight)
        Now, Relax all the edges one more time i.e. the Nth time and based on the below two cases we can detect the negative cycle:
        Case 1 (Negative cycle exists): For any edge(u, v, weight), if dist[u] + weight < dist[v]
        Case 2 (No Negative cycle) : case 1 fails for all the edges."
        image={bellmanFord}
        code={`def BellmanFord(self, src):

        # Step 1: Initialize distances from src to all other vertices
        # as INFINITE
        dist = [float("Inf")] * self.V
        dist[src] = 0

        # Step 2: Relax all edges |V| - 1 times. A simple shortest
        # path from src to any other vertex can have at-most |V| - 1
        # edges
        for _ in range(self.V - 1):
            # Update dist value and parent index of the adjacent vertices of
            # the picked vertex. Consider only those vertices which are still in
            # queue
            for u, v, w in self.graph:
                if dist[u] != float("Inf") and dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w

        # Step 3: check for negative-weight cycles. The above step
        # guarantees shortest distances if graph doesn't contain
        # negative weight cycle. If we get a shorter path, then there
        # is a cycle.

        for u, v, w in self.graph:
            if dist[u] != float("Inf") and dist[u] + w < dist[v]:
                print("Graph contains negative weight cycle")
                return

        # print all distance
        self.printArr(dist)`}
        />
    </div>
    </div>
  )
}

export default Algorithms
