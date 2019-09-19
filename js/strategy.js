var $modal = $('.modal');

// Show loader & then get content when modal is shown
$modal.on('show.bs.modal', function (e) {
    var paragraphs = $(e.relatedTarget).data('paragraphs');

    $(this)
        .addClass('modal-scrollfix')
        .find('.modal-body')
        .html('loading...')
        .load('https://just-no-waste.s3-ap-southeast-2.amazonaws.com/facilities_strategies.json', function (extra) {

            var currentLocation = window.location;

            var url = new URL(currentLocation);
            var company_id = url.searchParams.get("company_id");
        
            var data = JSON.parse(extra);    
        
            var facilities = data.facilities;

            var facility_filter = facilities.filter(element => element.facility_id == company_id);
        
            console.log(facility_filter);
        
            var facility_name = facility_filter[0].facility_name;
            var street_address = facility_filter[0].street_address;
            var suburb = facility_filter[0].suburb;
            var facility_website = facility_filter[0].facility_website;

            $modal
                .removeClass('modal-scrollfix')
                .find('.modal-body').text("Address: " + street_address + ", " + suburb)
        });

});


// Data base Fetch
const url = 'https://just-no-waste.s3-ap-southeast-2.amazonaws.com/facilities_strategies.json';
fetch(url)
    .then(res => res.json())
    .then(function (datas) {

        var currentLocation = window.location;

        var url = new URL(currentLocation);
        var company_name = url.searchParams.get("company_name");
        var company_id = url.searchParams.get("company_id");

        var facilities = datas.facilities;
        var strategies = datas.strategies;

        var data_filter1 = facilities.filter(element => element.facility_id == company_id);

        var PACN_1 = data_filter1[0].primary_anzsic_class_name;

        var data_filter2 = strategies.filter(element => element.primary_anzsic_class_name == PACN_1);

        var PACN_2 = data_filter2[0].reduction_strategies;

        document.getElementById("strategy").innerHTML = data_filter2[0].primary_anzsic_class_name;
        document.getElementById("primary-anzsic").innerHTML = PACN_2;


    })
    .catch(function (e) {
        console.log("Error:", e);
    });
