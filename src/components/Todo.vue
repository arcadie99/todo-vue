<script setup lang="ts">
import { ref } from 'vue';
const value = ref("Value")
const list = ref([])

let id = 0

function onInput(e) {
  value.value = e.target.value
}

function addElement() {

  console.log("go here");

  let newItem = {id: id++ , value: value.value, done: false}

  list.value.push(newItem);

  value.value = ''

}

function deleteElement(element) {
  list.value = list.value.filter((t) => t !== element)
}

</script>

<template>
  <form @submit.prevent="addElement">
    <input type="text" required v-model="value">

    <button>Add</button>
  </form>


  <div>
    <li v-for="element in list" :key="element.id">
      {{element.value}}
      <button @click="deleteElement(element)">X</button>
    </li>
  </div>
</template>
