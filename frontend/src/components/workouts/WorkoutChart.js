import React, { Component } from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'
import { values } from 'lodash'
import { createSelector } from 'reselect'
import { getWorkoutsSchema } from '../../reducers/index'

class WorkoutChart extends Component {
  constructor(props){
    super(props)
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

    let t = d3.transition().duration(750);

    let g = d3.select(node)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left +
        ", " + margin.top + ")");

    let x = d3.scaleBand()
      .range([0, width])
      .paddingInner(0.3)
      .paddingOuter(0.3)

    let y = d3.scaleLinear()
      .range([height, 0]);

    let xAxisGroup = g.append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0, " + height + ")");

    let yAxisGroup = g.append("g")
      .attr("class", "y-axis");

// X Label
    g.append("text")
      .attr("class", "x-axis-label")
      .attr("x", width / 2)
      .attr("y", height + 80)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("Duration");

// Y Label
    let yLabel = g.append("text")
      .attr("class", "y-axis-label")
      .attr("x", - (height / 2))
      .attr("y", -80)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Calories");

    const update = (data) => {
      data.sort((x, y) => (
        d3.ascending(parseInt(x.duration), parseInt(y.duration))
        ))
      x.domain(data.map(d => parseInt(d.duration)));
      y.domain([0, d3.max(data, (d => parseInt(d.totalEnergyBurned)))]);

      let xAxisCall = d3.axisBottom(x)
        .tickValues(data.map(d => parseInt(d.duration)))
        .tickFormat(d => d);
      xAxisGroup.transition(t).call(xAxisCall);

      let yAxisCall = d3.axisLeft(y)
        .tickFormat(d => d);
      yAxisGroup.transition(t).call(yAxisCall);

      // JOIN new data with old elements.
      let circles = g.selectAll("circle")
        .data(data, (d => parseInt(d.totalEnergyBurned)));

      // EXIT old elements not present in new data.
      circles.exit()
        .attr("fill", "red")
        .transition(t)
        .attr("cy", y(0))
        .remove();

      // ENTER new elements present in new data.
      circles.enter()
        .append("circle")
        .attr("cx", (d => x(parseInt(d.duration)) + x.bandwidth() /2))
        .attr("fill", "red")
        .attr("cy", y(0))
        .attr("r", 2)
        // AND UPDATE old elements present in new data.
        .merge(circles)
        .transition(t)
        .attr("cy", (d => y(parseInt(d.totalEnergyBurned))))
        .attr("cx", (d => x(parseInt(d.duration))  + x.bandwidth() /2))
    }
      update(this.props.workouts)

  }
  render() {
    return (
      <svg ref={node => this.node = node} width={500} height={500} />
    )
  }
}

const getWorkoutsFromSchema = createSelector(
  getWorkoutsSchema,
  workouts => !workouts ? [] : values(workouts)
)

const mapStateToProps = (state) => ({
  workouts: getWorkoutsFromSchema(state)
})
const mapDispatchToProps = (dispatch) => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutChart);
