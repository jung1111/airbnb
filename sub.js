document.getElementById('map').style.height = window.innerHeight + 'px';
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
    zoomControl: true,
    zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT
    },
    mapDataControl: false,
    logoControlOptions: {
        position: naver.maps.Position.LEFT_BOTTOM
    },
    disableKineticPan: false
});

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.3595704, 127.105399),
  map: map
});

var pinkMarker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.3637770, 127.1174332),
  map: map,
  icon: {
      content: [
                  '<div class="cs_mapbridge">',
                      '<div class="map_group _map_group">',
                          '<div class="map_marker _marker tvhp tvhp_big">',
                              '<span class="ico _icon">100,000</span>',
                              '<span class="shd"></span>',
                          '</div>',
                      '</div>',
                  '</div>'
              ].join(''),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
  }
});