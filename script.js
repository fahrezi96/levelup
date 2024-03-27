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

// CHART
window.onload = function () {
  const chart1 = new CanvasJS.Chart('chart1', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Top 10 Receivable',
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
};
