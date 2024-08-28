(function() {
    if(document.querySelector('.map')){
        ymaps.ready(init);
        function init(){
            let myMap = new ymaps.Map("map", {
                center: [55.763295, 37.610116],
                zoom: 13,
                
            });
            const placemark = new ymaps.Placemark([55.763295, 37.610116], { balloonContentBody: 'Название объекта <br> Рейтинг: 4.5' }, {
                iconLayout: 'default#image',
                // iconImageHref: 'images/main-page/map_placemark.png',
                // iconImageSize: [66, 71],
                iconOffset: [-60, -40],
                // balloonContent: content,
                // iconContent: name,
                // iconLayout: squareLayout,
            });
    
            myMap.geoObjects.add(placemark);
            
        }
    }
   
}())