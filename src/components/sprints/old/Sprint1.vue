<script>
import draggable from "vuedraggable";
let idGlobal = 8;

fetch("https://api.example.com/users")
.then(res => res.json())
.then(data => console.log(data))

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
      { name: "Jesus", id: 1 },
        { name: "Paul", id: 2 },
        { name: "Peter", id: 3 },
        { name: "Luc", id: 5 },
        { name: "Thomas", id: 6 },
        { name: "John", id: 7 }
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
    }
    
  }
};
</script>
<template>
<div class="flex flex-col w-full justify-between">
  
    <div class="flex flex-row w-full h-11 bg-green-500 border-4 items-center border-slate-900 shadow-lg">
        
        <div class="bg-slate-700 ml-0 rounded-t-none rounded-md h-40 w-1/5 p-2 shadow-lg">
            
        
          </div>
    
    <span class="text-white items-center ml-10">
        Sprint 1
    </span>

</div>
<div class="flex flex-row w-11/12 m-auto">
    <div class="flex flex-col w-full">
      <div class="flex flex-row w-full m-auto mt-20">
    <div class="flex flex-col w-1/5">
        <span class="bg-slate-100 border border-r-green-400 h-8 pl-3">Key partner</span>
        <div class="h-full bg-slate-50 border border-slate-700">
            <draggable
        class="dragArea list-group h-86"
        :list="list1"
        :clone="clone"
        :group="{ name: 'people', pull: pullFunction }"
        @start="start"
        item-key="id"
      >
        <template #item="{ element }">
          <div @click="mostrar(element.id)" class="list-group-item hover:cursor-pointer h-86 bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable>
            

        </div>
    </div>
    <div class="flex flex-col w-1/5">
        <span class="bg-slate-100 border border-r-green-400 h-8 pl-3">Key Activities</span>
        <div class="h-40 bg-slate-50 border border-slate-700">
            <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
        <span class="bg-slate-100 border border-r-green-400 h-8 pl-3">Key Resources</span>
        <div class="h-40 bg-slate-50 border border-slate-700">
          <draggable
        class="dragArea list-group"
        :list="list3"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
    </div>
    <div class="flex flex-col w-1/5">
        <span class="bg-slate-100 border border-r-green-400 h-8 pl-3">Value Propositions</span>
        <div class="h-full bg-slate-50 border border-slate-700">
          <draggable
        class="dragArea list-group"
        :list="list4"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
    </div>
    <div class="flex flex-col w-1/5">
        <span class="bg-slate-100 border border-r-green-400 h-8 pl-3">Customer Relationships</span>
        <div class="h-40 bg-slate-50 border border-slate-700">
          <draggable
        class="dragArea list-group"
        :list="list5"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
        <span class="bg-slate-100 border border-r-green-400 h-8 pl-3">Channels</span>
        <div class="h-40 bg-slate-50 border border-slate-700">
          <draggable
        class="dragArea list-group"
        :list="list6"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
    </div>
    <div class="flex flex-col w-1/5">
        <span class="bg-slate-100 border border-r-green-400 h-8 pl-3">Customer Segments</span>
        <div class="h-full bg-slate-50 border border-slate-700">
          <draggable
        class="dragArea list-group"
        :list="list7"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
    </div>
</div>
<div class="flex flex-row w-full m-auto">
    <div class="flex flex-col w-1/2">
        <span class="bg-slate-100 border border-r-green-400 h-8 pl-3">Cost Structure</span>
        <div class="h-20 bg-slate-50 border border-slate-700">
          <draggable
        class="dragArea list-group"
        :list="list8"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
    </div>
    <div class="flex flex-col w-1/2">
        <span class="bg-slate-100 border border-r-green-400 h-8 pl-3">Revenue Streams</span>
        <div class="h-20 bg-slate-50 border border-slate-700">
          <draggable
        class="dragArea list-group"
        :list="list9"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer h-86 bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
        </div>
    </div>
    
</div>



    </div>
  

  </div>

  <div class="flex flex-row w-40 float-right ">
      <draggable
        class="dragArea list-group"
        :list="list10"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hover:cursor-pointer w-full bg-green-500 rounded-md shadow-sm p-1">
            {{ element.name }}
          </div>
        </template>
      </draggable> 
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
</template>
<style>
</style>