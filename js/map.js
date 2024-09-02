(function() {
    if(document.querySelector('.map')){
        ymaps.ready(init);
        function init(){
            let myMap = new ymaps.Map("map", {
                center: [55.763295, 37.610116],
                zoom: 13,
                
            });
            const placemark = new ymaps.Placemark([55.763295, 37.610116], { balloonContentBody: 'Москва, Глинищевский переулок, 3, подъезд 4' }, {
                // iconLayout: 'default#image',
                // iconImageHref: 'images/main-page/map_placemark.png',
                // iconImageSize: [66, 71],
                // iconOffset: [-60, -40],
                // balloonContent: content,
                // iconContent: name,
                // iconLayout: squareLayout,
                preset: 'islands#redDotIcon'
            });
    
            myMap.geoObjects.add(placemark);
            
        }
    }
   
}())