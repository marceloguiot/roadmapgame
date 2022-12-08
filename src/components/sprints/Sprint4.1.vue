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
      axios.post('obtener_sprints.php',{tipo:'cartas',id:4})
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
        Data Driven
    </span>

</div>
<div class="flex flex-row w-11/12 m-auto">
    <div class="flex flex-col w-full">
      <div class="flex flex-row w-full m-auto mt-20 text-center justify-center">
    <div class="flex flex-col w-1/4">
        <span class="bg-purple-700 border text-white h-8 pl-3">Customer</span>
        <div class="h-20 bg-slate-50 border border-slate-700">
          <span class="text-sky-600">Who is the customer</span>
        </div>
    </div>
    <div class="flex flex-col w-3/4">
        <span class="bg-slate-100 border border-purple-700 text-sky-600 text-2xl h-28 pl-3">Data Driven Canvas</span>
  
    </div>
    
</div>
      <div class="flex flex-row w-full m-auto text-center justify-center">
    <div class="flex flex-col w-1/5">
        <span class="bg-purple-700 border text-white h-8 pl-3">Data Sources</span>
        <div class="h-full bg-slate-50 border border-slate-700 text-xs">
          What data do we require and how are we going to acquire?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
</svg>


          <span class="mt-15 text-slate-400">Examples: existing internal data, data from our customers, partners or supliers, from data providers or data marketplaces, from public available sources,...</span>
            <draggable
        class="dragArea list-group h-86"
        :list="list1"
        :clone="clone"
        :group="{ name: 'people', pull: pullFunction }"
        @start="start"
        item-key="id"
      >
        <template #item="{ element }">
          <div @click="mostrar(element.id)" class="list-group-item hover:cursor-pointer h-86 bg-sky-700 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable>
            

        </div>
    </div>
    <div class="flex flex-col w-1/5">
        <span class="bg-purple-700 border text-white h-8 pl-3">Analytics</span>
        <div class="h-40 bg-slate-50 border border-slate-700 text-xs">
          In what ways are we going to process adn apply this data?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>

          <span class="mt-15 text-slate-400">Examples:<br/>
          classification, regression, descriptive statistics, privacy-preserving technologies like anonymization,multi-party computation,...
          </span>
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
    <div class="flex flex-col w-1/5">
        <span class="bg-purple-700 border text-white h-8 pl-3">Product or service</span>
        <div class="h-full bg-slate-50 border border-slate-700 text-xs">
          What is our desired offering?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M19.5 6h-15v9h15V6z" />
  <path fill-rule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z" clip-rule="evenodd" />
</svg>

          <span class="mt-15 text-slate-400">
            Examples:<br/>
            report, dashboard, API, raw data, KPI, softwae function, web element, ...
          </span>
          <draggable
        class="dragArea list-group"
        :list="list4"
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
    <div class="flex flex-col w-1/5">
        <span class="bg-purple-700 border text-white h-8 pl-3">Benefit</span>
        <div class="h-full bg-slate-50 border border-slate-700 text-xs">
          What do we want to achieve?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd" />
  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
</svg>

          <span class="mt-15 text-slate-400">
            Examples: existing internal data, data from our customers, partners or supliers, from data providers or data marketplaces, from public available sources,...
          </span>
          <draggable
        class="dragArea list-group"
        :list="list7"
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
    <div class="flex flex-col w-1/5">
        <span class="bg-purple-700 border text-white h-8 pl-3">Financial Implications</span>
        <div class="h-40 bg-slate-50 border border-slate-700 text-xs">
          How are we going to monetize it?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clip-rule="evenodd" />
</svg>

          <span class="mt-15 text-slate-400">
            Examples: subscription, license pay per use, gain sharing, indirect monetization,...
          </span>
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
          What are the most important cost factors for our data solutions?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
  <path fill-rule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clip-rule="evenodd" />
</svg>

          <span class="mt-15 text-slate-400">
            Examples: development, hosting, maintenance, user support,...
          </span>
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