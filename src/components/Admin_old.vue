<script setup>
 import { ref, onMounted} from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    Switch
  } from '@headlessui/vue'
  import { useRouter, useRoute } from 'vue-router'
  import axios from 'axios'
  import { isProxy, toRaw } from 'vue';

  const route = useRoute()
  const router = useRouter()

  onMounted(async () => {
   await axios.post('obtener.php',{tipo: 'partidas'})
      .then(response => {
        const data = toRaw(response);
        partidas.value = data.data;
      })
})





  const enabled = ref(false)
  const enabled_team = ref(false)
  const enabled_team2 = ref(false)
  const enabled_team3 = ref(false)
  const enabled_team4 = ref(false)
  const enabled_team5 = ref(false)
  const enabled_team6 = ref(false)
  const enabled_team7 = ref(false)

  //VARIABLES DE PARTIDA

  const partida = ref(
      {
      nombre_partida: "",
      fecha_inicio: "",
      fecha_termino: "",
      canvas: "",
      sprints: "",
      estado: "",
      idioma: "",
      tipo: "partida"
      }
    )


  //VARIABLES ASIGNAR CARTAS
  const tsc1 = ref();
  const tsc2 = ref();
  const tsc3 = ref();
  const tsc4 = ref();
  const tsc5 = ref();
  const tsc6 = ref();

  const ms1 = ref(2);
  const ms2 = ref(2);
  const ms3 = ref(2);
  const ms4 = ref(2);
  const ms5 = ref(2);
  const ms6 = ref(2);


  //VARIABLES A RECORRER

  const partidas = ref([]);
  const equipos = ref([]);
  const jugadores = ref([]);

  const partida_actual = ref("");
  const equipo_actual = ref("");

  const puntaje1 = ref(0);
  const puntaje2 = ref(0);
  const puntaje3 = ref(0);
  const puntaje4 = ref(0);
  const puntaje5 = ref(0);

  const nteam1 = ref("Equipo 1");
  const nteam2 = ref("Equipo 2");
  const nteam3 = ref("Equipo 3");
  const nteam4 = ref("Equipo 4");
  const nteam5 = ref("Equipo 5");

  const passt1 = ref("Team 1");
  const passt2 = ref("Team 2");
  const passt3 = ref("Team 3");
  const passt4 = ref("Team 4");
  const passt5 = ref("Team 5");


  const inputJugador = ref('');



  //TERMINA VARIABLES

  const isOpen = ref(false)
  const loadPlayers = ref(false)
  const loadGroups = ref(false)
  const dealCards = ref(false)

const asignar = () =>{
  dealCards.value = false;
}
const logOut = () =>
{
  router.push('/')
}

function setIsOpen(value) {
  isOpen.value = value
}
function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
function closePlayers() {
  loadPlayers.value = false
}
function openPlayers() {
  loadPlayers.value = true
}
async function closeGroups (){
  if(partida_actual.value == '')
  {
    alert('Seleccione una partida para continuar.');
    loadGroups.value = false
  }
  else
  {
    await axios.post('guardar.php',{tipo: 'equipos', partida: partida_actual.value, nombre1: nteam1.value, nombre2: nteam2.value, nombre3: nteam3.value, nombre4: nteam4.value, nombre5: nteam5.value, pass1: passt1.value, pass2: passt2.value, pass3: passt3.value, pass4: passt4.value, pass5: passt5.value})
      .then(response => {
        /*const data = toRaw(response);
        jugadores.value = data.data;
        */
              
      })

    loadGroups.value = false
  }
  
}
function openGroups() {
  loadGroups.value = true
}


function openDeal()
{
  dealCards.value = true;
}

function closeDeal()
{
  dealCards.value = false;
}

const eliminarPartida = async (id) =>
{
  var delp = confirm('¿Esta seguro que desea eliminar esta partida?');
  if(delp == true)
  {
    await axios.post('eliminar.php',{tipo: 'partidas', id: id})
      .then(response => {
        const data = toRaw(response);
        partidas.value = data.data;
      })
  }
  else
  {

  }
  
}

