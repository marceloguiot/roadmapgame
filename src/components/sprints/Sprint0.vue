<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, defineEmits} from 'vue'
import axios from 'axios'
import { isProxy, toRaw } from 'vue'

const router = useRouter();


const emit = defineEmits(['pasarSprint']);

const lang = ref('ing');

const f1v1 = ref(4);
const f1v2 = ref(4);
const f1v3 = ref(4);
const f1v4 = ref(4);
const f1v5 = ref(4);

const f2v1 = ref(4);
const f2v2 = ref(4);
const f2v3 = ref(4);
const f2v4 = ref(4);
const f2v5 = ref(4);


const f3v1 = ref(4);
const f3v2 = ref(4);
const f3v3 = ref(4);
const f3v4 = ref(4);
const f3v5 = ref(4);

const f4v1 = ref(4);
const f4v2 = ref(4);
const f4v3 = ref(4);
const f4v4 = ref(4);
const f4v5 = ref(4);

const f5v1 = ref(4);
const f6v1 = ref(4);
const f7v1 = ref(4);
const f8v1 = ref(4);
const f9v1 = ref(4);

const f8text = ref('');
const f9text = ref('');

const guardarForces = async () =>{
    await axios.post('guardar.php',{tipo: 'forcesport',f1v1: f1v1.value,f1v2: f1v2.value,f1v3: f1v3.value,f1v4: f1v4.value,f1v5: f1v5.value,f2v1: f2v1.value,f2v2: f2v2.value,f2v3: f2v3.value,f2v4: f2v4.value,f2v5: f2v5.value,f3v1: f3v1.value,f3v2: f3v2.value,f3v3: f3v3.value,f3v4: f3v4.value,f3v5: f3v5.value,f4v1: f4v1.value,f4v2: f4v2.value,f4v3: f4v3.value,f4v4: f4v4.value,f4v5: f4v5.value, f5v1: f5v1.value, f6v1: f6v1.value, f7v1: f7v1.value,f8v1: f8v1.value, f9v1: f9v1.value,f8text: f8text.value, f9text: f9text.value})
      .then(response => {
        const data = toRaw(response);

        emit("pasarSprint",1);
        
      })

      
}







</script>
<template>
<div class="flex flex-col w-full h-full">
    <div class="flex flex-row w-full h-11 bg-green-500 border-4 items-center border-slate-900 shadow-lg">
        
        <div class="bg-slate-700 ml-0 rounded-t-none rounded-md h-40 w-1/5 p-2 shadow-lg">
            
        
          </div>
    
    <span class="text-white items-center ml-10">
        Sprint 0
    </span>

