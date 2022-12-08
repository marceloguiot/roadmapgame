<script>
import CanvasJSChart from '../assets/CanvasJSVueComponent.vue';
export default {
  components: {
    CanvasJSChart
  },
  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2",
        title:{
          text: "Delivery reliability",
          fontColor: "#FFFFFF",
          fontWeight: "bold"
        },
        subtitles: [{
          text: ""
        }],
        axisX: {
          lineThickness: 0,
          tickLength: 0,
          labelTextAlign: "center"
        },
        axisY: {
          includeZero: true,
          lineThickness: 0,
          gridThickness: 0,
          tickLength: 0,
          maximum: 5.5,
          labelFormatter: function() {
            return "";
          }
        },
        data: [{
          type: "column",
          indexLabel: "{y}",
          color: "#828180",
          yValueFormatString: "#%",
          indexLabelOrientation: "vertical",
          dataPoints: [
            { label: "Proyectado", y: 90.0 },
            { label: "Al final", y: 90.3 },
        
          ]
        }]
      }
    }
  }
}
</script>
 
<template>
  <div class=" flex flex-row m-auto w-11/12 mt-10">
    <div class="w-1/5">
    <CanvasJSChart :options="options" />
  </div>
  <div class="w-1/5">

  </div>
  <div class="w-1/5"></div>
  <div class="w-1/5"></div>
  <div class="w-1/5"></div>
  </div>
</template>                              