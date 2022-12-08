<script setup>
import { useRouter, useRoute } from 'vue-router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
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

const cartas = ref([]);
onMounted(async () => {
   await axios.post('obtener.php',{tipo: 'cartasTodas'})
      .then(response => {
        const data = toRaw(response);
        cartas.value = data.data;
      })
})


const dealCards = ref(false)
const cartaActiva = ref('');
const cartaActivaData = ref([]);
const contenido = ref("<p><strong>Esperando contenido...</strong></p>");
const titulo = ref('');
const idCarta = ref('');
const tipoC = ref('');
const quill = ref(null);


const seleccionarCarta = async (id) =>{
  cartaActiva.value = id;
  await axios.post('obtener.php',{tipo: 'cartaActiva',id:id})
      .then(response => {
        const data = toRaw(response);
        cartaActiva.value = data.data;
        contenido.value = cartaActiva.value.es;
        titulo.value = cartaActiva.value.titulo;
        idCarta.value = cartaActiva.value.id;
        console.log(contenido.value);
        quill.value.setHTML(contenido.value);
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
 
    dealCards.value = true;
  }
  
}

const closeDeal = () =>
{
  dealCards.value = false;
}

const regresar = () =>{
router.push('/admin');
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
              <span class="text-slate-100 text-md md:text-2xl sm:text-sm md:p-8 sm:p-2">Editor de cartas</span>
          </div>
          <div class="flex flex-row items-center md:justify-between w-1/5 sm:justify-between md:w-1/5 sm:w-2/6">
            <span @click="regresar" class="text-slate-100 p-1 md:text-lg hover:cursor-pointer hover:text-slate-200">Regresar</span>
          </div>
        </div>
      </div>
    </nav>
    <div class="flex flex-row w-full gap-3">
    <div class="flex flex-col mt-5 w-3/4 lg:w-1/5 md:w-2/5 md:content-center sm:w-3/4 sm:content-center">
            <span @click="limpiar" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Nueva carta</span>
            <span @click="openModal"  class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Vista previa</span>
            <span @click="eliminarCarta" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Eliminar carta</span>
            <span  class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Guardar</span>
    </div>
    <div class="flex h-screen flex-col mt-5 md:w-3/5 sm:w-3/4">
        <span class="text-center font-semibold mt-2 text-slate-600">Contenido</span>
        <div class="mb-2">
            <label>Título:</label>
            <input type="text" class="border-2 ml-4" v-model="titulo"/>
        </div>
        <QuillEditor theme="snow" v-model:content="contenido" toolbar="full" contentType="html" ref="quill" class="w-full h-2/4" />
        <div class=" mt-5 md:w-full sm:w-full h-100 text-center bg-slate-300 p-2 rounded-md">
          <span class="mt-2 text-slate-600 font-semibold">Valores</span>
         
        </div>
    </div>

<div class=" mt-5 md:w-1/5 sm:w-full h-full text-center bg-slate-300 p-2 rounded-md">
          <span class="mt-2 text-slate-600 h-full font-semibold">Cartas</span>
          <div class="bg-white p-4 h-96 mt-1 grid grid-cols-1 overflow-y-scroll">
            <template v-for="cards in cartas">
            <div v-if="cards.sprint == 1" class="bg-green-500 hover:bg-green-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 2" class="bg-yellow-400 hover:bg-yellow-300 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 3" class="bg-cyan-500 hover:bg-cyan-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 4" class="bg-cyan-700 hover:bg-cyan-600 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else-if="cards.sprint == 5" class="bg-rose-500 hover:border-r-rose-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer" @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            <div v-else class="bg-orange-500 hover:bg-orange-400 h-16 text-white rounded-md p-1 mt-1 hover:cursor-pointer"  @click="seleccionarCarta(cards.id)">{{cards.titulo}}</div>
            </template>
  
          </div>
        </div></div></div>
          <!-- MODAL VISTA CARTAS-->
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
          <div><span class="order-1 object-left ml-96 mt-96 text-white hover:cursor-pointer">Voltear</span>
          <div class="border-8 broder-white bg-orange-400 -rotate-6 rounded-2xl shadow-xl">
            <div class="border-8 border-white bg-teal-800 rotate-12 rounded-2xl shadow-xl">
            <DialogPanel
              class= "w-full max-w-md -rotate-6 transform overflow-hidden rounded-2xl border-8 border-white  p-6 text-left align-middle shadow-xl transition-all bg-green-600">
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-white"
              >
                {{titulo}}
              </DialogTitle>
              
                <div class="mt-4 text-white"  v-bind:innerHTML="contenido">
            
                </div>
          
          

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeDeal"
                >
                  Cerrar
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