const obtenerEquipos = async (id) =>
{
  partida_actual.value = id;
  equipo_actual.value = '';
  jugadores.value = [];
  await axios.post('obtener.php',{tipo: 'grupos', id: id})
      .then(response => {
        const data = toRaw(response);
        equipos.value = data.data;
        console.log(data.data);
        
        if(typeof(data.data[0]) != 'undefined')
        {
          puntaje1.value = data.data[0].puntos;
        }
        else
        {
          puntaje1.value = 0;
        }

        if(typeof(data.data[1]) != 'undefined')
        {
          puntaje2.value = data.data[1].puntos;
        }
        else
        {
          puntaje2.value = 0;
        }
      

        if(typeof(data.data[2]) != 'undefined')
        {
          puntaje3.value = data.data[2].puntos;
        }
        else
        {
          puntaje3.value = 0;
        }
      

        if(typeof(data.data[3]) != 'undefined')
        {
          puntaje4.value = data.data[3].puntos;
        }
        else
        {
          puntaje4.value = 0;
        }
      

        if(typeof(data.data[4]) != 'undefined')
        {
          puntaje5.value = data.data[4].puntos;
        }
        else
        {
          puntaje5.value = 0;
        }
      
      
        
        
      })
}

const asignarCartas = async () =>{
  if(equipo_actual.value == '')
  {
    alert('Seleccione un grupo para continuar.');
  }
  else
  {

    await axios.post('obtener.php',{tipo: 'cartas'})
      .then(response => {
        const data = toRaw(response);
        tsc1.value = data.data[0].c1;
        tsc2.value = data.data[0].c2;
        tsc3.value = data.data[0].c3;
        tsc4.value = data.data[0].c4;
        tsc5.value = data.data[0].c5;
        tsc6.value = data.data[0].c6;
              
      })
    openDeal();


  }
}


const guardarJugador = async () =>
{
  console.log(inputJugador.value);
  if(inputJugador.value == '' || inputJugador.value == ' ')
  {
    alert('Ingrese un nombre de jugador para continuar');
  }
  else if(partida_actual.value == '' || equipo_actual.value == '')
  {
    alert('Seleccione una partida y un equipo para agregar jugadores.');
  }
  else
  {
    await axios.post('guardar.php',{tipo: 'jugadores', nombre: inputJugador.value, equipo: equipo_actual.value, partida: partida_actual.value})
      .then(response => {
        const data = toRaw(response);
        jugadores.value = data.data;
              
      })
  }
}


const eliminarJugador = async (id) =>{
  var eliminp = confirm('¿Esta seguro de eliminar este jugador?');
  if(eliminp == true)
  {
    await axios.post('eliminar.php',{tipo: 'jugadores', id: id})
      .then(response => {
        const data = toRaw(response);
        jugadores.value = data.data;
        console.log(data.data);

        
      })
  }
  else
  {

  }
}

const obtenerJugadores = async (id) =>{

  equipo_actual.value = id;

  await axios.post('obtener.php',{tipo: 'jugadores', id: id})
      .then(response => {
        const data = toRaw(response);
        jugadores.value = data.data;
        console.log(data.data);

        
      })
}


