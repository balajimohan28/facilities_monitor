// Data base Fetch
const url = 'https://raw.githubusercontent.com/balajimohan28/JustNoWasteDataSet/master/substance_impacts.json';
fetch(url)
    .then(res => res.json())
    .then(function (data) {

        var currentLocation = window.location;

        var url = new URL(currentLocation);
        var substance_name = url.searchParams.get("substance_name");

        var current_substance_name_arr = substance_name.split(',');

        for (var i = 0; i < current_substance_name_arr.length; i++) {
            for (var j = 0; j < data.length; j++) {
                var final_filter = data.filter(element => element.A == current_substance_name_arr[i])
            }

            if (final_filter[0] != null) {



                console.log(final_filter[0].A);
                console.log(final_filter[0].B);
                var sName = final_filter[0].A;
                var iName = final_filter[0].B;

                var results = document.getElementById('results');
                var tr = document.createElement('tr');

                var subtance_name_td = document.createElement('td');
                var impact_td = document.createElement('td');


                var subtance_name = document.createTextNode(sName);
                var impact_name = document.createTextNode(iName);

                subtance_name_td.appendChild(subtance_name);
                impact_td.appendChild(impact_name);
                

                tr.appendChild(subtance_name_td);
                tr.appendChild(impact_td);

                results.appendChild(tr);



            }
        }



    })
    .catch(function (e) {
        console.log("Error:", e);
    });
