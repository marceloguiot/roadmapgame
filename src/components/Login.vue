<script setup>
import { useRouter, useRoute } from 'vue-router'
import axios from "axios";
import { ref, onMounted, toRaw} from 'vue';
import Game_pre from './Game_pre.vue';

const router = useRouter();


const equipos = ref([]);
const grupo = ref('Admin');
const password = ref('');
const tipo = ref('login');

onMounted(async () => {
   await axios.post('obtener.php',{tipo: 'equiposLog'})
      .then(response => {
        const data = toRaw(response);
        equipos.value = data.data;
      })
})


  

 
    const loguear = () =>
    {
      axios.post('http://mguiot.online/guardar.php',{grupo:grupo.value,password:password.value,tipo:'login'})
                 .then((res) => {

    
                  const data = toRaw(res);
                  if(data.data[0].error == 0)
                  {
                    if(data.data[0].grupo[0].nombre == 'admin')
                    {
                      router.push('/admin')
                    }
                    else
                    {
                      if(data.data[0].grupo[0].tipo == 1)
                      {
                      
                        router.push({name:'game_pre', params: {
             id: data.data[0].grupo[0].id_grupo,
         }})
                      }
                      else
                      {
                       localStorage.setItem("id_partida",data.data[0].grupo[0].id_partida)
                        router.push({path:'/game', params:{"jugadores":data.data[0].jugadores}})
                      }
                      
                    }
                  }
                  else
                  {
                    alert('La contraseña introducida es incorrecta.');
                  }
                  })
                 .catch((error) => {
                     // error.response.status Check status code
                 })
    }
  

</script>
<template>
    <div class="flex flex-col sm:flex-col md:flex-row w-full" :style="{'background-image':'url(/assets/roadmap_Loggin.jpg)'}">
    <div id="login" class="flex flex-col w-full min-w-fit sm:w-2/4 md:w-1/4 bg-slate-200 rounded-lg h-screen content-center opacity-90">
    <div id="banner" class="m-auto w-full sm:w-full md:w-4/5 bg-slate-300 mt-5 rounded-md p-2 shadow-md">
      <h2>
      Digital & bussiness model transformation
      </h2>
      <h1 class="text-3xl">
      THE ROADMAP
      </h1>
    </div>
    <div class="flex flex-col m-auto bg-slate-700 min-w-fit rounded-md mt-2 p-4 shadow-md w-4/5">
      <span class="text-lg text-slate-100">Iniciar sesión</span>
      <span class="text-md text-slate-100 mt-4">Grupo</span>
      <select class="mt-3 h-8" v-model="grupo">
        <option value="0">Seleccione</option>
        <option value="Admin" selected>Admin</option>
        <option v-for="item in equipos" :id="item.id">{{item.nombre}}</option>    
      </select>
      <span class="mt-4 text-md text-slate-100">Contraseña</span>
      <input type="password" id="password" class="mt-3 h-7 p-1" v-model="password"/>
      <span class="mt-4 text-slate-100">Idioma:</span>
      <div class="mt-2 flex flex-row text-slate-200">
        <span class="mx-1 p-1 hover:bg-slate-400 bg-slate-500 hover:cursor-pointer hover:text-slate-100">Español</span>
        <span class="mx-1 p-1 hover:bg-slate-400 bg-slate-500 hover:cursor-pointer hover:text-slate-100">Ingles</span>
        <span class="mx-1 p-1 hover:bg-slate-400 bg-slate-500 hover:cursor-pointer hover:text-slate-100">portugues</span>
      </div>
      <div class="justify-items-end">
      <!-- <router-link to="/admin"> --><button @click="loguear" class="rounded-sm w-24 h-8 shadow-md mt-4 text-slate-700 bg-slate-200 hover:bg-slate-50">Ingresar</button> <!-- </router-link>-->
      </div>
    </div>
    </div>

    </div>
</template>
<style scoped>
</style>