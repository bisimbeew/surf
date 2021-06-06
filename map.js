


let myMap;
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [55.711674, 37.561401],
   zoom: 11,
   controls: [],
 });
 
 let coords = [
     [55.671074, 37.556081],
     [55.723518, 37.566512],
   ],
   myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
     iconImageHref: './img/marker3.png',
     iconImageSize: [46, 57],
     iconImageOffset: [-35, -52]
   });
 
 for (let i = 0; i < coords.length; i++) {
   myCollection.add(new ymaps.Placemark(coords[i]));
 }
 
 myMap.geoObjects.add(myCollection);
 
 myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);