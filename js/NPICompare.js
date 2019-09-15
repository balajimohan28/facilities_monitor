function addResult(substance_name, category) {
    var results = document.getElementById('results');

    var tr = document.createElement('tr');

    var nameTd = document.createElement('td');
    var categoryTd = document.createElement('td');

    var name = document.createTextNode(substance_name);
    var category = document.createTextNode(category);
    nameTd.appendChild(name);
    categoryTd.appendChild(category);
    tr.appendChild(nameTd);
    tr.appendChild(categoryTd);
    results.appendChild(tr);

}

function clearResults() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}


// Data base Fetch
const url = 'https://raw.githubusercontent.com/balajimohan28/JustNoWasteDataSet/master/facility_NPI.json';
fetch(url)
    .then(res => res.json())
    .then(function (datas) {

        var currentLocation = window.location;

        var url = new URL(currentLocation);
        var facility_id = url.searchParams.get("facility_id");

        var facility_Data = datas.facility;
        var NPI_Data = datas.NPI;
        

        var facility_filter = facility_Data.filter(element => element.facility_id == facility_id)

        document.getElementById("company_name").innerHTML = facility_filter[0].facility_name;

        var name = facility_filter[0].substance_name;
        var substance_arr = name.split(',');

        var NPI_arr = [];

        for (var i = 0; i < substance_arr.length; i++) {
            for (var j = 0; j < NPI_Data.length; j++) {
                var NPI_filter = NPI_Data.filter(element => element.A == substance_arr[i])
            }
            for (var k = 0; k < NPI_filter.length; k++) {
                NPI_arr.push(NPI_filter[k].B);
            }
            var unique = NPI_arr.filter((item, i, ar) => ar.indexOf(item) === i);

            addResult(substance_arr[i], unique);
        }


    })
    .catch(function (e) {
        console.log("Error:", e);
    });
