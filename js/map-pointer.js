ymaps.ready(init);

var myMap;

function init () {
    // Параметры карты можно задать в конструкторе.
    myMap = new ymaps.Map(
        // ID DOM-элемента, в который будет добавлена карта.
        'map',
        // Параметры карты.
        {
            // Географические координаты центра отображаемой карты.
            center: [59.93865828055824,30.322975022015093],
            // Масштаб.
            zoom: 17,
    
            type: 'yandex#map'
        }, {
            // Поиск по организациям.
            searchControlProvider: 'yandex#search'
        }
    );
}

function setCenter () {
    myMap.setCenter([59.93865828055824,30.322975022015093]);
}

function setBounds () {
    // Bounds - границы видимой области карты.
    // Задаются в географических координатах самой юго-восточной и самой северо-западной точек видимой области.
    myMap.setBounds([[37, 38], [39, 40]]);
}

//ymaps.ready(function () {
//  //добавление карты в блок с идентификатором #map
//  var myMap = new ymaps.Map('map', {
//      center: [59.93865828055824,30.322975022015093], //координаты центра карты
//      zoom: 17 //масштаб
//  }, {
//      searchControlProvider: 'yandex#search'
//  });
//  //запрет скроллинга при прокрутке страницы
//  myMap.behaviors.disable('scrollZoom');
//  //создание маркера;
//  var myPlacemark = new ymaps.Placemark ([59.93865828055824,30.322975022015093], {
//      hintContent: 'Глейси'
//  }, {
//      iconLayout: 'default#image',
//      iconImageHref: '../img/pointer-min.png', //иконка маркера
//      iconImageSize: [80, 140], //размер маркера
//      iconImageOffset: [-40, -142] //смещение маркера
//  });
//  //добавление маркера на карту
//  myMap.geoObjects.add(myPlacemark);
//});