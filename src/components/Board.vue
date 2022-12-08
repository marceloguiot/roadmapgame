<script setup>
import { ref } from 'vue';
import {useIntervalFn} from '@vueuse/core';

const deg = ref(0);

const activePosition = ref(0);

useIntervalFn(() => {
  if (activePosition.value > -525) {
    activePosition.value -= 75;
  }
  else {
    activePosition.value = 0;
}
}, 200);

const rotar = () =>{
    deg.value = deg.value-60;
}
</script>
<template>
    <div class="w-full h-full flex flex-col">
        <div id="transition" style="width:850px; height:850px" @click="rotar()" class="m-auto" :style="{'background-image':'url(/assets/tablero.jpg)', 'transform': `rotate(${deg}deg)`}">
        

       
        </div>
        <div id="sprite" :style="{'background-position': `${activePosition}px 50%`}"></div>
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