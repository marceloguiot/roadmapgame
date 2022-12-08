<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted} from 'vue'
import axios from 'axios'
import { isProxy, toRaw } from 'vue';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    Switch
  } from '@headlessui/vue'


const router = useRouter();
const route = useRoute();
var seleccion = [];

var sel1 = [];
var sel2 = [];
var sel3 = [];
var sel4 = [];
var sel5 = [];
var sel6 = [];



const id = route.params.partida;

const cartas = ref([]);
const cartasA = ref([]);
const equipos = ref([]);
onMounted(async () => {
  await axios.post('../obtener.php',{tipo: 'grupos', id: id})
      .then(response => {
        const data = toRaw(response);
        equipos.value = data.data[0].grupos; 
        
      })
})


const dealCards = ref(false);
const dealCards1 = ref(false);
const cartaActiva = ref('');
const cartaActivaData = ref([]);
const contenido = ref("<p><strong>Esperando contenido...</strong></p>");
const titulo = ref('');
const idCarta = ref('');
const tipoC = ref('');
const quill = ref(null);
const anverso = ref('');
const reverso = ref('');
const isrevers = ref(false);
const sprintact = ref('');

const isgreen = ref(false);
const isyellow = ref(false);
const iscyan = ref(false);
const iscyanmore = ref(false);
const isrose = ref(false);
const isorange = ref(false);

const equipoActual = ref('');


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

const limpiar = () =>
{
  contenido.value = '';
  titulo.value = '';
  idCarta.value = '';
  quill.value.setHTML('');
}

