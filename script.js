let aside = document.querySelector('aside');
let navLink = document.querySelectorAll('aside .main-menu a');
let toggleAside = document.querySelector('.toggle-aside');

toggleAside.addEventListener('click', () => {
  aside.classList.toggle('close');
  toggleAside.classList.toggle('close');

  navLink.forEach((link) => {
    link.classList.remove('active');
  });
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    aside.classList.remove('close');
    toggleAside.classList.remove('close');
    link.classList.toggle('active');
  });
});

// if (window.innerWidth <= 1080) {
//   aside.classList.add('close');
// }

// window.addEventListener('resize', () => {
//   if (window.innerWidth <= 1080) {
//     aside.classList.add('close');
//   }
// });

// CHART
window.onload = function () {
  const chart1 = new CanvasJS.Chart('chart1', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Top 10 Receivable',
    },
    axisY: {
      gridDashType: 'dash',
    },
    data: [
      {
        type: 'column',
        color: '#FCAA67',
        dataPoints: [
          { y: 11000000, label: 'UMUM' },
          { y: 7500000, label: 'TRIBAKTI' },
          { y: 6000000, label: 'BPJS' },
          { y: 5000000, label: 'TRIBUANA' },
          { y: 1000000, label: 'EKA CAHAYA' },
          { y: 400000, label: 'RIAU INDUSTRI' },
        ],
      },
    ],
  });
  chart1.render();

  const chart2 = new CanvasJS.Chart('chart2', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Top 10 Payable',
    },
    axisY: {
      gridDashType: 'dash',
    },
    data: [
      {
        type: 'column',
        color: '#2374AB',
        dataPoints: [
          { y: 100000000, label: 'Atika D' },
          { y: 15000000, label: 'FENI PR' },
          { y: 8000000, label: 'KIMIA FARMA' },
          { y: 0, label: 'BAGUSSS' },
          { y: 0, label: 'BINTI FI' },
        ],
      },
    ],
  });
  chart2.render();

  var chart3 = new CanvasJS.Chart('chart3', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Sales',
    },
    data: [
      {
        type: 'pie',
        startAngle: 240,
        yValueFormatString: '##0.00"%"',
        indexLabel: '{label} {y}',
        dataPoints: [
          { y: 70, label: 'General', color: '#47A8BD' },
          { y: 10, label: 'Other', color: '#FCAA67' },
          { y: 20, label: 'Another One', color: '#286199' },
        ],
      },
    ],
  });
  chart3.render();

  var chart4 = new CanvasJS.Chart('chart4', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Balance Sheet 2024',
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
    },
    axisY: {
      title: 'Value',
      gridDashType: 'dash',
    },
    axisY2: {
      title: '%',
      titleFontColor: '#019B73',
      lineColor: '#019B73',
      tickColor: '#019B73',
      labelFontColor: '#019B73',
    },
    data: [
      {
        type: 'column',
        name: 'Asset',
        showInLegend: true,
        legendMarkerColor: '#9D75CB',
        dataPoints: [
          { label: 'Jan', y: 230000000, color: '#9D75CB' },
          { label: 'Feb', y: 230000000, color: '#9D75CB' },
          { label: 'Mar', y: 500000000, color: '#9D75CB' },
        ],
      },
      {
        type: 'column',
        name: 'Liabilities',
        showInLegend: true,
        legendMarkerColor: '#FF9F1C',
        dataPoints: [
          { label: 'Jan', y: 80000000, color: '#FF9F1C' },
          { label: 'Feb', y: 80000000, color: '#FF9F1C' },
          { label: 'Mar', y: 100000000, color: '#FF9F1C' },
        ],
      },
      {
        type: 'spline',
        name: 'Debt Equity Ratio',
        axisYType: 'secondary',
        showInLegend: true,
        legendMarkerColor: '#06D6A0',
        lineColor: '#06D6A0',
        dataPoints: [
          { label: 'Jan', y: 25, color: '#06D6A0' },
          { label: 'Feb', y: 25, color: '#06D6A0' },
          { label: 'Mar', y: 15, color: '#06D6A0' },
        ],
      },
    ],
  });
  chart4.render();

  var chart5 = new CanvasJS.Chart('chart5', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Income Statement 2024',
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
    },
    axisY: {
      title: 'Value',
      gridDashType: 'dash',
    },
    axisY2: {
      title: '%',
      titleFontColor: '#019B73',
      lineColor: '#019B73',
      tickColor: '#019B73',
      labelFontColor: '#019B73',
    },
    data: [
      {
        type: 'column',
        name: 'Revenue',
        showInLegend: true,
        legendMarkerColor: '#9D75CB',
        dataPoints: [
          { label: 'Jan', y: 0, color: '#9D75CB' },
          { label: 'Feb', y: 0, color: '#9D75CB' },
          { label: 'Mar', y: 200000000, color: '#9D75CB' },
        ],
      },
      {
        type: 'column',
        name: 'Net Income',
        showInLegend: true,
        legendMarkerColor: '#FF9F1C',
        dataPoints: [
          { label: 'Jan', y: 0, color: '#FF9F1C' },
          { label: 'Feb', y: 0, color: '#FF9F1C' },
          { label: 'Mar', y: 200000000, color: '#FF9F1C' },
        ],
      },
      {
        type: 'spline',
        name: 'Margin',
        axisYType: 'secondary',
        showInLegend: true,
        legendMarkerColor: '#06D6A0',
        lineColor: '#06D6A0',
        dataPoints: [
          { label: 'Jan', y: 100, color: '#06D6A0' },
          { label: 'Feb', y: 0, color: '#06D6A0' },
          { label: 'Mar', y: 100, color: '#06D6A0' },
        ],
      },
    ],
  });
  chart5.render();

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
};
