'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export interface DataPoint {
  date: Date;
  value: number;
}

const generateRandomData = (
  startDate: string,
  numDays: number,
  numLines: number
): DataPoint[][] => {
  const data: DataPoint[][] = [];
  const start = new Date(startDate);

  for (let i = 0; i < numLines; i++) {
    const lineData: DataPoint[] = [];
    for (let j = 0; j < numDays; j++) {
      const date = new Date(start);
      date.setDate(start.getDate() + j);
      const value = Math.floor(Math.random() * 10) + 1;
      lineData.push({ date, value });
    }
    data.push(lineData);
  }

  return data;
};

const BollingerBandsChart: React.FC = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const [dataPoints, setDataPoints] = useState<DataPoint[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = generateRandomData('2023-01-01', 10, 6);
      setDataPoints(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!chartRef.current || dataPoints.length === 0) return;

    const margin = { top: 20, right: 150, bottom: 30, left: 50 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.date)!)
      .y((d) => y(d.value));

    x.domain(d3.extent(dataPoints[0], (d) => d.date) as [Date, Date]);
    y.domain([0, 10]);

    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    const lineNames = [
      'Site A',
      'Site B',
      'Site C',
      'Site D',
      'Site E',
      'Site F',
    ];

    dataPoints.forEach((lineData, i) => {
      svg
        .append('path')
        .datum(lineData)
        .attr('class', 'line')
        .attr('d', line as any)
        .style('stroke', colors(`${i}`) as string)
        .style('fill', 'none');

      svg
        .append('text')
        .datum(lineData[lineData.length - 1])
        .attr('transform', (d) => `translate(${x(d.date)},${y(d.value)})`)
        .attr('x', 5)
        .attr('dy', '.35em')
        .style('fill', colors(`${i}`) as string)
        .text(lineNames[i]);
    });

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));
  }, [dataPoints]);

  return (
    <svg
      ref={chartRef}
      className=' bg-white h-[90vh] hidden sm:flex sm:w-[80%] mx-auto padding-x padding-y'
    ></svg>
  );
};

export default BollingerBandsChart;
