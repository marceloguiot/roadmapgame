<template>
  <div class="flex flex-row m-auto mt-20">
    <div class="w-1/5 shadow-xl">
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
    class="bg-slate-600"
  />
  </div>
  <div class="w-3/5 shadow-xl">
    <div class="flex flex-col w-full h-screen">
      <div class="flex flex-row w-full h-1/3">
      <div class="flex flex-col w-1/3 text-white bg-slate-700 p-2">
        Tráfico Sitio Web

      </div>
      
      <div class="flex flex-col w-1/3 text-white bg-slate-700 p-2">
      Conversion rate
  </div>
  <div class="flex flex-col w-1/3 text-white bg-slate-700 p-2">
    Unique visitors
  </div>
</div>
<div class="flex flex-row">
<div class="w-1/2">

</div>
<div class="w-1/2 bg-slate-700">
  <Bar 
    :chart-options="chartOptions1"
    :chart-data="chartData1"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="300"
    class="bg-slate-600 h-1/3"
  />
</div>

</div>
 
    </div>
    
  
</div>
<div class="w-1/5 shadow-xl">

</div>
</div>
</template>

<script>
import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'Proyectado', 'Al final' ],
        datasets: [ {label:'Delivery Reliability', data: [90, 90.5], backgroundColor:['#828180','#46CF6D']} ]
      },
      chartOptions: {
        responsive: true,
        plugins:{
          legend: {
                labels: {
                    color: "white"
                }
            }
        },
        scales: {
      y: {
        ticks: { color: 'white' }
      },
      x: {
        ticks: { color: 'white' }
      }
    }
      },
      chartData1: {
        labels: [ 'Customer Effor', 'Customer Satisfaction','Customer Retention'],
        datasets: [ {label:'Final', data: [15, 85.75, 36.6], backgroundColor:'#FFC300'},{label:'Proyectado', data: [15,85,26.6], backgroundColor:'#8E9590'} ]
      },
      chartOptions1: {
        responsive: true,
        plugins:{
          legend: {
                labels: {
                    color: "white"
                }
            }
        },
        scales: {
      y: {
        ticks: { color: 'white' }
      },
      x: {
        ticks: { color: 'white' }
      }
    }
      }

    }
  }
}
</script>                        