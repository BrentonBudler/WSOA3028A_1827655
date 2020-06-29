

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlnYmFkYnJlbnQiLCJhIjoiY2ticm43MzhtMXpzdDJ4cG8xZjhoOWpsbyJ9.iXmGLDcFNZkcoqvpbBt0iw';

var bounds = [
   [27.4, -26.7], 
    [28.7, -25.65]
  ];


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bigbadbrent/ckbrpdlmr0ddi1imroqf2m57j',
    center: [28.0473, -26.2],
    zoom: 10,
    minZoom: 10.5,
    maxZoom: 14,
    dragRotate: false,
    maxBounds: bounds, 
    logoPosition: 'top-right'
});

map.on('load', function() {
    map.addSource('events', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>sweat workout party</h3>  <img src="Images/two.jpg" alt="Group of people dancing"> <h4>2 March 2019</h4> <a href="https://www.quicket.co.za/events/63252-planet-fitness-sweat-workout-party-gauteng-2019/#/" class="learn-more">learn more</a>' ,
                        'icon': 'fire-station'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.054782, -26.107457]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>last man standing</h3>  <img src="Images/three.jpg" alt="Person Climbing"> <h4>24 May 2019</h4> <a href="https://www.lms360.net/" class="learn-more">learn more</a>' ,
                        'icon': 'fire-station'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.004295, -26.166358]
                    }
                },


                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>GO switch launch</h3>  <img src="Images/four.jpg" alt="Woman working out"> <h4>16 March 2019</h4> <a href="https://switchplaygroundsa.com/studios/sandton/" class="learn-more">learn more</a>' ,
                        'icon': 'fire-station'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.954349, -26.060503]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Rand Show Fitness Expo</h3>  <img src="Images/five.jpg" alt="Fitness runway models"> <h4>19 April 2019</h4> <a href="https://randshow.co.za/" class="learn-more">learn more</a>' ,
                        'icon': 'fire-station'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.977364, -26.242912]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Arnold Classic Sports Festival</h3>  <img src="Images/six.jpg" alt="Arnold Sports Festival Logo"> <h4>19 April 2019</h4> <a href="http://www.arnoldclassicafrica.com/" class="learn-more">learn more</a>' ,
                        'icon': 'fire-station'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.053346, -26.106063]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Mind Booty Soul Pop-up Experience</h3>  <img src="Images/seven.jpg" alt="Woman smiling"> <h4>28 September 2019</h4> <a href="https://www.fitnessmag.co.za/mindbootysoul-pop-up-experience-2/" class="learn-more">learn more</a>' ,
                        'icon': 'fire-station'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.879455, -25.949102]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Trove Wellness Bootcamp</h3>  <img src="Images/eight.jpg" alt="Group of people working out"> <h4>23 November 2019</h4> <a href="https://www.webtickets.co.za/v2/Event.aspx?itemid=1495590841" class="learn-more">learn more</a>' ,
                        'icon': 'fire-station'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.040988, -26.146002]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>MiFitness games </h3>  <img src="Images/event2.jpg" alt="logo for event"> <h4>25 October 2019</h4> <a href="https://www.instagram.com/mifitnessgames/" class="learn-more">learn more</a>' ,
                        'icon': 'fire-station'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.943357,-26.062212]
                    }
                }
            ]
        }  
    });


    map.addSource('runs', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Kloofzicht Summer Run</h3>  <img src="Images/run1.jpg" alt="Person tying shoe laces"> <h4>3 Feb 2019</h4> <a href="https://www.entryninja.com/events/38382-kloofzicht-summer-run" class="learn-more">learn more</a>' ,
                        'icon': 'pitch'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.819033, -25.986927]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>The Color Run</h3>  <img src="Images/nine.jpg" alt="Runners covered in colourful dust"> <h4>8 September 2019</h4> <a href="https://thecolorrun.co.za/locations/gauteng/" class="learn-more">learn more</a>' ,
                        'icon': 'pitch'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.996359, -26.154674]
                    }
                },


                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Jp Morgan Corporate Challenge</h3>  <img src="Images/run2.jpg" alt="Group of people running"> <h4>28 March 2019</h4> <a href="https://www.jpmorganchasecc.com/city/johannesburg/registration" class="learn-more">learn more</a>' ,
                        'icon': 'pitch'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.053114, -26.135566]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Birchwood Half Marathon</h3>  <img src="Images/one.jpg" alt="Woman running"> <h4>14 April 2019</h4> <a href="https://secure.onreg.com/onreg2/front/step1.php?id=4367" class="learn-more">learn more</a>' ,
                        'icon': 'pitch'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.250689, -26.176197]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Ruimsig Night Run</h3>  <img src="Images/run3.png" alt="People Running"> <h4>24 June 2019</h4> <a href="https://www.webtickets.co.za/v2/event.aspx?itemid=1487496033" class="learn-more">learn more</a>' ,
                        'icon': 'pitch'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.865560, -26.082484]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Soweto Marathon</h3>  <img src="Images/run4.jpg" alt="People Running"> <h4>03 November 2019</h4> <a href="https://secure.onreg.com/onreg2/front/step1.php?id=4551" class="learn-more">learn more</a>' ,
                        'icon': 'pitch'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.982655, -26.234603]
                    }
                }

            ]
        }
    });


    map.addSource('restaurants', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Fresh Earth Food</h3>  <img src="Images/food1.jpg" alt="inside of restaurant"> <a href="https://www.facebook.com/freshearth/" class="learn-more">learn more</a>' ,
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.011957, -26.162428]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Lexis Health Eatery</h3>  <img src="Images/food2.jpg" alt="inside of restaurant"> <a href="https://lexiseatery.com/" class="learn-more">learn more</a>' ,
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.042709, -26.144684]
                    }
                },


                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Free Food*</h3>  <img src="Images/food3.jpg" alt="inside of restaurant"> <a href="https://www.zomato.com/johannesburg/free-food-diner-takeaway-birnam-sandton" class="learn-more">learn more</a>' ,
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.067819, -26.129556]
                    }
                },

                
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Eat Your heart out</h3>  <img src="Images/food4.jpg" alt="inside of restaurant"> <a href="https://www.tripadvisor.co.za/Restaurant_Review-g312578-d10047197-Reviews-Eat_Your_Heart_Out-Johannesburg_Greater_Johannesburg_Gauteng.html" class="learn-more">learn more</a>' ,
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.059221, -26.25]
                    }
                }



            ]
        }
    });

    map.addSource('gyms', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Virgin Active Old Eds</h3>  <img src="Images/gym1.jpg" alt="entrance of gym"> <a href="http://www.virginactive.co.za/clubs/old-eds" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.063206, -26.157309]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Virgin Active Victory Park</h3>  <img src="Images/gym2.jpg" alt="inside of a gym"> <a href="http://www.virginactive.co.za/clubs/victory-park?utm_source=google&utm_medium=organic&utm_campaign=GMB&utm_content=VICTORY_PARK" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.009148, -26.138675]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>CityROCK</h3>  <img src="Images/gym3.jpg" alt="people on indoor rock climbing wall"> <a href="http://www.cityrock.co.za/johannesburg" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.976285, -26.106651]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Planet Fitness Bedfordview</h3>  <img src="Images/gym4.jpg" alt="Line of elliptical trainers in gym"> <a href="https://www.planetfitness.co.za/rosebank/" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.125264, -26.188450]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Unchained Boxing Gym</h3>  <img src="Images/gym5.jpg" alt="group of people boxing"> <a href="http://unchainedgym.co.za/" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.016662, -26.142553]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>Pilates on 7th</h3>  <img src="Images/gym6.jpg" alt="inside of pilates studio"> <a href="http://www.pilateson7th.co.za/" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.027873, -26.144322]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>AeroGym</h3>  <img src="Images/gym7.jpg" alt="inside of gym"> <a href="https://www.facebook.com/aerogymfitness/" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.899821, -26.237312]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<h3>CrossFit Alberton 2.0</h3>  <img src="Images/gym8.jpg" alt="group of people listening to personal trainer"> <a href="http://www.crossfitalberton2.co.za/" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.124034, -26.260473]
                    }
                }





            ]
        }
    });
    
    map.addLayer({
        'id': 'events',
        'type': 'symbol',
        'source': 'events',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true,
            'icon-size': 2,
            'visibility': 'visible',
        }
    });

    map.addLayer({
        'id': 'runs',
        'type': 'symbol',
        'source': 'runs',
        
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true,
            'icon-size': 2,
            'visibility': 'visible'
        }
    });

    map.addLayer({
        'id': 'restaurants',
        'type': 'symbol',
        'source': 'restaurants',
        
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true,
            'icon-size': 2,
            'visibility': 'visible'
        }
    });

    map.addLayer({
        'id': 'gyms',
        'type': 'symbol',
        'source': 'gyms',
        
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true,
            'icon-size': 2,
            'visibility': 'visible'
        }
    });


    map.on('click', 'events', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;


        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup({offset: 10})
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
            
          
    });


    map.on('click', 'runs', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;


        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup({offset: 25})
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map)
            
          
    });

    map.on('click', 'restaurants', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;


        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup({offset: 25})
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map)
            
          
    });


    map.on('click', 'gyms', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;


        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup({offset: 25})
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map)
          
          
    });

    map.on('mouseenter', 'events', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'events', function() {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter', 'runs', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'runs', function() {
        map.getCanvas().style.cursor = '';
    });
    
    map.on('mouseenter', 'restaurants', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'restaurants', function() {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter', 'gyms', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'gyms', function() {
        map.getCanvas().style.cursor = '';
    });

    

    var toggleableLayerIds = ['events', 'runs', 'restaurants','gyms'];
 


    for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i];
         
        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.textContent = id;
         
        link.onclick = function(e) {
            var clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();
         
            var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
            
            
            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                }
        };
         
        var layers = document.getElementById('menu');
         layers.appendChild(link);
        }
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
         trackUserLocation: true
        })
    );

    map.addControl(new mapboxgl.NavigationControl());

