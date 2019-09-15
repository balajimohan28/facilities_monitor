 AOS.init({
     duration: 800,
     easing: 'slide'
 });


 function validate_activity() {

     var availableTags = ['Campbellfield', 'Clayton South', 'Braeside', 'Merricks',
                'Dandenong', 'Fyansford', 'Batesford', 'Dandenong South',
                'Eaglehawk', 'Geelong North', 'Korumburra', 'Lake Bolac',
                'Portland', 'Seymour', 'Shepparton', 'Stawell', 'Thomastown',
                'Port Melbourne', 'Werribee', 'Altona ', 'Traralgon', 'Somerton',
                'Altona', 'Lara', 'Springvale', 'Goornong', 'Sunshine',
                'Yarraville', 'Moolap', 'Anglesea', 'Point Henry',
                'Laverton North', 'Prahran', 'Caulfield', 'Ararat', 'Bairnsdale',
                'Wangaratta', 'Myrtleford', 'Porepunkah', 'Footscray', 'Mulgrave',
                'Moorabbin', 'Mitcham', 'Oakleigh', 'Preston', 'Wendouree',
                'Box Hill South', 'Alphington', 'Cheltenham', 'Corio',
                'Berriwillock', 'Irymple', 'Dingley', 'Melbourne Airport',
                'Tullamarine', 'Brooklyn', 'Euroa ', 'Moe', 'Waarre ', 'Koroit',
                'Kyneton', 'Springhurst', 'Wollert', 'Lakes Entrance', 'Orbost',
                'Sale', 'Manangatang', 'Trentham', 'Burwood', 'Lyndhurst',
                'Laverton', 'Box Hill', 'Swan Hill', 'Colac', 'Yarram',
                'Heidelberg', 'Heidelberg West', 'Morwell', 'Simpson', 'Deer Park',
                'Newbridge', 'Pyramid Hill', 'Colignan', 'Merbein',
                'Geelong South', 'Ballarat', 'Williamstown', 'Devon Meadows',
                'Lethbridge', 'Strathmerton', 'Stewarton', 'Nagambie',
                'Wandin East', 'North Shore', 'Maiden Gully', 'Echuca',
                'Smythesdale', 'Mt Clear', 'Collingwood', 'Richmond', 'Burnley',
                'Wodonga', 'Donnybrook', 'Point Wilson', 'Wyndham Vale', 'Kealba',
                'Aireys Inlet', 'Apollo Bay', 'Bannockburn', 'Connewarre',
                'Elliminyt', 'Lorne', 'She Oaks', 'Portarlington', 'Wurdiboluc',
                'Grantville', 'Lardner', 'Trafalgar', 'Warrnambool',
                'Nirranda South', 'Lang Lang', 'Port Campbell', 'Coburg North',
                'Wemen', 'Bendigo', 'Yarra Glen', 'Great Western', 'Castlemaine',
                'Barnawartha', 'Avoca', 'Clayton', 'Hastings', 'Tyabb', 'Nirranda',
                'Altona North', 'Mansfield', 'Myrtleford  ', 'Hoddles Creek',
                'Camperdown', 'Drouin', 'Toora', 'Hamilton', 'Horsham',
                'Dennington', 'Waurn Ponds', 'Scoresby', 'Truganina', 'Montrose',
                'Bacchus Marsh', 'Lysterfield', 'Epping', 'Charlton', 'Lilydale',
                'Dunnstown', 'Cosgrove South', 'Langwarrin', 'Cosgrove',
                'Yallourn North', 'Harrietville', 'Fulham', 'Mangalore',
                'Moorabbin Airport', 'Portland Junction', 'Yarpturk',
                'Essendon Fields', 'Breakwater', 'Cranbourne South', 'Milawa',
                'Emu', 'Coburg', 'Hawthorn East', 'Malvern', 'Notting Hill',
                'Newport', 'Benalla', 'St Arnaud', 'Corryong', 'Kyabram',
                'Mildura', 'Yarrawonga', 'Warragul', 'Rowville', 'Wantirna South',
                'Lemnos', 'Rutherglen', 'Delacombe', 'Footscray West',
                'Hazelwood North', 'Glenrowan', 'Cranbourne', 'Craigieburn',
                'Rockbank', 'Hampton Park', 'Maffra', 'Dutson', 'Giffard',
                'Carisbrook', 'Bentleigh East', 'Altona Meadows',
                'North Melbourne', 'Wahgunyah', 'Bayswater', 'Heathcote', 'Epsom',
                'Rochester', 'Bayswater North ', 'Maidstone', 'Naroghid',
                'Murchison East', 'Geelong East', 'Belmont', 'Broadmeadows',
                'Parkville', 'Vermont', 'Abbotsford', 'Bridgewater On Loddon',
                'Kilsyth', 'Tongala', 'Nunawading', 'Dixons Creek', 'Croydon',
                'Queenscliff', 'Crib Point', 'East Sale', 'Yallambie', 'Southbank',
                'Leongatha', 'Shepparton North', 'Tatura', 'Coldstream',
                'West Melbourne', 'Glen Waverley', 'Mickleham', 'Newtown',
                'Newmerella', 'Forge Creek', 'Ferntree Gully', 'Ringwood East',
                'Narre Warren', 'Moorooduc', 'Hallam', 'Brunswick', 'Lucknow',
                'Echuca ', 'Lockwood', 'Warrnambool ', 'Wodonga  ', 'Woodend',
                'Albion', 'Northcote', 'Croydon South', 'Longford', 'Golden Beach',
                'Marong', 'Tottenham', 'Mount Helen', 'Braybrook',
                'Oakleigh South', 'Melton', 'Delcombe', 'Bayswater North',
                'Cobden', 'Cororooke', 'Darnum', 'Stanhope', 'Norlane',
                'Airport West', 'Fosterville', 'Avenel', 'Westall', 'Tylden',
                'Tynong', 'Pakenham', 'Blackburn', 'Kerang', 'Piangil',
                'North Geelong', 'Noble Park North', 'Healesville', 'Boronia',
                'St Arnaud North', 'Shepparton ', 'Alexandra', 'Broadford',
                'Cobram', 'Eildon', 'Kilmore', 'Mooroopna', 'Nathalia', 'Numurkah',
                'Tallarook', 'Wallan', 'Fawkner', 'Allansford', 'Drysdale',
                'Hoppers Crossing', 'Dartmoor', 'Leitchville', 'West Footscray ',
                'Heyfield', 'Girgarre', 'Mill Park', 'Noble Park', 'Harkaway',
                'Axedale', 'Breakaway Creek', 'Mambourin', 'Prairie', 'Mentone',
                'Daylesford', 'Ondit ', 'Leongatha South', 'Moriac',
                'Oaklands Junction', 'Tarrone', 'Sunbury', 'Maribyrnong',
                'Peechelba', 'Douglas', 'Ouyen', 'Linton', 'Yannathan', 'Clyde',
                'Somerville', 'Pakenham South', 'Nar Nar Goon', 'Yellingbo',
                'Donald', 'Cann River', 'Lake Gardens', 'Koo Wee Rup', 'Thornbury',
                'Bundoora', 'Loy Yang', 'Newborough', 'Yinnar', 'Mount Waverley',
                'Laverton North ', 'Geelong South ', 'Chelsea Heights',
                'Eaglehawk, Bendigo', 'Rye', 'Koorlong', 'Cullellerain',
                'Robinvale', 'Nhill', 'Lancefield', 'Bullengarook', 'Costerfield',
                'Bangholme', 'Kensington', 'Dromana', 'South Yarra', 'Emerald',
                'Greenvale', 'Reservoir', 'Silvan ', 'Drouin West',
                'Christmas Hills', 'Spotswood', 'Balmoral', 'Goroke', 'Berwick',
                'Caulfield East', 'Churchill', 'Ringwood', 'Katunga', 'Winton',
                'Maddingley', 'Ballan', 'Wunghnu', 'Maryborough',
                'Kangaroo Ground', 'Yarrambat', 'Waaia', 'Keon Park', 'Baranduda',
                'Wooragee', 'Mt Beauty', 'Wangaratta ', 'Broadmeadows ',
                'Traralgon East', 'Huntingdale', 'Seaford', 'Mortlake', 'Timboon',
                'Patho', 'Frankston', 'Lockington', 'Melbourne', 'Mount Evelyn',
                'Wantirna', 'Euroa', 'Heywood', 'Sunshine West', 'Seville',
                'Tullamarine Airport', 'Ballarat East', 'Barry Beach', 'Beverford',
                'Bamawm', 'Moonambel', 'Yarra Junction', 'Cohuna', 'Gunbower',
                'Terang', 'Gre Gre', 'Huntly', 'Casterton', 'Bandiana', 'Rosedale',
                'Pine Lodge', 'Leithbridge', 'Oxley', 'Tangambalanga',
                'Beechworth', 'Buchan', 'Knoxfield', 'Branxholme', 'Blind Bight',
                'Boneo', 'Longwarry', 'Mount Martha', 'Somers', 'Welshpool',
                'Tarwin', 'Foster', 'Wonthaggi', 'Koonwarra', 'Heytesbury Lower',
                'Bridgewater', 'Dandenong South ', 'Port Fairy', 'Clifton Hill',
                'Paradise', 'Lance Creek', 'Tabilk', 'Seaspray', 'Yeungroon',
                'Newham', 'East Melbourne', 'Carlton', 'Essendon',
                'North Melbourne ', 'Karadoc', 'Geelong', 'Fitzroy',
                'Kangaroo Flat', 'Geelong West', 'Murchison', 'Keysborough',
                'Ballarat North', 'Tourello', 'Kingston', 'Bungal', 'Glen Park',
                'Gapsted', 'Coolaroo', 'Carrum Downs', 'Bell Park', 'Bowser',
                'Kilmany', 'Boisdale', 'Flemington', 'Wandin North', 'St Albans',
                'Gisborne', 'Melton South', 'Parwan', 'Romsey', 'Cowes', 'Iraak',
                'Peterborough', 'Essendon Airport', 'Mildura South', 'Yan Yean',
                'Chirnside Park', 'Launching Place', 'Whittlesea'
            ];

     for (var i = 0; i < availableTags.length; i++) {
         availableTags[i] = availableTags[i].toLocaleLowerCase();
     }

     var suburbName = document.getElementById("tags").value;


     if (availableTags.includes(suburbName.toLowerCase())) {
//         location.href ='/MapSearch.html#MapSection';
         return true;

     } else {
         
         return false;

     }



     // method="get" onsubmit="return validate_activity()"    action="/MapSearch.html#MapSection"

 }

 (function ($) {

     "use strict";

     var isMobile = {
         Android: function () {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function () {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function () {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function () {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function () {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function () {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     };


     $(window).stellar({
         responsive: true,
         parallaxBackgrounds: true,
         parallaxElements: true,
         horizontalScrolling: false,
         hideDistantElements: false,
         scrollProperty: 'scroll'
     });


     var fullHeight = function () {

         $('.js-fullheight').css('height', $(window).height());
         $(window).resize(function () {
             $('.js-fullheight').css('height', $(window).height());
         });

     };
     fullHeight();

     // loader
     var loader = function () {
         setTimeout(function () {
             if ($('#ftco-loader').length > 0) {
                 $('#ftco-loader').removeClass('show');
             }
         }, 1);
     };
     loader();

     // Scrollax
     $.Scrollax();

     var carousel = function () {
         $('.carousel-testimony').owlCarousel({
             center: true,
             loop: true,
             items: 1,
             margin: 30,
             stagePadding: 0,
             nav: false,
             navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
             responsive: {
                 0: {
                     items: 1
                 },
                 600: {
                     items: 2
                 },
                 1000: {
                     items: 3
                 }
             }
         });

     };
     carousel();

     $('nav .dropdown').hover(function () {
         var $this = $(this);
         // 	 timer;
         // clearTimeout(timer);
         $this.addClass('show');
         $this.find('> a').attr('aria-expanded', true);
         // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').addClass('show');
     }, function () {
         var $this = $(this);
         // timer;
         // timer = setTimeout(function(){
         $this.removeClass('show');
         $this.find('> a').attr('aria-expanded', false);
         // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').removeClass('show');
         // }, 100);
     });


     $('#dropdown04').on('show.bs.dropdown', function () {
         console.log('show');
     });

     // scroll
     var scrollWindow = function () {
         $(window).scroll(function () {
             var $w = $(this),
                 st = $w.scrollTop(),
                 navbar = $('.ftco_navbar'),
                 sd = $('.js-scroll-wrap');

             if (st > 150) {
                 if (!navbar.hasClass('scrolled')) {
                     navbar.addClass('scrolled');
                 }
             }
             if (st < 150) {
                 if (navbar.hasClass('scrolled')) {
                     navbar.removeClass('scrolled sleep');
                 }
             }
             if (st > 350) {
                 if (!navbar.hasClass('awake')) {
                     navbar.addClass('awake');
                 }

                 if (sd.length > 0) {
                     sd.addClass('sleep');
                 }
             }
             if (st < 350) {
                 if (navbar.hasClass('awake')) {
                     navbar.removeClass('awake');
                     navbar.addClass('sleep');
                 }
                 if (sd.length > 0) {
                     sd.removeClass('sleep');
                 }
             }
         });
     };
     scrollWindow();

     var isMobile = {
         Android: function () {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function () {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function () {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function () {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function () {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function () {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     };

     var counter = function () {

         $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                 $('.number').each(function () {
                     var $this = $(this),
                         num = $this.data('number');
                     console.log(num);
                     $this.animateNumber({
                         number: num,
                         numberStep: comma_separator_number_step
                     }, 7000);
                 });

             }

         }, {
             offset: '95%'
         });

     }
     counter();


     var contentWayPoint = function () {
         var i = 0;
         $('.ftco-animate').waypoint(function (direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 i++;

                 $(this.element).addClass('item-animate');
                 setTimeout(function () {

                     $('body .ftco-animate.item-animate').each(function (k) {
                         var el = $(this);
                         setTimeout(function () {
                             var effect = el.data('animate-effect');
                             if (effect === 'fadeIn') {
                                 el.addClass('fadeIn ftco-animated');
                             } else if (effect === 'fadeInLeft') {
                                 el.addClass('fadeInLeft ftco-animated');
                             } else if (effect === 'fadeInRight') {
                                 el.addClass('fadeInRight ftco-animated');
                             } else {
                                 el.addClass('fadeInUp ftco-animated');
                             }
                             el.removeClass('item-animate');
                         }, k * 50, 'easeInOutExpo');
                     });

                 }, 100);

             }

         }, {
             offset: '95%'
         });
     };
     contentWayPoint();


     // navigation
     var OnePageNav = function () {
         $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
             e.preventDefault();

             var hash = this.hash,
                 navToggler = $('.navbar-toggler');
             $('html, body').animate({
                 scrollTop: $(hash).offset().top
             }, 700, 'easeInOutExpo', function () {
                 window.location.hash = hash;
             });


             if (navToggler.is(':visible')) {
                 navToggler.click();
             }
         });
         $('body').on('activate.bs.scrollspy', function () {
             console.log('nice');
         })
     };
     OnePageNav();


     // magnific popup
     $('.image-popup').magnificPopup({
         type: 'image',
         closeOnContentClick: true,
         closeBtnInside: false,
         fixedContentPos: true,
         mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
         gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         },
         image: {
             verticalFit: true
         },
         zoom: {
             enabled: true,
             duration: 300 // don't foget to change the duration also in CSS
         }
     });

     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,

         fixedContentPos: false
     });


     $('#book_pick_date,#book_off_date').datepicker({
         'format': 'm/d/yyyy',
         'autoclose': true
     });
     $('#time_pick').timepicker();

     var goHere = function () {

         $('.mouse-icon').on('click', function (event) {

             event.preventDefault();

             $('html,body').animate({
                 scrollTop: $('.goto-here').offset().top
             }, 500, 'easeInOutExpo');

             return false;
         });
     };
     goHere();


 })(jQuery);
