var xValues = ["Magasin", "Salling", "Kop & Kande", "Fakta", "XL Byg"];
var yValues = [100, 120, 30, 10, 50];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];
new Chart("pieGeneral", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Antal plakater solgt"
        }
    }
});