import React, { Component } from "react";
import { connect } from "react-redux";
import ReactApexChart from "react-apexcharts";

import generateChart from "../../actions";
import generator from "../../generator";

class Board extends Component {
  data = generator();

  componentDidMount = () => {
    this.props.generateChart(this.data);
  };

  generateChart = () => {
    let data = generator();
    this.props.generateChart(data);
  };

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.props.options}
          series={this.props.series}
          type="candlestick"
          height={350}
        />
        <button onClick={this.generateChart}>GENERATE NEW CHART</button>
      </div>
    );
  }
}

const mapStateToProps = ({ series, options }) => {
  return {
    series,
    options,
  };
};

const mapDispatchToProps = {
  generateChart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
