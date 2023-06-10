const useAlgorithm = () => {
  const hamiltonianCycle = (graph) => {
    const result = hamiltonianCycleImplementation({ graph });
    return result;
  };

  const hamiltonianCycleImplementation = ({ graph }) => {
    const numVertices = graph.length;
    const path = [];
  
    function isValidVertex(v, pos, path) {
      // Verifica si el vértice v se puede agregar al camino
      // Comprueba si ya se ha visitado y si está conectado al último vértice en el camino
      if (!graph[path[pos - 1]][v]) {
        return false;
      }
  
      // Verifica si el vértice ya está en el camino
      for (let i = 0; i < pos; i++) {
        if (path[i] === v) {
          return false;
        }
      }
  
      return true;
    }
  
    function hamiltonianCycleUtil(path, pos) {
      // Si se han visitado todos los vértices y el último vértice está conectado al primer vértice
      if (pos === numVertices) {
        if (graph[path[pos - 1]][path[0]]) {
          return true;
        }
        return false;
      }
  
      // Prueba diferentes vértices como siguiente candidato en el camino
      for (let v = 1; v < numVertices; v++) {
        if (isValidVertex(v, pos, path)) {
          path[pos] = v;
  
          // Llamada recursiva para construir el camino restante
          if (hamiltonianCycleUtil(path, pos + 1)) {
            return true;
          }
  
          // Si agregar el vértice v no conduce a una solución, quítalo del camino
          path[pos] = -1;
        }
      }
  
      return false;
    }
  
    // Inicializar el camino con el primer vértice
    path[0] = 0;
  
    if (!hamiltonianCycleUtil(path, 1)) {
      console.log("No hay ciclo Hamiltoniano en el grafo.");
      return [];
    }
  
    console.log("Ciclo Hamiltoniano encontrado:");
    console.log(path);
    return path;
  }


  return {
    hamiltonianCycle
  };
};

export { useAlgorithm };
