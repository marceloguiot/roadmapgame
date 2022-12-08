<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted} from 'vue'
import axios from 'axios'
import { isProxy, toRaw } from 'vue'
import Sprint1 from './sprints/Sprint1.vue'
import Sprint2 from './sprints/Sprint2.vue'
import Sprint3 from './sprints/Sprint3.vue'
import Sprint4 from './sprints/Sprint4.vue'
import Sprint41 from './sprints/Sprint4.1.vue'
import Sprint42 from './sprints/Sprint4.2.vue'
import Sprint5 from './sprints/Sprint5.vue'
import Sprint6 from './sprints/Sprint6.vue'
import Sprint0 from './sprints/Sprint0.vue'
import column from './column.vue'
import {useIntervalFn} from '@vueuse/core';

const deg = ref(0);
const sprintAct = ref(0);
const partidaActual = ref(0);

onMounted(async () => {
  partidaActual.value = localStorage.getItem("id_partida");
  await axios.post('obtener.php',{tipo: 'sprintActual',id_partida: partidaActual.value})
      .then(response => {
        
        sprintAct.value = response.data;
        if(response.data == 1 || response.data == 2)
        {
          deg.value = 0;
        }
        else
        {
          if(response.data == 3)
          {
            deg.value = -60;
          }
          else if(response.data == 4)
          {
            deg.value = -120;
          }
          else if(response.data == 5)
          {
            deg.value = -180;
          }
          else if(response.data == 6)
          {
            deg.value = -240;
          }
          
        }
      })
})

const activePosition = ref(0);
const mostrarTablero = ref(false);
const mostrarCanvas = ref(true);

useIntervalFn(() => {
  if (activePosition.value > -525) {
    activePosition.value -= 75;
  }
  else {
    activePosition.value = 0;
}
}, 200);

const rotar = () =>{
    
}

const router = useRouter()

const actualSprint = ref('Sprint0');

const sprints = {
    Sprint0,
    Sprint1,
    Sprint2,
    Sprint3,
    Sprint4,
    Sprint41,
    Sprint42,
    Sprint5,
    Sprint6
}

const avanzar = (id) =>
{
  if(id == 1)
  {
    actualSprint.value = 'Sprint1';
  }
  else if(id == 2)
  {
    actualSprint.value = 'Sprint2';
  }
  else if(id == 3)
  {
    actualSprint.value = 'Sprint3';
  }
  else if(id == 4)
  {
    actualSprint.value = 'Sprint4';
  }
  else if(id == 4.1)
  {
    actualSprint.value = 'Sprint41';
  }
  else if(id == 4.2)
  {
    actualSprint.value = 'Sprint42';
  }
  else if(id == 5)
  {
    actualSprint.value = 'Sprint5';
  }
  else if(id == 6)
  {
    actualSprint.value = 'Sprint6';
  }

  sprintAct.value = id;
}

const verTablero = async () =>
{
  mostrarTablero.value = true;
 mostrarCanvas.value = false;  

  await axios.post('obtener.php',{tipo: 'sprintActual',id_partida: partidaActual.value})
      .then(response => {
      
          
        
        if(sprintAct.value == response.data)
        {

        }
        else
        {
          deg.value += -60;
      
          
        }
       
        sprintAct.value = response.data;
      })


}

const verCanvas = () =>
{
  mostrarTablero.value = false;
  mostrarCanvas.value = true;  
}

const verchart = () =>{
  router.push('/column');
}
</script>
<template>

 <div v-show="mostrarCanvas">
 <component :is="sprints[actualSprint]" @pasarSprint="avanzar"></component>
</div>
 <div v-show="mostrarTablero" class="w-full h-full flex flex-col">
        <div id="transition" style="width:850px; height:850px" @click="rotar()" class="m-auto" :style="{'background-image':'url(/assets/tablero.jpg)', 'transform': `rotate(${deg}deg)`}">
        

       
        </div>
        <!-- <div id="sprite" :style="{'background-position': `${activePosition}px 50%`}"></div>-->
    </div>
 <div class="flex flex-col mb-5 w-3/4 m-auto">
 <div class="flex flex-row w-2/6 p-2 justify-between min-w-fit mt-10 rounded-md shadow-xl bg-yellow-300">
        <div class="text-white p-1 hover:cursor-pointer" @click="verTablero()">Estado</div>
        <div class="text-white p-1 hover:cursor-pointer" @click="verCanvas">Canvas</div>
        <div class="text-white p-1 hover:cursor-pointer" @click="verchart">Estado empresa</div>
        </div>
      </div>
 
    


 
</template>
<style scoped>
#transition {
  transition: transform 0.9s ease-in-out;
}
#sprite {
    
background: url(https://mguiot.online/banderin_2.png) no-repeat;

/* each frame is 75px wide so limit container to display one at a time */
width: 305px; 

/* main is roughly 150px tall */
height: 399px;

/* the image has some space on top and bottom so this accounts for that */
background-position: 0px 50%;
background-position: -305px 50%;
/*Step 3*/ background-position: -610px 50%; 
/*Step 4*/ background-position: -915px 50%;
}
</style>