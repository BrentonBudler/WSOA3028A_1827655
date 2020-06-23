

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlnYmFkYnJlbnQiLCJhIjoiY2ticm43MzhtMXpzdDJ4cG8xZjhoOWpsbyJ9.iXmGLDcFNZkcoqvpbBt0iw';

var bounds = [
   [27.75, -26.316], // Southwest coordinates 27.934, -26.316
    [28.35, -26.05] // Northeast coordinates
  ];


var map = new mapboxgl.Map({
container: 'map',
//Customized map style I created using mapbox studio to ensure map matches websites style
style: 'mapbox://styles/bigbadbrent/ckbrpdlmr0ddi1imroqf2m57j/draft',
//Center on Johannesburg center:  [28.0473, -26.2041],
center: [28.0473, -26.2041],
// Set default zoom so Johannesburg and surrounding areas can be seen 
zoom: 10.5,
// Set min zoom so user cannot zoom out further than Joburg and surrounding areas 
minZoom: 10.5,
// Set max zoom so user cannot zoom in to the point where area names dissappear 
maxZoom: 14,
//Lock rotation 
dragRotate: false,
//
maxBounds: bounds
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
                            '<h3>Birchwood Half Marathon</h3>  <img src="Images/one.jpg" alt="run"> <h4>14 April 2019</h4> <a href="https://secure.onreg.com/onreg2/front/step1.php?id=4367" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
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
                            '<h3>sweat workout party</h3>  <img src="Images/two.jpg" alt="dance"> <h4>2 March 2019</h4> <a href="https://www.quicket.co.za/events/63252-planet-fitness-sweat-workout-party-gauteng-2019/#/" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
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
                            '<h3>last man standing</h3>  <img src="Images/three.jpg" alt="dance"> <h4>24 May 2019</h4> <a href="https://www.lms360.net/" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
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
                            '<h3>GO switch launch</h3>  <img src="Images/four.jpg" alt="dance"> <h4>16 March 2019</h4> <a href="https://switchplaygroundsa.com/studios/sandton/" class="learn-more">learn more</a>' ,
                        'icon': 'fitness-centre'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [27.954349, -26.060503]
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
                            '<h3>This yum</h3> <h4>eat good</h4>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.0473, -26.4]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                        '<h3>Name of Restaurant</h3>  <img src="Images/yoga.jpeg" alt="Yoga"> <h4>10 February 2018</h4> <button class="learn-more">learn more</button>' ,
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.1, -26.2]
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
            'icon-size': 3,
            'visibility': 'visible',
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



    map.on('click', 'events', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;


        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup({offset: 25})
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
            //.addClassName("popup");
          
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
            .addClassName("popup");
          
    });

    map.on('mouseenter', 'events', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'events', function() {
        map.getCanvas().style.cursor = '';
    });

    var toggleableLayerIds = ['events', 'restaurants'];
 


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
         
        // toggle layer visibility by changing the layout object's visibility property
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


