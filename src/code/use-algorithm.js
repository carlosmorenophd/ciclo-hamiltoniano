const useAlgorithm = () => {
  const hamiltonianCycle = (graph) => {
    const result = hamiltonianCycleImplementation({ graph });
    return result;
  };

  const hamiltonianCycleImplementation = ({ graph }) => {
    const numVertices = graph.length;
    const path = [];

    function isValidVertex(v, pos, path) {
      //Search if the new vertex can add to path
      if (!graph[path[pos - 1]][v]) {
        return false;
      }
      //Check if the vertex had already been added to the path
      for (let i = 0; i < pos; i++) {
        if (path[i] === v) {
          return false;
        }
      }
      return true;
    }

    function hamiltonianCycleUtil(path, pos) {
      //Validate if is the last vertex and if it has a path to source vertex
      if (pos === numVertices) {
        if (graph[path[pos - 1]][path[0]]) {
          return true;
        }
        return false;
      }
      //Search for all possible paths
      for (let v = 1; v < numVertices; v++) {
        if (isValidVertex(v, pos, path)) {
          path[pos] = v;
          if (hamiltonianCycleUtil(path, pos + 1)) {
            return true;
          }
          //Backtracking if do not find a correct solution on this path
          path[pos] = -1;
        }
      }
      //if not exist path return false
      return false;
    }
    path[0] = 0;
    if (!hamiltonianCycleUtil(path, 1)) {
      return { success: false, path: [] };
    }
    return { success: true, path };
  };

  return {
    hamiltonianCycle,
  };
};

export { useAlgorithm };
