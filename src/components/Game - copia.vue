<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref} from 'vue'
import axios from 'axios'
import { isProxy, toRaw } from 'vue'
import Sprint1 from './sprints/Sprint1.vue'
import Sprint2 from './sprints/Sprint2.vue'
import Sprint3 from './sprints/Sprint3.vue'
import Sprint4 from './sprints/Sprint4.vue'
import Sprint5 from './sprints/Sprint5.vue'
import Sprint6 from './sprints/Sprint6.vue'
import Sprint0 from './sprints/Sprint0.vue'
import column from './column.vue'

const router = useRouter()

const actualSprint = ref('Sprint0');

const sprints = {
    Sprint0,
    Sprint1,
    Sprint2,
    Sprint3,
    Sprint4,
    Sprint5,
    Sprint6
}

const verchart = () =>{
  router.push('/column');
}

</script>
<template>
 
 <component :is="sprints[actualSprint]"></component>
 <button class="bg-yellow-500 text-white p-2 rounded-md shadow-md mr-3"
       v-for="(_, sprint) in sprints"
       :key="sprint"
       :class="tab-button"
       @click="actualSprint = sprint"
     >
      {{ sprint }}
    </button>
    <button @click="verchart">ir a charts</button>
</template>
<style>
</style>