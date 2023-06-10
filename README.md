# Ciclo Hamiltoniano. (Español)

## Introducción

Un ciclo hamiltoniano es un recorrido en un grafo que visita cada vértice exactamente una vez, regresando al vértice inicial. Es decir, es un ciclo que pasa por todos los vértices del grafo sin repetir ninguno.


## Cómo saber si una gráfica puede tener un ciclo Hamiltoniano?

Condiciones necesarias:
a. El grafo debe ser no dirigido, es decir, no debe haber una dirección específica en las aristas.
b. El grafo debe ser conexo, lo que significa que hay una ruta entre cualquier par de vértices.


Condiciones suficientes:
a. En un grafo con $n$ vértices, donde $n$ es mayor o igual a 3, si el grado de cada vértice es al menos $n/2$ (es decir, cada vértice está conectado a al menos la mitad de los demás vértices), entonces se puede afirmar que existe un ciclo Hamiltoniano. Esto se conoce como el Teorema de Dirac.
b. En un grafo con n vértices, donde n es mayor o igual a 3, si para cada par de vértices no adyacentes (es decir, no conectados por una arista), la suma de sus grados es mayor o igual a n, entonces se puede afirmar que existe un ciclo Hamiltoniano. Esto se conoce como el Teorema de Ore.

Cabe destacar que estas condiciones son necesarias o suficientes, lo que significa que pueden haber grafos que no cumplan estas condiciones y aún así tengan o no tengan un ciclo Hamiltoniano. Además, determinar la existencia de un ciclo Hamiltoniano en un grafo general es un problema NP-completo, por lo que no existe un algoritmo eficiente conocido para resolverlo en todos los casos.


## Ejecución

![Multistage](asserts/hamiltoniano.png)


## Acerca del autor 
Estuandite de Doctorado: Juan Carlos Moreno Sanchez

<carlos.moreno.phd@gmail.com>

<jcmorenos001@alumno.uaemex.mx>

# Program to calculate the shortest path and the minimum cost of traveler problem (TSP) using dynamic programming and branch and bound. (English)

## Introduction

A Hamiltonian cycle is a traversal in a graph that visits each vertex exactly once, returning to the starting vertex. That is, it is a cycle that passes through all the vertices of the graph without repeating any.

## How to know if a graph can have a Hamiltonian cycle

Necessary conditions:
a. The graph must be undirected, that is, there must not be a specific direction on the edges.
b. The graph must be connected, which means that there is a path between any pair of vertices.


Sufficient conditions:
a. In a graph with $n$ vertices, where $n$ is greater than or equal to 3, if the degree of each vertex is at least $n/2$ (that is, each vertex is connected to at least half of the other vertices), then it can be affirmed that there is a Hamiltonian cycle. This is known as Dirac's Theorem.
b. In a graph with n vertices, where n is greater than or equal to 3, if for each pair of non-adjacent vertices (that is, not connected by an edge), the sum of their degrees is greater than or equal to n, then it can be stated that there is a Hamiltonian cycle. This is known as Ore's Theorem.

It should be noted that these conditions are either necessary or sufficient, which means that there may be graphs that do not meet these conditions and still have or do not have a Hamiltonian cycle. Furthermore, determining the existence of a Hamiltonian cycle in a general graph is an NP-complete problem, so there is no known efficient algorithm to solve it in all cases.


## Ejecución

![Multistage](asserts/hamiltoniano.png)

## About the author
Student of PhD: Juan Carlos Moreno Sanchez

<carlos.moreno.phd@gmail.com>

<jcmorenos001@alumno.uaemex.mx>