<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted} from 'vue'
import axios from 'axios'
import { isProxy, toRaw } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    Switch
  } from '@headlessui/vue'
import column from './column.vue'

const router = useRouter()
const route = useRoute();

const id = route.params.id;
const cartas = ref([]);
const actualSprint = ref(1);

onMounted(async () => {
   await axios.post('../obtener.php',{tipo: 'fisico',equipo:id})
      .then(response => {
        const data = toRaw(response);
        cartas.value = data.data[0].cartas;
        actualSprint.value = data.data[0].sprint_act;
      })
})

const sprint1 = ref(0);
const sprint2 = ref(0);
const sprint3 = ref(0);
const sprint4 = ref(0);
const sprint5 = ref(0);
const sprint6 = ref(0);
const dealCards = ref(false);
const dealCards1 = ref(false);
const isgreen = ref(false);
const isyellow = ref(false);
const iscyan = ref(false);
const iscyanmore = ref(false);
const isrose = ref(false);
const isorange = ref(false);
const cartaActiva = ref('');
const contenido = ref('');
const anverso = ref('');
const reverso = ref('');
const isrevers = ref(false);
const titulo = ref('');
const idCarta = ref('');

var seleccion = [];



const verchart = () =>{
  router.push('/column');
}

const openModal = () =>
{
  if(cartaActiva.value = '')
  {
    alert('Seleccione una carta a visualizar.');
  }
  else
  {
    dealCards1.value = false;
    dealCards.value = true;
  }
  
}


const openModal1 = () =>
{
 
  dealCards.value = false;
    dealCards1.value = true;
    
  
  
}

const closeDeal = () =>
{
  dealCards.value = false;
}

const closeDeal1 = () =>
{
  dealCards1.value = false;
}


const seleccionarCarta = async (id) =>{
  cartaActiva.value = id;
  await axios.post('../obtener.php',{tipo: 'cartaActiva',id:id})
      .then(response => {
        const data = toRaw(response);
        cartaActiva.value = data.data;
        contenido.value = cartaActiva.value.es;
        console.log(cartaActiva.value);
        let vistas = cartaActiva.value.es.split("--o--");
        anverso.value = vistas[0];
        reverso.value = vistas[1];
        let encontrado = cartaActiva.value.es.indexOf("--o--");
        if(encontrado == -1)
        {
          isrevers.value = false;
        }
        else
        {
          isrevers.value = true;
        }
        if(cartaActiva.value.sprint == 1)
        {
          isgreen.value = true;
          isyellow.value = false;
          iscyan.value = false;
          iscyanmore.value = false;
          isrose.value = false;
          isorange.value = false;
        }
        else if(cartaActiva.value.sprint == 2)
        {
          isyellow.value = true;
          isgreen.value = false;
          iscyan.value = false;
          iscyanmore.value = false;
          isrose.value = false;
          isorange.value = false;
        }
        else if(cartaActiva.value.sprint == 3)
        {
          iscyan.value = true;
          isyellow.value = false;
          isgreen.value = false;
          iscyanmore.value = false;
          isrose.value = false;
          isorange.value = false;
        }
        else if(cartaActiva.value.sprint == 4)
        {
          iscyanmore.value = true;
          isyellow.value = false;
          iscyan.value = false;
          isgreen.value = false;
          isrose.value = false;
          isorange.value = false;
        }
        else if(cartaActiva.value.sprint == 5)
        {
          isrose.value = true;
          isyellow.value = false;
          iscyan.value = false;
          iscyanmore.value = false;
          isgreen.value = false;
          isorange.value = false;
        }
        else if(cartaActiva.value.sprint == 6)
        {
          isorange.value = true;
          isyellow.value = false;
          iscyan.value = false;
          iscyanmore.value = false;
          isrose.value = false;
          isgreen.value = false;
        }
       
        titulo.value = cartaActiva.value.titulo;
        idCarta.value = cartaActiva.value.id;
        openModal();
      })
}


