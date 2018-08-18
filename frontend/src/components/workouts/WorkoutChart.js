import React, { Component } from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'
import { values } from 'lodash'
import { createSelector } from 'reselect'
import { getWorkoutsSchema } from '../../reducers/index'

export default class WorkoutChart extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.createBarChart = this.createBarChart.bind(this)
  }
  componentDidMount() {
    this.createBarChart()
  }
  componentDidUpdate() {
    this.createBarChart()
  }
  createBarChart() {
    const node = this.node

    let margin = { top: 10, right: 10, left: 50, bottom: 50 };

    let width = 1000 - margin.left - margin.right;
    let height = 600 - margin.top - margin.bottom;

    let g = d3.select(node)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left +
        ", " + margin.top + ")")

    let x = d3.scaleTime().range([0, width]);
    let y = d3.scaleLinear().range([height, 0]);


    let bisectDate = d3.bisector(d => d.creationDate).left;
    let parseTime = d3.timeParse("%m - %d - %y");

    // Axis generators
    let xAxisCall = d3.axisBottom()
    let yAxisCall = d3.axisLeft()
      // .ticks(6)
      // .tickFormat(function(d) { return parseInt(d / 1000) + "k"; });

    // Axis groups
    let xAxis = g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")");
    let yAxis = g.append("g")
      .attr("class", "y axis")

    // Y-Axis label
    yAxis.append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .attr("fill", "#5D6971")
      .text("Calories")

    // Line path generator
    let line = d3.line()
      .x(d => x(d.creationDate))
      .y(d => y(d.totalEnergyBurned))

    const update = (data) => {
      data.forEach(function(d) {
        d.creationDate = new Date(d.creationDate)
        d.totalEnergyBurned = +d.totalEnergyBurned
      });
      console.log({data})
      x.domain(d3.extent(data, d => d.creationDate))
      y.domain([d3.min(data, d => d.totalEnergyBurned) / 1.005,
        d3.max(data, d => d.totalEnergyBurned) * 1.005])

      // Generate axes once scales have been set
      xAxis.call(xAxisCall.scale(x))
      yAxis.call(yAxisCall.scale(y))

      // Add line to chart
      g.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "grey")
        .attr("stroke-with", "3px")
        .attr("d", line(data))

      /******************************** Tooltip Code ********************************/

      let focus = g.append("g")
        .attr("class", "focus")
        .style("display", "none");

      focus.append("line")
        .attr("class", "x-hover-line hover-line")
        .attr("y1", 0)
        .attr("y2", height);

      focus.append("line")
        .attr("class", "y-hover-line hover-line")
        .attr("x1", 0)
        .attr("x2", width);

      focus.append("circle")
        .attr("r", 7.5);

      focus.append("text")
        .attr("x", 15)
        .attr("dy", ".31em");

      g.append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function() { focus.style("display", null); })
        .on("mouseout", function() { focus.style("display", "none"); })
        .on("mousemove", mousemove);

      function mousemove() {
        let x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.creationDate > d1.creationDate - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.creationDate) + "," + y(d.totalEnergyBurned) + ")");
        // focus.select("text").text(d.creationDate);
        focus.select("text").text(d.totalEnergyBurned);
        focus.select(".x-hover-line").attr("y2", height - y(d.totalEnergyBurned));
        focus.select(".y-hover-line").attr("x2", -x(d.creationDate));
      }


      /******************************** Tooltip Code ********************************/
    }
      update(this.props.workouts)

  }
  render() {
    return (
      <svg ref={node => this.node = node} width={500} height={500} />
    )
  }
}