const guardarPartida = async () =>{
  const rawObject = toRaw(partida);
  if(rawObject.value.nombre_partida == '')
  {
    alert('El nombre no puede estar vacio.');
  }
  else
  {
    if(rawObject.value.fecha_inicio == '')
    {
      alert('Ingrese la fecha de inicio de la partida.');
    }
    else
    {
      if(rawObject.value.fecha_termino == '')
      {
        alert('Ingrese la fecha de término de la partida.');
      }
      else
      {
          if(rawObject.value.fecha_inicio > rawObject.value.fecha_termino)
          {
            alert('La fecha de inicio no puede ser posterior a la de termino.');
          }
          else
          {
            if(rawObject.value.sprints == '')
            {
              alert('Seleccione el último sprint para esta partida.');
            }
            else
            {
              if(rawObject.value.estado == '')
            {
              
              alert('Seleccione el estado para esta partida.');
            }
            else
            {
              if(rawObject.value.idioma == '')
              {
                alert('Seleccione el idioma para esta partida.');
              }
              else
              {

                axios.post('http://mguiot.online/guardar.php', {
                  nombre : rawObject.value.nombre_partida,
                  fecha : rawObject.value.fecha_inicio,
                  fechat : rawObject.value.fecha_termino,
                  sprints : rawObject.value.sprints,
                  estado : rawObject.value.estado,
                  idioma : rawObject.value.idioma,
                  tipo : 'partida'
                })
                 .then((res) => {
                    alert('La partida se guardo correctamente.');
                    axios.post('obtener.php',{tipo: 'partidas'})
      .then(response => {
        const data = toRaw(response);
        partidas.value = data.data;
      })
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                 })


              }
            }
            }
           

          }
      }
    }

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
                <span class="text-slate-100 text-md md:text-2xl sm:text-sm md:p-8 sm:p-2">Administrador de juego</span>
            </div>
            <div class="flex flex-row items-center md:justify-between w-1/5 sm:justify-between md:w-1/5 sm:w-2/6">
              <span class="text-slate-100 p-1 md:text-lg hover:cursor-pointer hover:text-slate-200">Config</span>
              <span class="text-slate-100 p-1 md:text-3xl">0:00:00</span>
              <span @click="logOut" class="text-slate-100 p-1 md:text-lg hover:cursor-pointer hover:text-slate-200">Salir</span>
            </div>
          </div>
        </div>
      </nav>

    <div class="flex flex-col items-center md:items-start md:flex-row w-full mt-5">
        <div class="flex flex-col w-3/4 lg:w-1/5 md:w-2/5 md:content-center sm:w-3/4 sm:content-center">
            <span @click="openModal" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Nueva partida</span>
            <span @click="openPlayers" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Cargar jugadores</span>
            <span @click="openGroups" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Grupos</span>
            <span @click="asignarCartas" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Asignar cartas</span>
            <span class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Editor de cartas</span>
        </div>
        <div class="lg:w-1/2 md:w-3/4 text-center bg-slate-100 mt-2 mx-2 p-2 rounded-md">
            <span class="text-center font-semibold mt-2 text-slate-600">Partidas</span>
            <div v-for="item in partidas" class="grid grid-cols-5 items-center grid-flow-col gap-1 h-16 md:h-8 mt-3 bg-white hover:bg-slate-500 hover:text-slate-100 hover:cursor-pointer">
                <div> 
                  <Switch
                    v-model="enabled"
                    :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch>
            </div>
                <span @click="obtenerEquipos(item.id)" class="text-xs">{{item.nombre}}</span>
                <span @click="obtenerEquipos(item.id)" class="text-xs">{{item.fecha}} - {{item.fechat}}</span>
                <span @click="obtenerEquipos(item.id)" class="text-xs">{{item.max_sprints}}</span>
                <span @click="eliminarPartida(item.id)" class="text-xs" >X</span>
            </div>
        </div>

        
        <div class="lg:w-1/2 md:w-3/4 text-center bg-slate-100 m-2 p-2 rounded-md">
            <span class="mt-2 font-semibold text-slate-600">Grupos</span>
            <div @click="obtenerJugadores(equipos[0].id_grupo)" class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-cyan-500 hover:cursor-pointer hover:text-slate-100">
                <Switch
    v-model="enabled_team"
    :class="enabled_team ? 'bg-emerald-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled_team ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch>  <span class="font-semibold">Equipo 1</span>
  <span></span>
               <span></span>
               <span class="font-semibold">Puntos: {{puntaje1}}</span>
               
            </div>
            <div @click="obtenerJugadores(equipos[1].id_grupo)"  class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-cyan-500 hover:cursor-pointer hover:text-slate-100">
                <Switch
    v-model="enabled_team2"
    :class="enabled_team2 ? 'bg-emerald-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled_team2 ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch>  <span class="font-semibold">Equipo 2</span>
               <span></span>
               <span></span>
               <span class="font-semibold">Puntos: {{puntaje2}}</span>
            </div>
            <div @click="obtenerJugadores(equipos[2].id_grupo)"  class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-cyan-500 hover:cursor-pointer hover:text-slate-100">
                <Switch
    v-model="enabled_team3"
    :class="enabled_team3 ? 'bg-emerald-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled_team3 ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch>     <span class="font-semibold">Equipo 3</span>
  <span></span>
               <span></span>
               <span class="font-semibold">Puntos: {{puntaje3}}</span>
               
            </div>
            <div @click="obtenerJugadores(equipos[3].id_grupo)"  class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-cyan-500 hover:cursor-pointer hover:text-slate-100">
                <Switch
    v-model="enabled_team4"
    :class="enabled_team4 ? 'bg-emerald-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled_team4 ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch>    <span class="font-semibold">Equipo 4</span>
  <span></span>
               <span></span>
               <span class="font-semibold">Puntos: {{puntaje4}}</span>
               
            </div>
            <div @click="obtenerJugadores(equipos[4].id_grupo)"  class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-cyan-500 hover:cursor-pointer hover:text-slate-100">
                <Switch
    v-model="enabled_team5"
    :class="enabled_team5 ? 'bg-emerald-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled_team5 ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch>     <span class="font-semibold">Equipo 5</span>
  <span></span>
               <span></span>
               <span class="font-semibold">Puntos: {{puntaje5}}</span>
               
            </div>


        </div>

    </div>
    <div class="flex flex-col md:flex-row sm:flex-col mt-4 text-center gap-2">
        <div class="md:w-1/5 sm:w-3/4 bg-lime-600 p-1.5 rounded-md">
        <span class="text-slate-100 font-medium">Control de sprints</span>
        <div class="grid grid-rows p-1 mt-1 bg-slate-200">
                <select class="m-1 rounded-sm border-2">
                  <option value="1">Sprint 1</option>
                  <option value="2">Sprint 2</option>
                  <option value="3">Sprint 3</option>
                  <option value="4">Sprint 4</option>
                  <option value="5">Sprint 5</option>
                  <option value="6">Sprint 6</option>
                </select>
                <div class="flex flex-row gap-2 p-2">
                  <input type="text" class="w-1/4 text-center" placeholder="00" />
                  <input type="text" class="w-1/4 text-center" placeholder="00"/>
                  <button class="bg-slate-700 p-1 w-1/3 text-slate-100 rounded-md hover:bg-slate-600">Iniciar</button>
                </div>
                
            </div>
        </div>
        <div class="md:w-1/5 sm:w-3/4 bg-amber-600 p-1.5 rounded-md">
            <span class="text-slate-100 font-medium text-center">Jugadores</span>
            <div class="flex flex-col  text-left justify-between gap-1 p-1 h-100 mt-1 bg-slate-200">
                <div v-for="item in jugadores" class="flex flex-row justify-between"><span class="text-slate-700 ml-2">{{item.nombre}}</span><span class="mr-3 hover:cursor-pointer font-bold" @click="eliminarJugador(item.id)">X</span></div>
            </div>
                <div class="mt-2">
                  <input type="text" v-model="inputJugador" id="jugadorNuevo" class="border-2 w-2/4" />
                  <span @click="guardarJugador" class="bg-slate-200 text-sm p-1 rounded-sm ml-4 hover:cursor-pointer hover:bg-slate-400">Agregar</span>
                </div>
        </div>

        <div class="md:w-3/4 sm:w-full h-100 text-center bg-slate-300 p-2 rounded-md">
          <span class="mt-2 text-slate-600 font-semibold">Cartas designadas</span>
          <div class="bg-white mt-1 h-80">
  
          </div>
        </div>

    </div>
</div>

<!-- AQUI VAN LAS MODALES -->

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
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
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Nueva partida
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                 <label>Nombre:</label>
                <input type="text" v-model="partida.nombre_partida" class="mx-2 border-2 mt-3 h-7 w-3/4 p-1" />
                </p>
                <p class="text-sm mt-2 text-gray-500">
                 <label>Fecha inicio:</label>
                <input type="date" v-model="partida.fecha_inicio" class="mx-2 border-2 mt-3 h-7 p-1" />
                </p>
                <p class="text-sm mt-2 text-gray-500">
                 <label>Fecha final:</label>
                <input type="date" v-model="partida.fecha_termino" class="mx-2 border-2 mt-3 h-7 p-1" />
                </p>
                <p class="text-sm mt-2 text-gray-500">
                 <label>Canvas</label>
                
                </p>
                <div class="grid grid-cols-3 grid-flow-col gap-1 p-1 h-100 mt-3 bg-white">
                    <div class="grid grid-rows-2 grid-flow-row">
                    <span>Último sprint</span>
                    <select class="h-8" v-model="partida.sprints">
                    <option value="1">Sprint 1</option>
                    <option value="2">Sprint 2</option>
                    <option value="3">Sprint 3</option>
                    <option value="4">Sprint 4</option>
                    <option value="5">Sprint 5</option>
                    <option value="6">Sprint 6</option>
                    </select>
                    </div>
                    <div class="grid grid-rows-2 grid-flow-row">
                      <span>Estado</span>
                      <select class="h-8" v-model="partida.estado">
                    <option value="1">Activo</option>
                    <option value="2">Inactivo</option>
                 
                    </select>

                    
                    </div>
                    <div class="grid grid-rows-2 grid-flow-row">
                      <span>idioma</span>
                      <select class="h-8" v-model="partida.idioma">
                    <option value="1">Español</option>
                    <option value="2">Ingles</option>
                    <option value="2">Portugues</option>
                 
                    </select>

                    </div>
                </div>

              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="guardarPartida"
                >
                  Guardar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- TERMINA PRIMERA MODAL -->

  <TransitionRoot appear :show="loadPlayers" as="template">
    <Dialog as="div" @close="closePlayers" class="relative z-10">
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
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Cargar Excel de jugadores
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500 mt-6">
                 <label>Tipo de carga:</label>
                 <br/>
                 <select class="h-8">
                    <option value="1">Concatenar / unir</option>
                    <option value="2">Borrar pre-existente</option>
                    </select>
                </p>
                <p class="text-sm mt-4 text-gray-500">
                 <label>Archivo Excel:</label>
                <input type="file" class="mx-2 border-2 mt-3 h-10 p-1" />
                </p>

              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closePlayers"
                >
                  Cargar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- TERMINA PRIMERA MODAL -->

  
  <TransitionRoot appear :show="loadGroups" as="template">
    <Dialog as="div" @close="closeGroups" class="relative z-10">
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
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Configuración de grupos (General)
              </DialogTitle>
              <div class="mt-2 flex-direction-col content-center">
                <table class="w-3/4" >
                  <thead>
                    <tr>
                      <th>Grupo</th>
                      <th>Contraseña</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-collapse border border-slate-400 w-3/4"><td><input type="text" class="w-1/2" v-model="nteam1" name="nt1" value="Equipo 1"/></td><td><input type="text" class="w-1/2" name="passt1" v-model="passt1" value="Team1"/></td></tr>
                    <tr class="border-collapse border border-slate-400 w-3/4"><td><input type="text" class="w-1/2" v-model="nteam2" name="nt2" value="Equipo 2"/></td><td><input type="text" class="w-1/2" name="passt2" v-model="passt2" value="Team2"/></td></tr>
                    <tr class="border-collapse border border-slate-400 w-3/4"><td><input type="text" class="w-1/2" v-model="nteam3" name="nt3" value="Equipo 3"/></td><td><input type="text" class="w-1/2" name="passt3" v-model="passt3" value="Team3"/></td></tr>
                    <tr class="border-collapse border border-slate-400 w-3/4"><td><input type="text" class="w-1/2" v-model="nteam4" name="nt4" value="Equipo 4"/></td><td><input type="text" class="w-1/2" name="passt4" v-model="passt4" value="Team4"/></td></tr>
                    <tr class="border-collapse border border-slate-400 w-3/4"><td><input type="text" class="w-1/2" v-model="nteam5" name="nt5" value="Equipo 5"/></td><td><input type="text" class="w-1/2" name="passt5" v-model="passt5" value="Team5"/></td></tr>
                  </tbody>

                </table>
               

              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeGroups"
                >
                  Guardar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- TERMINA PRIMERA MODAL -->


  <!-- MODAL ASIGNAR CARTAS-->
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
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Asignar cartas
              </DialogTitle>
              <div class="mt-2">
               <table>
                <tbody>
                  <tr>
                  <td>Sprints:</td>
                  <td align="center" class="bg-green-500 text-white">-1-</td>
                  <td align="center" class="bg-yellow-400 text-white">-2-</td>
                  <td align="center" class="bg-cyan-500 text-white">-3-</td>
                  <td align="center" class="bg-cyan-700 text-white">-4-</td>
                  <td align="center" class="bg-rose-500 text-white">-5-</td>
                  <td align="center" class="bg-orange-500 text-white">-6-</td>
                  </tr>

                  <tr>
                    <td>Total de cartas:</td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="tsc1" value="{{tsc1}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="tsc2" value="{{tsc2}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="tsc3" value="{{tsc3}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="tsc4" value="{{tsc4}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="tsc5" value="{{tsc5}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="tsc6" value="{{tsc6}}" /></td>
                  </tr>
                  <tr>
                    <td>Movimientos:</td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="ms1" value="{{ms1}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="ms2" value="{{ms2}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="ms3" value="{{ms3}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="ms4" value="{{ms4}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="ms5" value="{{ms5}}" /></td>
                    <td><input type="number" class="w-12 text-center border-2 rounded-md border-gray-700" v-model="ms6" value="{{ms6}}" /></td>
                  </tr>
                </tbody>
               </table>

              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="asignar"
                >
                  Asignar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- FIN MODAL ASIGNAR CARTAS -->
</template>
<style>
</style>