const marcarCarta = (id) =>
{
  
let pos = seleccion.indexOf(id);
if(pos == -1)
{

  let length = seleccion.length;
  if(length > 1)
  {
alert('Solo tiene permitidos dos movimientos.');
  }
  else
{
  seleccion.push(id);

var element = document.getElementById(id);
  element.classList.add("bg-green-300");
}
 
  
}
else
{
  
  seleccion.splice(pos);

var element = document.getElementById(id);
  element.classList.remove("bg-green-300");
}


}


const guardarSprint = async () =>
{
  var confirmar = confirm('Esta seguro que desea guardar este Sprint');
  if(confirmar == true)
  {
    
    await axios.post('../guardar.php',{tipo: 'sprint_fisico',equipo:id,sprint:actualSprint.value})
      .then(response => {
        const data = toRaw(response);
        cartas.value = data.data[0].cartas;
        actualSprint.value = data.data[0].sprint_act;
        seleccion.length = 0;
      })
  }
  else
  {

  }
}
</script>
<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex flex-row w-full h-11 bg-green-500 border-4 items-center border-slate-900 shadow-lg">
        
        <div class="bg-slate-700 ml-0 rounded-t-none rounded-md h-40 w-1/5 p-2 shadow-lg">
            
        
          </div>
    
    <span class="text-white items-center ml-10">
        Partida presencial
    </span>

</div>
<div class="flex w-full mt-24 justify-center">
<span class="text-2xl font-semibold">Seleccione sus cartas jugadas</span>

</div>
<div class="flex flex-row w-full mt-16 rounded-md justify-evenly">
  <div class="flex flex-col w-1/4 justify-center">
    <label class="text-lg text-center mt-4 font-semibold">Sprint</label>
  <div class="flex items-center flex-col mt-4 w-full h-40 justify-center shadow-lg  border-slate-400 border-8 rounded-md" >
    <span class="mt-3 text-3xl">{{actualSprint}}</span>
    <span class="mt-4 text-xl font-semibold">Puntos</span>
    <span>0</span>
  </div>
</div>
  <div class="flex flex-col w-2/4 justify-center">
  <label class="text-lg text-center mt-4 font-semibold">Cartas asignadas</label>
  <div  class="flex flex-row mt-4 h-40 w-full shadow-lg  border-slate-400 border-8 rounded-md">
    
    <div class="max-h-60 mt-1 p-1 grid grid-cols-4 gap-4 overflow-y-scroll">
    <template v-for="cards in cartas" class="text-center">
            <div v-if="cards.sprint == 1" class="bg-green-500 hover:bg-green-400 h-28 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col"><span class="text-right text-2xl"  @click="seleccionarCarta(cards.id)">+</span><span @click="marcarCarta(cards.id)" :id="cards.id">{{cards.titulo}}</span></div>
            <div v-else-if="cards.sprint == 2" class="bg-yellow-400 hover:bg-yellow-300 h-28 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col"><span class="text-right text-2xl"  @click="seleccionarCarta(cards.id)">+</span><span @click="marcarCarta(cards.id)" :id="cards.id">{{cards.titulo}}</span></div>
            <div v-else-if="cards.sprint == 3" class="bg-cyan-500 hover:bg-cyan-400 h-28 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col"><span class="text-right text-2xl"  @click="seleccionarCarta(cards.id)">+</span><span @click="marcarCarta(cards.id)" :id="cards.id">{{cards.titulo}}</span></div>
            <div v-else-if="cards.sprint == 4" class="bg-cyan-700 hover:bg-cyan-600 h-28 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col"><span class="text-right text-2xl"  @click="seleccionarCarta(cards.id)">+</span><span @click="marcarCarta(cards.id)" :id="cards.id">{{cards.titulo}}</span></div>
            <div v-else-if="cards.sprint == 5" class="bg-rose-500 hover:border-r-rose-400 h-28 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col"><span class="text-right text-2xl"  @click="seleccionarCarta(cards.id)">+</span><span @click="marcarCarta(cards.id)" :id="cards.id">{{cards.titulo}}</span></div>
            <div v-else class="bg-orange-500 hover:bg-orange-400 h-28 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col"><span class="text-right text-2xl"  @click="seleccionarCarta(cards.id)">+</span><span @click="marcarCarta(cards.id)" :id="cards.id">{{cards.titulo}}</span></div>
    </template>
  </div>
  </div>
