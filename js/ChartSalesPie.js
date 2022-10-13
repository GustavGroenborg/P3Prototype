let select = document.querySelector("#salesman");
select.addEventListener("change", (event) => {
    let salesman = event.target.value;
    displayGraph(salesman);
});
function displayGraph(salesman) {
    let saleData = [];
    saleData["Anders Davidsen"] = {
        customers: ["Magasin", "Salling", "Kop & Kande", "Fakta", "XL Byg"],
        sales: [123, 120, 30, 103, 50],
        colors: ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"]
    };
    saleData["Henriette Lauritsen"] = {
        customers: ["Netto", "Føtex", "Imerco"],
        sales: [42, 300, 175],
        colors: ["#b91d47", "#00aba9", "#2b5797"]
    };
    saleData["Johanne Sørensen"] = {
        customers: ["Bahne", "Coolshop"],
        sales: [120, 553],
        colors: ["#b91d47", "#00aba9"]
    };
    saleData["Louise Frederiksen"] = {
        customers: ["Bog & Ide", "Kvickly", "Bilka"],
        sales: [200, 142, 165],
        colors: ["#b91d47", "#00aba9", "#2b5797"]
    };
    let overview = document.querySelector("#overview");
    let saleHeadline = document.querySelector("#saleHeadline");
    let chart = document.querySelector("#salesmanChart");
    saleHeadline.textContent = `Salgsoversigt for ${salesman}`;
    new Chart("salesmanChart", {
        type: "pie",
        data: {
            labels: saleData[salesman].customers,
            datasets: [{
                backgroundColor: saleData[salesman].colors,
                data: saleData[salesman].sales
            }]
        },
        options: {
            title: {
                display: true,
                text: `Antal plakater solgt for ${salesman}`
            }
        }
    });
}