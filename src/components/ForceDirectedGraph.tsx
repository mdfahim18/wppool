'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: Node | number;
  target: Node | number;
}

const ForceDirectedGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const width = 960;
    const height = 600;

    const nodes: Node[] = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
      { id: 19 },
      { id: 20 },
    ];

    const links: Link[] = [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
      { source: 5, target: 6 },
      { source: 6, target: 7 },
      { source: 7, target: 8 },
      { source: 8, target: 9 },
      { source: 9, target: 10 },
      { source: 1, target: 6 },
      { source: 4, target: 9 },
      { source: 3, target: 7 },
      { source: 7, target: 13 },
      { source: 6, target: 11 },
      { source: 12, target: 13 },
      { source: 12, target: 10 },
      { source: 2, target: 15 },
      { source: 12, target: 15 },
      { source: 5, target: 14 },
      { source: 7, target: 13 },
      { source: 11, target: 14 },
      { source: 7, target: 16 },
      { source: 4, target: 14 },
      { source: 9, target: 17 },
      { source: 4, target: 8 },
      { source: 1, target: 18 },
      { source: 6, target: 19 },
      { source: 8, target: 20 },
      { source: 1, target: 10 },

      { source: 15, target: 18 },
      { source: 14, target: 17 },
      { source: 3, target: 10 },
      { source: 8, target: 11 },
      { source: 13, target: 15 },
      { source: 3, target: 17 },
      { source: 16, target: 19 },
      { source: 13, target: 16 },
      { source: 11, target: 19 },
      { source: 19, target: 7 },
      { source: 3, target: 9 },
      { source: 8, target: 14 },
      { source: 1, target: 20 },
      { source: 1, target: 13 },
      { source: 1, target: 7 },
      { source: 3, target: 20 },
      { source: 6, target: 20 },
      { source: 2, target: 3 },
      { source: 1, target: 16 },
      { source: 1, target: 3 },
      { source: 19, target: 13 },
      { source: 1, target: 15 },
      { source: 3, target: 8 },
      { source: 11, target: 20 },
      { source: 15, target: 20 },
      { source: 14, target: 20 },
      { source: 9, target: 20 },
      { source: 19, target: 20 },
      { source: 1, target: 17 },
    ];

    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const simulation = d3
      .forceSimulation<Node>(nodes)
      .force(
        'link',
        d3
          .forceLink<Node, Link>(links)
          .id((d) => d.id)
          .distance(100)
      )
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('stroke', 'black')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke-width', 1.5);

    const node = svg
      .append('g')
      .attr('stroke', 'black')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('fill', 'black')
      .call(drag(simulation));

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => (d.source as Node).x!)
        .attr('y1', (d) => (d.source as Node).y!)
        .attr('x2', (d) => (d.target as Node).x!)
        .attr('y2', (d) => (d.target as Node).y!);

      node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!);
    });

    function drag(simulation: d3.Simulation<Node, undefined>) {
      return d3
        .drag<SVGCircleElement, Node>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        });
    }
  }, []);

  return <svg ref={svgRef} className='w-full h-full'></svg>;
};

export default ForceDirectedGraph;
