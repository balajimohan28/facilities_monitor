var $modal = $('.modal');

// Show loader & then get content when modal is shown
$modal.on('show.bs.modal', function (e) {
    var paragraphs = $(e.relatedTarget).data('paragraphs');

    $(this)
        .addClass('modal-scrollfix')
        .find('.modal-body')
        .html('loading...')
        .load('https://baconipsum.com/api/?type=meat-and-filler&paras=' + paragraphs, function () {
            
            $modal
                .removeClass('modal-scrollfix')
                .find('.modal-body').text('Hari');
        });

});


for (var i = 0; i <= 1; i++) {

    if (i == 0) {

        var results = document.getElementById('results');

        var td = document.createElement('td');

        var facility_id_tr = document.createElement('tr');
        var jurisdiction_code_tr = document.createElement('tr');;
        var jurisdiction_facility_id_tr = document.createElement('tr');
        var registered_business_name_tr = document.createElement('tr');
        var facility_name_tr = document.createElement('tr');
        var street_address_tr = document.createElement('tr');
        var suburb_tr = document.createElement('tr');
        var postcode_tr = document.createElement('tr');
        var primary_anzsic_class_code_tr = document.createElement('tr');
        var primary_anzsic_class_name_tr = document.createElement('tr');
        var main_activities_tr = document.createElement('tr');
        var reports_tr = document.createElement('tr');
		var land_waste_tr = document.createElement('tr');
		var air_point_waste_tr = document.createElement('tr');
		var air_fugitive_waste_tr = document.createElement('tr');
        var air_waste_tr = document.createElement('tr');
		var water_waste_tr = document.createElement('tr');
		
		
        var facility_id_name = document.createTextNode("Facility id");
        var jurisdiction_code_name = document.createTextNode("Jurisdiction code");
        var jurisdiction_facility_id_name = document.createTextNode("Jurisdiction facility id");
        var registered_business_name_name = document.createTextNode("Registered Business name");
        var facility_name_name = document.createTextNode("Facility name");
        var street_address_name = document.createTextNode("Street address");
        var suburb_name = document.createTextNode("Suburb");
        var postcode_name = document.createTextNode("Postcode");
        var primary_anzsic_class_code_name = document.createTextNode("ANZSIC class code");
        var primary_anzsic_class_name_name = document.createTextNode("ANZSIC class name");
        var main_activities_name = document.createTextNode("Main Activities");
        var reports_name = document.createTextNode("No of Reports submitted");
		var land_waste_name = document.createTextNode("Total Land Waste(kg)");
		var air_point_waste_name = document.createTextNode("Total Air Point Waste(kg)");
		var air_fugitive_waste_name = document.createTextNode("Total Air Fugitive Waste (kg)");
		var air_waste_name = document.createTextNode("Total Air Waste(kg)");
		var water_waste_name = document.createTextNode("Total Water Waste(kg)");
		

        facility_id_tr.appendChild(facility_id_name);
        jurisdiction_code_tr.appendChild(jurisdiction_code_name);
        jurisdiction_facility_id_tr.appendChild(jurisdiction_facility_id_name);
        registered_business_name_tr.appendChild(registered_business_name_name);
        facility_name_tr.appendChild(facility_name_name);
        street_address_tr.appendChild(street_address_name);
        suburb_tr.appendChild(suburb_name);
        postcode_tr.appendChild(postcode_name);
        primary_anzsic_class_code_tr.appendChild(primary_anzsic_class_code_name);
        primary_anzsic_class_name_tr.appendChild(primary_anzsic_class_name_name);
        main_activities_tr.appendChild(main_activities_name);
        reports_tr.appendChild(reports_name);
		land_waste_tr.appendChild(land_waste_name);
		air_point_waste_tr.appendChild(air_point_waste_name);
		air_fugitive_waste_tr.appendChild(air_fugitive_waste_name);
		air_waste_tr.appendChild(air_waste_name);
		water_waste_tr.appendChild(water_waste_name);

		td.appendChild(facility_name_tr);
        td.appendChild(facility_id_tr);
        td.appendChild(registered_business_name_tr);
        td.appendChild(suburb_tr);
        td.appendChild(postcode_tr);
        td.appendChild(primary_anzsic_class_code_tr);
        td.appendChild(primary_anzsic_class_name_tr);
        td.appendChild(main_activities_tr);
		td.appendChild(land_waste_tr);
		td.appendChild(air_point_waste_tr);
		td.appendChild(air_fugitive_waste_tr);
		td.appendChild(air_waste_tr);
		td.appendChild(water_waste_tr);
		td.appendChild(reports_tr);

        results.appendChild(td);
    } else {

        var currentLocation = window.location;

        var url = new URL(currentLocation);
        var facility_id = url.searchParams.get("facility_id");
        var jurisdiction_code = url.searchParams.get("jurisdiction_code");
        var jurisdiction_facility_id = url.searchParams.get("jurisdiction_facility_id");
        var registered_business_name = url.searchParams.get("registered_business_name");
        var facility_name = url.searchParams.get("facility_name");
        var street_address = url.searchParams.get("street_address");
        var suburb = url.searchParams.get("suburb");
        var postcode = url.searchParams.get("postcode");
        var primary_anzsic_class_code = url.searchParams.get("primary_anzsic_class_code");
        var primary_anzsic_class_name = url.searchParams.get("primary_anzsic_class_name");
        var main_activities = url.searchParams.get("main_activities");
		var total_land_waste_amount = url.searchParams.get("Total_Land_Waste_Amount");
		var total_air_point_waste_amount = url.searchParams.get("Total_Air_Point_Waste_Amount");
		var total_air_fugitive_waste_amount = url.searchParams.get("Total_Air_Fugitive_Waste_Amount");
		var total_air_waste_amount = url.searchParams.get("Total_Air_Waste_Amount");
		var total_water_waste_amount = url.searchParams.get("Total_Water_Waste_Amount");
        var reports = url.searchParams.get("reports");

        var results = document.getElementById('results');

        var td = document.createElement('td');

        var facility_id_tr = document.createElement('tr');
        var jurisdiction_code_tr = document.createElement('tr');
        var jurisdiction_facility_id_tr = document.createElement('tr');
        var registered_business_name_tr = document.createElement('tr');
        var facility_name_tr = document.createElement('tr');
        var street_address_tr = document.createElement('tr');
        var suburb_tr = document.createElement('tr');
        var postcode_tr = document.createElement('tr');
        var primary_anzsic_class_code_tr = document.createElement('tr');
        var primary_anzsic_class_name_tr = document.createElement('tr');
        var main_activities_tr = document.createElement('tr');
        var reports_tr = document.createElement('tr');
		var land_waste_tr = document.createElement('tr');
		var air_point_waste_tr = document.createElement('tr');
		var air_fugitive_waste_tr = document.createElement('tr');
		var air_waste_tr = document.createElement('tr');
		var water_waste_tr = document.createElement('tr');

        var facility_id_name = document.createTextNode(facility_id);
        var jurisdiction_code_name = document.createTextNode(jurisdiction_code);
        var jurisdiction_facility_id_name = document.createTextNode(jurisdiction_facility_id);
        var registered_business_name_name = document.createTextNode(registered_business_name);
        var facility_name_name = document.createTextNode(facility_name);
        var street_address_name = document.createTextNode(street_address);
        var suburb_name = document.createTextNode(suburb);
        var postcode_name = document.createTextNode(postcode);
        var primary_anzsic_class_code_name = document.createTextNode(primary_anzsic_class_code);
        var primary_anzsic_class_name_name = document.createTextNode(primary_anzsic_class_name);
        var main_activities_name = document.createTextNode(main_activities);
        var reports_name = document.createTextNode(reports);
		var land_waste_name = document.createTextNode(total_land_waste_amount);
		var air_point_waste_name = document.createTextNode(total_air_point_waste_amount);
		var air_fugitive_waste_name = document.createTextNode(total_air_fugitive_waste_amount);
		var air_waste_name = document.createTextNode(total_air_waste_amount);
		var water_waste_name = document.createTextNode(total_water_waste_amount);

        facility_id_tr.appendChild(facility_id_name);
        jurisdiction_code_tr.appendChild(jurisdiction_code_name);
        jurisdiction_facility_id_tr.appendChild(jurisdiction_facility_id_name);
        registered_business_name_tr.appendChild(registered_business_name_name);
        facility_name_tr.appendChild(facility_name_name);
        street_address_tr.appendChild(street_address_name);
        suburb_tr.appendChild(suburb_name);
        postcode_tr.appendChild(postcode_name);
        primary_anzsic_class_code_tr.appendChild(primary_anzsic_class_code_name);
        primary_anzsic_class_name_tr.appendChild(primary_anzsic_class_name_name);
        main_activities_tr.appendChild(main_activities_name);
        reports_tr.appendChild(reports_name);
		land_waste_tr.appendChild(land_waste_name);
		air_point_waste_tr.appendChild(air_point_waste_name);
		air_fugitive_waste_tr.appendChild(air_fugitive_waste_name);
		air_waste_tr.appendChild(air_waste_name);
		water_waste_tr.appendChild(water_waste_name);

        td.appendChild(facility_name_tr);
        td.appendChild(facility_id_tr);
        td.appendChild(registered_business_name_tr);
        td.appendChild(suburb_tr);
        td.appendChild(postcode_tr);
        td.appendChild(primary_anzsic_class_code_tr);
        td.appendChild(primary_anzsic_class_name_tr);
        td.appendChild(main_activities_tr);
		td.appendChild(land_waste_tr);
		td.appendChild(air_point_waste_tr);
		td.appendChild(air_fugitive_waste_tr);
		td.appendChild(air_waste_tr);
		td.appendChild(water_waste_tr);
		td.appendChild(reports_tr);

        results.appendChild(td);

    }
}

function ComapreNPI(){
    
    
        var currentLocation = window.location;

        var url = new URL(currentLocation);
        var facility_id = url.searchParams.get("facility_id");
    
    
        location.href = 'NPICompare.html?facility_id='+facility_id;
    
}