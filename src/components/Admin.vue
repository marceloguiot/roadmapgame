<script setup>
 import { ref } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    Switch
  } from '@headlessui/vue'

  const enabled = ref(false)
  const enabled_team = ref(false)
  const enabled_team2 = ref(false)
  const enabled_team3 = ref(false)
  const enabled_team4 = ref(false)
  const enabled_team5 = ref(false)
  const enabled_team6 = ref(false)
  const enabled_team7 = ref(false)

  const isOpen = ref(false)
  const loadPlayers = ref(false)
  const loadGroups = ref(false)

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
function closeGroups() {
  loadGroups.value = false
}
function openGroups() {
  loadGroups.value = true
}
</script>
<template>
    <div class="flex flex-col h-auto">
    <nav class="bg-gray-800">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
        <span class="text-slate-100 text-lg">Administrador de juego</span>
    </div>
    </div> 
    </nav>
    <div class="flex flex-row w-full mt-5">
        <div class="flex flex-col w-1/5">
            <span @click="openModal" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Nueva partida</span>
            <span @click="openPlayers" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Cargar jugadores</span>
            <span @click="openGroups" class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Grupos</span>
            <span class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Asignar cartas</span>
            <span class="text-center rounded-md ml-1 mt-2 h-8 hover:bg-slate-500 hover:cursor-pointer bg-gray-600 p-1 text-slate-100">Editor de cartas</span>
        </div>
        <div class="w-1/2 text-center bg-slate-100 mt-2 mx-2 p-2 rounded-md">
            <span class="text-center mt-2 text-slate-600">Partidas</span>
            <div class="grid grid-cols-5 items-center grid-flow-col gap-1 h-100 mt-3 bg-white">
                <div> <Switch
    v-model="enabled"
    :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch></div>
                <span>Partida ejemplo</span>
                <span>Desde Hasta</span>
                <span>Max. sprints</span>
                <span>X</span>
            </div>
        </div>
        <div class="w-1/2 text-center bg-slate-100 m-2 p-2 rounded-md">
            <span class="text-center mt-2 text-slate-600">Grupos</span>
            <div class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-slate-500 hover:cursor-pointer hover:text-slate-100">
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
  </Switch>  <span>Equipo 1</span>
  <span></span>
               <span></span>
               <span>Puntos:</span>
               
            </div>
            <div class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-slate-500 hover:cursor-pointer hover:text-slate-100">
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
  </Switch>  <span>Equipo 2</span>
               <span></span>
               <span></span>
               <span>Puntos:</span>
            </div>
            <div class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-slate-500 hover:cursor-pointer hover:text-slate-100">
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
  </Switch>     <span>Equipo 3</span>
  <span></span>
               <span></span>
               <span>Puntos:</span>
               
            </div>
            <div class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-slate-500 hover:cursor-pointer hover:text-slate-100">
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
  </Switch>    <span>Equipo 4</span>
  <span></span>
               <span></span>
               <span>Puntos:</span>
               
            </div>
            <div class="grid grid-cols-6 grid-flow-col gap-1 p-1 h-100 mt-1 bg-white hover:bg-slate-500 hover:cursor-pointer hover:text-slate-100">
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
  </Switch>     <span>Equipo 5</span>
  <span></span>
               <span></span>
               <span>Puntos:</span>
               
            </div>


        </div>

    </div>
    <div class="mt-10 flex flex-row w-full">
        <div class="w-1/5 text-center  bg-slate-100 m-2 p-2 rounded-md"><span>Control de sprints</span></div>
        
        <div class="w-1/4 text-center bg-slate-700">
            <span class="text-center mt-2 p-2 text-slate-100">Jugadores</span>
            <div class="grid grid-rows-2 gap-1 items-left p-1 h-100 mt-3 bg-slate-500">
                <span class="text-slate-100">Marcelo</span>
                <span class="text-slate-100">Antonio</span>
                <span class="text-slate-100">Santiago</span>
                <span class="text-slate-100">X</span>
            </div>
        </div>

        <div class="w-3/4 text-center  bg-slate-100 m-2 p-2 rounded-md">Cartas designadas</div>

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
                <input type="text" class="mx-2 border-2 mt-3 h-7 w-3/4 p-1" />
                </p>
                <p class="text-sm mt-2 text-gray-500">
                 <label>Fecha inicio:</label>
                <input type="date" class="mx-2 border-2 mt-3 h-7 p-1" />
                </p>
                <p class="text-sm mt-2 text-gray-500">
                 <label>Fecha final:</label>
                <input type="date" class="mx-2 border-2 mt-3 h-7 p-1" />
                </p>
                <p class="text-sm mt-2 text-gray-500">
                 <label>Canvas</label>
                
                </p>
                <div class="grid grid-cols-3 grid-flow-col gap-1 p-1 h-100 mt-3 bg-white">
                    <div class="grid grid-rows-2 grid-flow-row">
                    <span>Último sprint</span>
                    <select class="h-8">
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
                      <select class="h-8">
                    <option value="1">Activo</option>
                    <option value="2">Inactivo</option>
                 
                    </select>

                    
                    </div>
                    <div class="grid grid-rows-2 grid-flow-row">
                      <span>idioma</span>
                      <select class="h-8">
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
                  @click="closeModal"
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
              <div class="mt-2 flex-direction-col">
                
               

              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeGroups"
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
</template>
<style>
</style>