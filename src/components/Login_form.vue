<script setup>
import { useRouter, useRoute } from 'vue-router'
import axios from "axios";
import { ref, onMounted, toRaw} from 'vue';

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
                      
                        router.push({path:'/game_pre', params:{"jugadores":data.data[0].jugadores}})
                      }
                      else
                      {
                       
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
    <div id="container">
    <div id="login">
    <div id="banner" class="bg-slate-300 rounded-md p-2 shadow-md">
      <h2>
      Digital & bussiness model transformation
      </h2>
      <h1 class="text-3xl">
      THE ROADMAP
      </h1>
    </div>
    <br/>
    <div class="flex flex-col my-10 bg-slate-700 rounded-md p-4 shadow-md">
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
@media (min-width: 1024px) {
  #container {
    display: flex;
    place-items: center;
  }

  #login {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    margin-top: 5em;
  }
}
@media (min-width: 1334px) {
  #container {
    display: flex;
    place-items: center;
  }

  #login {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    margin-top: 5em;
  }
}
@media (min-width: 640px) {
  #container {
    display: flex;
    place-items: center;
    padding: 1rem;
  }

  #login {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 2rem;
    margin-top: 5em;
  }
}
@media (min-width: 320px) {
  #container {
    display: flex;
    place-items: center;
    padding: 1rem;
  }

  #login {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 2rem;
    margin-top: 5em;
  }
}

</style>