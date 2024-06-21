import React, { useEffect } from 'react'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.min.css"
import bellmanFord from '../Images/Algorithms/BellmanFord.gif'
import dijkstra from '../Images/Algorithms/Dijkstra.gif'
import bubbleSort from '../Images/Algorithms/bubble_sort_animation.gif'
import heapSort from '../Images/Algorithms/heap_sort_animation.gif'
import insertionSort from '../Images/Algorithms/insertion_sort_animation.gif'
import quickSort from '../Images/Algorithms/quicksort_animation.gif'
import selectionSort from '../Images/Algorithms/selection_sort_animation.gif'

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
          <div className="max-w-2xl md:w-2/3 mt-4 md:mt-0 flex flex-col">
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
        code={`
      def BellmanFord(self, src):

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

        <Algorithm 
        name="Dijkstra's"
        description="The idea is to generate a SPT (shortest path tree) with a given source as a root. Maintain an Adjacency Matrix with two sets, 

        one set contains vertices included in the shortest-path tree, 
        other set includes vertices not yet included in the shortest-path tree. 
        At every step of the algorithm, find a vertex that is in the other set (set not yet included) and has a minimum distance from the source.Create a set sptSet (shortest path tree set) that keeps track of vertices included in the shortest path tree, i.e., whose minimum distance from the source is calculated and finalized. Initially, this set is empty. 
        Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign the distance value as 0 for the source vertex so that it is picked first. 
        While sptSet doesn’t include all vertices 
        Pick a vertex u that is not there in sptSet and has a minimum distance value. 
        Include u to sptSet. 
        Then update the distance value of all adjacent vertices of u. 
        To update the distance values, iterate through all adjacent vertices. 
        For every adjacent vertex v, if the sum of the distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v. 
        Note: We use a boolean array sptSet[] to represent the set of vertices included in SPT. If a value sptSet[v] is true, then vertex v is included in SPT, otherwise not. Array dist[] is used to store the shortest distance values of all vertices.
        
        "
        image={dijkstra}
        code={`
        import sys
        
        class Graph():
          # A utility function to find the vertex with
          # minimum distance value, from the set of vertices
          # not yet included in shortest path tree
          def minDistance(self, dist, sptSet):
            # Initialize minimum distance for next node
            min = sys.maxsize
        
            # Search not nearest vertex not in the
            # shortest path tree
            for u in range(self.V):
              if dist[u] < min and sptSet[u] == False:
                min = dist[u]
                min_index = u
        
                return min_index
        
          # Function that implements Dijkstra's single source
          # shortest path algorithm for a graph represented
          # using adjacency matrix representation
          def dijkstra(self, src):
        
            dist = [sys.maxsize] * self.V
            dist[src] = 0
            sptSet = [False] * self.V
        
            for cout in range(self.V):
        
              # Pick the minimum distance vertex from
              # the set of vertices not yet processed.
              # x is always equal to src in first iteration
              x = self.minDistance(dist, sptSet)
        
              # Put the minimum distance vertex in the
              # shortest path tree
              sptSet[x] = True
        
              # Update dist value of the adjacent vertices
              # of the picked vertex only if the current
              # distance is greater than new distance and
              # the vertex in not in the shortest path tree
              for y in range(self.V):
                if self.graph[x][y] > 0 and sptSet[y] == False and dist[y] > dist[x] + self.graph[x][y]:
                  dist[y] = dist[x] + self.graph[x][y]
        
                self.printSolution(dist)
        `}/>

        <Algorithm 
        name="Bubble Sort"
        description="Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the 
        adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets 
        as its average and worst-case time complexity is quite high.In Bubble Sort algorithm, 
        traverse from left and compare adjacent elements and the higher one is placed at right side. 
        In this way, the largest element is moved to the rightmost end at first. 
        This process is then continued to find the second largest and place it and so on until the data is sorted."
        image={bubbleSort}
        code={`
        def bubble_sort(arr):
        frames = []
        n = len(arr)
        step = 0
        for i in range(n):
            for j in range(0, n-i-1):
                if arr[j] > arr[j+1]:
                    arr[j], arr[j+1] = arr[j+1], arr[j]
                frames.append((arr.copy(), step))
                step += 1
        return frames
        `}/>

        <Algorithm 
        name="Insertion Sort"
        description="Insertion Sort Algorithm:
        Insertion sort is a simple sorting algorithm that works by building a sorted array one element at a time. It is considered an “in-place” sorting algorithm, meaning it doesn’t require any additional memory space beyond the original array.
        
        Algorithm:
        
        To achieve insertion sort, follow these steps:
        
        We have to start with second element of the array as first element in the array is assumed to be sorted.
        Compare second element with the first element and check if the second element is smaller then swap them.
        Move to the third element and compare it with the second element, then the first element and swap as necessary to put it in the correct position among the first three elements.
        Continue this process, comparing each element with the ones before it and swapping as needed to place it in the correct position among the sorted elements.
        Repeat until the entire array is sorted."
        image={insertionSort}
        code={`
        def insertion_sort(arr):
        frames = []
        step = 0
        for i in range(1, len(arr)):
            key = arr[i]
            j = i-1
            while j >= 0 and key < arr[j]:
                arr[j + 1] = arr[j]
                j -= 1
                frames.append((arr.copy(), step))
                step += 1
            arr[j + 1] = key
            frames.append((arr.copy(), step))
            step += 1
        return frames
        `}/>

        <Algorithm 
        name="Selection Sort"
        description="Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the
         smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 

        The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and 
        swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion 
        until the entire list is sorted. "
        image={selectionSort}
        code={`
        def selection_sort(arr):
        frames = []
        step = 0
        for i in range(len(arr)):
            min_idx = i
            for j in range(i+1, len(arr)):
                if arr[min_idx] > arr[j]:
                    min_idx = j
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
            frames.append((arr.copy(), step))
            step += 1
        return frames
        `}/>

        <Algorithm 
        name="Heap Sort"
        description="Heap sort is a comparison-based sorting technique based on Binary Heap data structure. 
        It is similar to the selection sort where we first find the minimum element and place the minimum 
        element at the beginning. Repeat the same process for the remaining elements.
        First convert the array into heap data structure using heapify, then one by one delete the 
        root node of the Max-heap and replace it with the last node in the heap and then heapify the root of the heap.
           Repeat this process until size of heap is greater than 1.

        Build a heap from the given input array.
        Repeat the following steps until the heap contains only one element:
        Swap the root element of the heap (which is the largest element) with the last element of the heap.
        Remove the last element of the heap (which is now in the correct position).
        Heapify the remaining elements of the heap.
        The sorted array is obtained by reversing the order of the elements in the input array.
        "
        image={heapSort}
        code={`
        def heap_sort(arr):
        frames = []
        n = len(arr)
        step = 0
    
        def heapify(arr, n, i):
            nonlocal step
            largest = i
            l = 2 * i + 1
            r = 2 * i + 2
    
            if l < n and arr[i] < arr[l]:
                largest = l
    
            if r < n and arr[largest] < arr[r]:
                largest = r
    
            if largest != i:
                arr[i], arr[largest] = arr[largest], arr[i]
                frames.append((arr.copy(), step))
                step += 1
                heapify(arr, n, largest)
    
        for i in range(n // 2 - 1, -1, -1):
            heapify(arr, n, i)
    
        for i in range(n-1, 0, -1):
            arr[i], arr[0] = arr[0], arr[i]
            frames.append((arr.copy(), step))
            step += 1
            heapify(arr, i, 0)
    
        return frames
        `}/>

        <Algorithm 
        name="Quick Sort"
        description="QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that 
        picks an element as a pivot and partitions the given array around the picked pivot by placing
        the pivot in its correct position in the sorted array.
        The key process in quickSort is a partition(). The target of partitions is to place the pivot 
        (any element can be chosen to be a pivot) at its correct position in the sorted array and put 
        all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.

        Partition is done recursively on each side of the pivot after the pivot is placed in its correct position
        and this finally sorts the array."
        image={quickSort}
        code={`
        def quicksort(arr):
        frames = []
        step = 0
        def _quicksort(arr, low, high):
            nonlocal step
            if low < high:
                pi = partition(arr, low, high)
                _quicksort(arr, low, pi-1)
                _quicksort(arr, pi+1, high)
    
        def partition(arr, low, high):
            nonlocal step
            pivot = arr[high]
            i = low - 1
            for j in range(low, high):
                if arr[j] <= pivot:
                    i = i + 1
                    arr[i], arr[j] = arr[j], arr[i]
                    frames.append((arr.copy(), step))
                    step += 1
            arr[i+1], arr[high] = arr[high], arr[i+1]
            frames.append((arr.copy(), step))
            step += 1
            return i + 1
    
        _quicksort(arr, 0, len(arr) - 1)
        return frames
        `}/>
    </div>
    </div>
  )
}

export default Algorithms