</div>
    <div class="items-center m-auto w-3/4 mt-32">
        <span>Español</span>
        <span>Ingles</span>
    <div class="justify-center">
        <span class="text-2xl">Porter/s Five Forces</span>
        <div class="bg-slate-200 mt-4 p-4 shadow-xl w-full h-auto">
            <span class="p-2 border bg-slate-300 h-12 text-lg">Factor 1: Threat of Value Appropriation by Customers</span>
            <div class="grid grid-cols-1 bg-white gap-y-1 p-2">
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center" ><span class="w-2/4">Size of key customers</span> <input id="default-range" type="range" v-model="f1v1" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f1v1}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Price sensivility</span><input id="default-range" type="range" v-model="f1v2" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f1v2}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Switching costs (technicals)</span><input id="default-range" type="range" v-model="f1v3" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f1v3}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Switching costs (brand)</span><input id="default-range" type="range" v-model="f1v4" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f1v4}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Ability to backward integrate</span><input id="default-range" type="range" v-model="f1v5" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f1v5}}</span></div>
            </div>

        </div>

        <div class="bg-slate-200 p-4 shadow-xl w-full h-auto">
            <span class="p-2 border bg-slate-300 h-12 text-lg">Factor 2: Threat of Value Appropriation by Suppliers</span>
            <div class="grid grid-cols-1 bg-white gap-y-1 p-2">
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center" ><span class="w-2/4">Size of key customers</span> <input id="default-range" type="range" v-model="f2v1" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f2v1}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Price sensivility</span><input id="default-range" type="range" v-model="f2v2" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f2v2}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Switching costs (technicals)</span><input id="default-range" type="range" v-model="f2v3" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f2v3}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Switching costs (brand)</span><input id="default-range" type="range" v-model="f2v4" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f2v4}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Ability to forward integrate</span><input id="default-range" type="range" v-model="f2v5" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f2v5}}</span></div>
            </div>

        </div>


        <div class="bg-slate-200 p-4 shadow-xl w-full h-auto">
            <span class="p-2 border bg-slate-300 h-12 text-lg">Factor 3: Rivalry Among Competitions</span>
            <div class="grid grid-cols-1 bg-white gap-y-1 p-2">
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center" ><span class="w-2/4">Number of effective competitors</span> <input id="default-range" type="range" v-model="f3v1" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f3v1}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Market growth</span><input id="default-range" type="range" v-model="f3v2" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f3v2}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Degree of diferentiation</span><input id="default-range" type="range" v-model="f3v3" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f3v3}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Stragegic stakes</span><input id="default-range" type="range" v-model="f3v4" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f3v4}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Patents protected profits</span><input id="default-range" type="range" v-model="f3v5" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f3v5}}</span></div>
            </div>

        </div>

        <div class="bg-slate-200 p-4 shadow-xl w-full h-auto">
            <span class="p-2 border bg-slate-300 h-12 text-lg">Factor 4: Barriers to Entry</span>
            <div class="grid grid-cols-1 bg-white gap-y-1 p-2">
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center" ><span class="w-2/4">Number of effective competitors</span> <input id="default-range" type="range" v-model="f4v1" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f4v1}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Market growth</span><input id="default-range" type="range" v-model="f4v2" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f4v2}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Degree of diferentiation</span><input id="default-range" type="range" v-model="f4v3" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f4v3}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Stragegic stakes</span><input id="default-range" type="range" v-model="f4v4" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f4v4}}</span></div>
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center"><span class="w-2/4">Patents protected profits</span><input id="default-range" type="range" v-model="f4v5" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f4v5}}</span></div>
            </div>

        </div>

        <div class="bg-slate-200 p-4 shadow-xl w-full h-auto">
            <span class="p-2 border bg-slate-300 h-12 text-lg">Factor 5: Subtitutes</span>
            <div class="grid grid-cols-1 bg-white gap-y-1 p-2">
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center" ><span class="w-2/4">Availability of close subtitues for products or services</span> <input id="default-range" type="range" v-model="f5v1" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f5v1}}</span></div>
            </div>

        </div>

        <div class="bg-slate-200 p-4 shadow-xl w-full h-auto">
            <span class="p-2 border bg-slate-300 h-12 text-lg">Factor 6: Regulatory Factors</span>
            <div class="grid grid-cols-1 bg-white gap-y-1 p-2">
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center" ><span class="w-2/4">Impact regulatory changes</span> <input id="default-range" type="range" v-model="f6v1" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f6v1}}</span></div>
            </div>

        </div>

        <div class="bg-slate-200 p-4 shadow-xl w-full h-auto">
            <span class="p-2 border bg-slate-300 h-12 text-lg">Factor 7: Complementors</span>
            <div class="grid grid-cols-1 bg-white gap-y-1 p-2">
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center" ><span class="w-2/4">Others firms have exclusive relationships with complementors vs. we have these relationships</span> <input id="default-range" type="range" v-model="f7v1" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f7v1}}</span></div>
            </div>

        </div>

        <div class="bg-slate-200 p-4 shadow-xl w-full h-auto">
            <span class="p-2 border bg-slate-300 h-12 text-lg">Factor 8: Opcional</span>
            <div class="grid grid-cols-1 bg-white gap-y-1 p-2">
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center" ><input type="text" v-model="f8text" class="w-2/5 border-2 border-slate-700" /> <input id="default-range" type="range" v-model="f8v1" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f8v1}}</span></div>
            </div>

        </div>


        <div class="bg-slate-200 p-4 shadow-xl w-full h-auto">
            <span class="p-2 border bg-slate-300 h-12 text-lg">Factor 9: Opcional</span>
            <div class="grid grid-cols-1 bg-white gap-y-1 p-2">
            <div class="p-2 border border-slate-700 flex flex-row justify-between items-center" ><input type="text" v-model="f9text" class="w-2/5 border-2 border-slate-700" /> <input id="default-range" type="range" v-model="f9v1" min="1" max="7" class="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /><span>{{f9v1}}</span></div>
            </div>

        </div>

    </div>
    <div class="flex flex-row mb-5">
       
        <div @click="guardarForces" class="flex w-32 p-1 m-auto mt-10 h-8 bg-green-400 rounded-md shadow-md text-white justify-center hover:cursor-pointer items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
        </div>

    </div>
    </div>
   
    
   </div>
</template>
<style>
</style>