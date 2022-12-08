<script>
import draggable from "vuedraggable";
import axios  from 'axios';
let idGlobal = 8;
var cartasSprint = [];



export default {
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
       
      ],
      list2: [
      
      ],
      list3: [
       
      ],
      list4: [
       
      ],
      list5: [
       
      ],
      list6: [
       
      ],
      list7: [
       
      ],
      list8: [
       
      ],
      list9: [
       
      ],
      list10: [
      ],
      controlOnStart: true
    };
  },
  methods: {
    clone({ name }) {
      return { name, id: idGlobal++ };
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
    mostrar(id)
    {
      alert(id);
    },
    getCards()
    {
      axios.post('obtener_sprints.php',{tipo:'cartas',id:4.1})
      .then(response => {
        console.log(response.data)
        this.list10 = response.data;
      })
    },
   guardar()
   {
    this.$emit("pasarSprint",4.2);
   }
    
  },
  beforeMount()
  {
    this.getCards();
  },
};
</script>
<template>
<div class="flex flex-col w-full justify-between">
  
    <div class="flex flex-row w-full h-11 bg-sky-700 border-4 items-center border-slate-900 shadow-lg">
        
        <div class="bg-slate-700 ml-0 rounded-t-none rounded-md h-40 w-1/5 p-2 shadow-lg">
            
        
          </div>
    
    <span class="text-white items-center ml-10">
        Platform
    </span>

</div>
<div class="flex flex-row w-11/12 m-auto">
    <div class="flex flex-col w-full">

      <div class="flex flex-row w-full m-auto text-center justify-center">

    <div class="flex flex-col w-1/3">
        
        <div class="h-40 bg-slate-50 border border-slate-700 text-xs">
          WHAT?
         
            <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-sky-700 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
      
        <div class="h-40 bg-slate-50 border border-slate-700">
          WHY?
          <draggable
        class="dragArea list-group"
        :list="list3"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-sky-700 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
    </div>
    <div class="flex flex-col w-1/3">
       
        <div class="h-40 bg-slate-50 border border-slate-700 text-xs">
         
            <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-sky-700 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
      
        <div class="h-40 bg-slate-50 border border-slate-700">
          <draggable
        class="dragArea list-group"
        :list="list3"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-sky-700 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
    </div>
 
    <div class="flex flex-col w-1/3">
        
        <div class="h-40 bg-slate-50 border border-slate-700 text-xs">
          WHO?
          
          <draggable
        class="dragArea list-group"
        :list="list5"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-sky-700 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
        
        <div class="h-40 bg-slate-50 border border-slate-700 text-xs">
          HOW?
          
          <draggable
        class="dragArea list-group"
        :list="list6"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-sky-700 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
    </div>
 
</div>




    </div>
  
    <div class="flex flex-row w-1/6 mt-20">
      <draggable
        class="dragArea list-group w-full"
        :list="list10"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer w-full bg-sky-700 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
    </div>
  </div>

  

</div>
<rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />
    <rawDisplayer class="col-3" :value="list2" title="List 3" />
    <rawDisplayer class="col-3" :value="list2" title="List 4" />
    <rawDisplayer class="col-3" :value="list2" title="List 5" />
    <rawDisplayer class="col-3" :value="list2" title="List 6" />
    <rawDisplayer class="col-3" :value="list2" title="List 7" />
    <rawDisplayer class="col-3" :value="list2" title="List 8" />
    <rawDisplayer class="col-3" :value="list2" title="List 9" />
    <rawDisplayer class="col-3" :value="list2" title="List 10" />

    <div @click="guardar" class="flex w-32 p-1 m-auto mt-10 h-8 bg-green-400 rounded-md shadow-md text-white justify-center hover:cursor-pointer items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
        </div>
</template>
<style>
</style>