var xValues = ["Magasin", "Salling", "Kop & Kande", "Fakta", "XL Byg"];
var yValues = [100, 120, 30, 10, 50];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
new Chart("barGeneral", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Salgsvaluta"
        }
    }
});