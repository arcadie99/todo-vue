<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const list = ref([])

let id = 0

function addElement() {
  if (value.value.trim() === '') return // Prevent adding empty items

  let newItem = { id: id++, value: value.value, done: false }
  list.value.push(newItem)
  value.value = ''
}

function deleteElement(element) {
  list.value = list.value.filter((t) => t !== element)
}
</script>

<template>
  <v-container class="my-4">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- Add Todo Form -->
        <v-card class="mb-4">
          <v-card-title>
            <span class="text-h6">Add a Todo Item</span>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="addElement" class="d-flex align-center">
              <v-text-field
                v-model="value"
                label="Todo Element"
                outlined
                dense
                required
                class="flex-grow-1"
              ></v-text-field>
              <v-btn color="primary" type="submit" class="ml-2">Add</v-btn>
            </form>
          </v-card-text>
        </v-card>

        <!-- Todo List -->
        <v-card>
          <v-card-title>
            <span class="text-h6">Todo List</span>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="element in list" :key="element.id">
                {{ element.value }}

                <template v-slot:append>
                  <v-btn icon @click="deleteElement(element)" color="error">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