</div>

</div>
  
  <div class="flex justify-evenly">
    <div><button class="mt-12 p-2 h-12 rounded-md bg-yellow-400 font-bold text-white" @click="verchart">Estado de la empresa</button></div>
    <div><button class="mt-12 p-2 h-12 rounded-md bg-green-600 font-bold hover:bg-green-500 text-white" @click="guardarSprint()">Guardar</button></div>
  </div>
      </div>
 
 
 <!-- MODAL VISTA ANVERSO CARTAS-->
 <TransitionRoot appear :show="dealCards" as="template">
    <Dialog as="div" @close="closeDeal" class="relative z-10">
      
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>
      
      <div class="fixed inset-0 overflow-y-auto">
    

        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
          <div>
          <div class="border-8 broder-white bg-orange-400 -rotate-6 rounded-2xl shadow-xl">
            <div class="border-8 border-white bg-teal-800 rotate-12 rounded-2xl shadow-xl">
            <DialogPanel
              class= "w-full max-w-md -rotate-6 transform overflow-hidden rounded-2xl border-8 border-white  p-6 text-left align-middle shadow-xl transition-all"
              :class="{'bg-green-500': isgreen, 'bg-yellow-600': isyellow, 'bg-cyan-500': iscyan, 'bg-cyan-700': iscyanmore, 'bg-rose-500': isrose, 'bg-orange-500': isorange}"
              >
              <DialogTitle
                as="h3"
                class="flex text-lg font-medium leading-6 text-white justify-between"
              >
                <span>{{titulo}}</span>
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeDeal"
                >
                  Cerrar
                </button>
              </DialogTitle>
              
                <div class="mt-4 text-white"  v-bind:innerHTML="anverso">
            
                </div>
          
          

              <div class="mt-4 flex justify-center">
               
                <button
                v-show="isrevers"
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="openModal1"
                >
                  Girar
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
        </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- FIN MODAL VISTA CARTAS -->

          <!-- MODAL VISTA REVERSO CARTAS-->
          <TransitionRoot appear :show="dealCards1" as="template">
    <Dialog as="div" @close="closeDeal1" class="relative z-10">
      
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>
      
      <div class="fixed inset-0 overflow-y-auto">
    

        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
          <div>
          <div class="border-8 broder-white bg-orange-400 -rotate-6 rounded-2xl shadow-xl">
            <div class="border-8 border-white bg-teal-800 rotate-12 rounded-2xl shadow-xl">
            <DialogPanel
              class= "w-full max-w-md -rotate-6 transform overflow-hidden rounded-2xl border-8 border-white  p-6 text-left align-middle shadow-xl transition-all"
              :class="{'bg-green-500': isgreen, 'bg-yellow-600': isyellow, 'bg-cyan-500': iscyan, 'bg-cyan-700': iscyanmore, 'bg-rose-500': isrose, 'bg-orange-500': isorange}">
              <DialogTitle
                as="h3"
                class="flex text-lg font-medium leading-6 text-white justify-between"
              >
                <span>{{titulo}}</span>
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeDeal1"
                >
                  Cerrar
                </button>
              </DialogTitle>
              
                <div class="mt-4 text-white"  v-bind:innerHTML="reverso">
            
                </div>
          
          

              <div class="mt-4 flex justify-center">
                
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="openModal"
                >
                  Girar
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
        </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- FIN MODAL VISTA CARTAS -->
    
</template>
<style>
</style>