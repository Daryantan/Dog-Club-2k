google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
 var data = google.visualization.arrayToDataTable([
  ['Послуги кінолога', 'Kількість запросів на місяць'],
  ['Послуги кінолога',     35],
  ['Послуги грумера', 26],
  ['Послуги заводчика',    29],
  ['Послуги хендлера', 10]
 ]);
 var options = {
  title: 'Kількість запросів на місяць',
  is3D: true,
  pieResidueSliceLabel: 'Інше'
 };
 var chart = new google.visualization.PieChart(document.getElementById('air'));
  chart.draw(data, options);
}