const eliminarCarta = async () =>
{
  if(idCarta.value = '')
  {
    alert('Seleccione una carta primero.');
  }
  else
  {
    var confirmar = confirm('¿Esta seguro de eliminar esta carta?');

    if(confirmar == true)
    {
      await axios.post('eliminar.php',{tipo: 'cartaActiva',id:idCarta.value})
      .then(response => {
       alert('Carta eliminada correctamente.');
      })
    }
    else
    {

    }
  }
  

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

const regresar = () =>{
router.push('/admin');
}


const verCartas = async () =>
{
if(sprintact.value == '')
{
  alert('Seleccione un Sprint para ver las cartas.');
}
else
{
  if(equipoActual.value == '')
  {
    alert('Seleccione un equipo para consultar las cartas.');
  }
  else
  {
    await axios.post('../obtener.php',{tipo: 'cartaDisp',sprint:sprintact.value,equipo:equipoActual.value})
      .then(response => {
        const data = toRaw(response);
        cartas.value = data.data;
      })
  }
}
}

const seleccionarEquipo = (id) =>
{
  equipoActual.value = id;
  verCartas();
}

const marcarCarta = (id) =>
{

 alert(equipoActual.value);

 if(sprintact.value == 1)
 {
    //let pos = sel1[equipoActual].indexOf(id);

    let pos = -1;
    if(pos == -1)
{

  sel1[equipoActual].push(id);

  console.log(sel1);

var element = document.getElementById(id);
  element.classList.add("bg-green-300");

 
  
}
else
{
  
  seleccion.splice(pos);

var element = document.getElementById(id);
  element.classList.remove("bg-green-300");
}
 }
 else
 {
  let pos = seleccion.indexOf(id);
 }
  






}
</script>
<template>
<div class="flex flex-col h-auto">
    
    <nav class="bg-green-600 justify-between">
      <div class="mx-auto px-2 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center md:justify-between">
          <div class="flex items-center w-2/4 md:w-full">
              <div id="banner" class="bg-slate-300 rounded-md p-2 shadow-md hidden md:block">
                <h2>
                Digital & bussiness model transformation
                </h2>
                <h1 class="lg:text-3xl md:text-lg sm:text-lg">
                THE ROADMAP
                </h1>
              </div>
              <span class="text-slate-100 text-md md:text-2xl sm:text-sm md:p-8 sm:p-2">Asignar cartas</span>
          </div>
          <div class="flex flex-row items-center md:justify-between w-1/5 sm:justify-between md:w-1/5 sm:w-2/6">
            <span @click="regresar" class="text-slate-100 p-1 md:text-lg hover:cursor-pointer hover:text-slate-200">Regresar</span>
          </div>
        </div>
      </div>
    </nav>
    <div class="flex flex-row w-full gap-3">
   
    <div class="flex h-screen flex-col mt-5 md:w-1/5 sm:w-2/4">
        <div class="flex flex-col w-full h-80 p-2 items-center">
        <span class="mb-8 font-semibold mt-2 text-slate-600">Equipos</span>
        <div v-for="equipo in equipos" class="w-full p-2 bg-sky-600 rounded-md shadow-md mb-4 hover:bg-sky-400 text-white hover:cursor-pointer" @click="seleccionarEquipo(equipo.id)">
        Equipo {{equipo.id_grupo}}</div>
      </div>
        <span @click="eliminarCarta" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Limpiar</span>
    </div>
    <div class="flex h-screen flex-col mt-5 p-2 md:w-1/5 sm:w-2/4">
        <span class="text-center font-semibold mt-2 text-slate-600">Sprints</span>
        <select class="mt-8 border rounded-md p-1 border-slate-800" v-model="sprintact" @change="verCartas()">
          <option value="">--SELECCIONE--</option>
          <option value="1">Sprint 1</option>
          <option value="2">Sprint 2</option>
          <option value="3">Sprint 3</option>
          <option value="4">Sprint 4</option>
          <option value="5">Sprint 5</option>
          <option value="6">Sprint 6</option>
        </select>
  
    </div>
    <div class=" mt-5 md:w-1/5 sm:w-full h-full text-center bg-slate-300 p-2 rounded-md">
          <span class="mt-2 text-slate-600 h-full font-semibold">Cartas seleccionadas</span>
          <div class="bg-white p-4 h-96 mt-1 grid grid-cols-1 overflow-y-scroll">
            <template v-for="cards in cartasA">
            <div v-if="cards.sprint == 1" class="bg-green-500 hover:bg-green-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 2" class="bg-yellow-400 hover:bg-yellow-300 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 3" class="bg-cyan-500 hover:bg-cyan-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 4" class="bg-cyan-700 hover:bg-cyan-600 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 5" class="bg-rose-500 hover:border-r-rose-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else class="bg-orange-500 hover:bg-orange-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer"  @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            </template>
  
          </div>
        </div>
<div class=" mt-5 md:w-2/5 sm:w-full h-full text-center bg-slate-300 p-2 rounded-md">
          <span class="mt-2 text-slate-600 h-full font-semibold">Cartas disponibles</span>
          <div class="bg-white p-4 h-96 mt-1 grid grid-cols-1 overflow-y-scroll">
            <template v-for="cards in cartas">
            <div v-if="cards.sprint == 1" class="bg-green-500 hover:bg-green-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col" @click="marcarCarta(cards.id)" :id="cards.id"><span class="text-right w-8 text-2xl"  @click="seleccionarCarta(cards.id)">+</span>{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 2" class="bg-yellow-400 hover:bg-yellow-300 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col" @click="marcarCarta(cards.id)" :id="cards.id"><span class="text-right w-8 text-2xl"  @click="seleccionarCarta(cards.id)">+</span>{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 3" class="bg-cyan-500 hover:bg-cyan-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col" @click="marcarCarta(cards.id)" :id="cards.id"><span class="text-right w-8 text-2xl"  @click="seleccionarCarta(cards.id)">+</span>{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 4" class="bg-cyan-700 hover:bg-cyan-600 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col" @click="marcarCarta(cards.id)" :id="cards.id"><span class="text-right w-8 text-2xl"  @click="seleccionarCarta(cards.id)">+</span>{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 5" class="bg-rose-500 hover:border-r-rose-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col" @click="marcarCarta(cards.id)" :id="cards.id"><span class="text-right w-8 text-2xl"  @click="seleccionarCarta(cards.id)">+</span>{{cards.titulo}}</div>
            <div v-else class="bg-orange-500 hover:bg-orange-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer flex flex-col"  @click="marcarCarta(cards.id)" :id="cards.id"><span class="text-right w-8 text-2xl"  @click="seleccionarCarta(cards.id)">+</span>{{cards.titulo}}</div>
            </template>
  
          </div>
        </div>
      </div></div>
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