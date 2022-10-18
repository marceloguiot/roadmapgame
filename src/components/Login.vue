<script>
export default {
  name: 'Login',
  data: function()
  {
    return {
      grupo: "admin",
      password: "",
      error: false,
      error_msg: ""
    }
  }
}
</script>
<template>
    <div id="container">
    <div id="login">
     <h2>
    Digital & bussiness model transformation
  </h2>
  <br/>
 <h1 class="text-3xl font-bold">
    THE ROADMAP
  </h1>
  <br/>
<div class="flex flex-col my-10 bg-slate-700 rounded-md p-4">
<span class="text-lg text-slate-100">Iniciar sesión</span>
<span class="text-md text-slate-100 mt-6">Grupo</span>
<select class="mt-3 h-8" v-model="grupo">
  <option value="0">Seleccione</option>
  <option value="admin" selected>Admin</option>
</select>
<span class="mt-5 text-md text-slate-100">Contraseña</span>
<input type="password" id="password" class="mt-3 h-7 p-1" v-model="password"/>
<span class="mt-4 text-slate-100">Idioma:</span>
<div class="mt-2 flex flex-row text-slate-200">
  <span class="mx-1 p-1 hover:bg-slate-400 bg-slate-500 hover:cursor-pointer hover:text-slate-100">Español</span>
  <span class="mx-1 p-1 hover:bg-slate-400 bg-slate-500 hover:cursor-pointer hover:text-slate-100">Ingles</span>
  <span class="mx-1 p-1 hover:bg-slate-400 bg-slate-500 hover:cursor-pointer hover:text-slate-100">portugues</span>
</div>
<div class="justify-items-end">
<router-link to="/admin"><button class="rounded-sm w-24 h-8 shadow-md mt-4 text-slate-700 bg-slate-200 hover:bg-slate-50">Ingresar</button></router-link>
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
}</style>