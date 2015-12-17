(() => {
  let canvasDoughnut = document.getElementById('chart-first');
  let ctxDoughnut = canvasDoughnut.getContext('2d');
  canvasDoughnut.width = 120;
  canvasDoughnut.height = 120;

  let canvasLine = document.getElementById('chart-second');
  let ctxLine = canvasLine.getContext('2d');

  // Chart.defaults.global.showTooltips = false;
  Chart.defaults.global.showScale = false;
  
  let dataDoughnut = [{
    value: 300,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Views",
    // sublabel: "802 023 352"
  }, {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Favorites"
  }, {
    value: 100,
    color: "#EFF006",
    highlight: "#FFC870",
    label: "Followers"
  }];

  let optionsDoughnut = {
    segmentShowStroke: false,
    percentageInnerCutout: 65,
    animationSteps: 100,
  }

  let dataLine = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "#F7464A",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }, {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "#46BFBD",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }, {
      label: "My Third dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "#EFF006",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [80, 52, 70, 30, 60, 50, 60]
    }]
  };
  let optionsLine = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,

    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth: 1,

    //Boolean - Whether the line is curved between points
    bezierCurve: true,

    //Boolean - Whether to show a dot for each point
    pointDot: false,

    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill: false,

  };;


  new Chart(ctxDoughnut).Doughnut(dataDoughnut, optionsDoughnut);
  new Chart(ctxLine).Line(dataLine, optionsLine);

})();
