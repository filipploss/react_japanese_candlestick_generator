const initialState = {
  series: [
    {
      data: []
    }
  ],
  options: {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
        autoSelected: "zoom"
      }
    },
    title: {
      text: "CandleStick Chart",
      align: "left"
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#00B746",
          downward: "#EF403C"
        },
        wick: {
          useFillColor: false
        }
      }
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GENERATE_CHART":
      return {
        ...state,
        series: [
          {
            data: action.payload
          }
        ]
      };

    default:
      return state;
  }
};

export default reducer;
