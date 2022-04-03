<template>
  <yandex-map
    ref="map"
    v-if="showMap"
    :coords="coords"
    :options="{
      suppressMapOpenBlock: true,
    }"
    zoom="3"
    @map-was-initialized="loadMap"
  >
  </yandex-map>
</template>

<script>
import { loadYmap } from 'vue-yandex-maps';

export default {
  props: ['allMarkers', 'currentAddress'],
  data() {
    return {
      coords: [55.795366, 49.105579],
      markers: [],
      pickedAddress: '',
      showMap: false,
    };
  },
  computed: {
    currentAddressPoints() {
      if (this.currentAddress !== null) {
        return this.allMarkers.filter((el) => el.includes(this.currentAddress));
      }
      return null;
    },
  },
  methods: {
    async loadMap() {
      this.removeMapControls();
      this.handleMap(this.allMarkers);
    },
    async handleMap(payload) {
      await loadYmap();

      var mapComponent = this.$refs.map;
      var myMap = mapComponent.myMap;

      if (this.currentAddressPoints.length) {
        myMap.geoObjects.removeAll();
      }

      for (let item of payload) {
        ymaps.geocode(item).then(function (res) {
          var firstGeoObject = res.geoObjects.get(0);
          firstGeoObject.options.set('preset', 'islands#darkGreenCircleIcon');
          firstGeoObject.properties.set('iconCaption', item);
          myMap.geoObjects.add(firstGeoObject);

          var coords = firstGeoObject.geometry.getCoordinates();
          if (payload.length === 1) {
            myMap.setCenter(coords, 14, { duration: 300 });
          }
        });
      }

      let self = this;
      myMap.geoObjects.events.add('click', function (e) {
        let coords = e.get('target')['properties'].get('iconCaption');
        self.pickedAddress = coords;
      });
    },
    async removeMapControls() {
      await loadYmap();

      var mapComponent = this.$refs.map;
      var myMap = mapComponent.myMap;

      myMap.controls.remove('geolocationControl');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');
    },
  },
  watch: {
    pickedAddress: function (val) {
      let pickedAddressEmpty = val === ''
      if (!pickedAddressEmpty) {
        this.$emit('updAddress', val);
      }
    },
    currentAddressPoints: {
      handler: function (val) {
        let markersAddresses = val
        this.handleMap(markersAddresses);
      },
    },
    currentAddress: {
      handler: async function (val) {
        let isAddressEmpty = val === ''
        if (isAddressEmpty) {
          await loadYmap();

          var mapComponent = this.$refs.map;
          var myMap = mapComponent.myMap;
          myMap.setCenter(this.coords, 3, { duration: 300 });
        }
      },
    },
  },
  mounted() {
    this.showMap = true;
  },
};
</script>

<style>
.order-form__map-wrapper {
  height: 350px;
}

.ymap-container {
  height: 350px;
}

[class*='ymaps-2'][class*='-ground-pane'] {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  -webkit-filter: grayscale(100%);
}
</style>
