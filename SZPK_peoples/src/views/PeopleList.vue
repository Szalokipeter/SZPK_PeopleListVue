<script setup lang="ts">
import PeopleCard from '@/components/PeopleCard.vue';
import data_people from '@/data/data_people';
import type People from '@/types/People';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const people = ref<People[]>();
people.value = data_people.getPeople();
let sortingTypeIsAscending = true;
function sortByLastName(sortType : boolean, event : any)  {
  sortingTypeIsAscending = !sortingTypeIsAscending;
  if(sortType == true){
    event.target.textContent = "Családnév szerint csökkenő sorrend";
    people.value!.sort((a, b) => a.last_name.localeCompare(b.last_name));
  }
  else{
    event.target.textContent = "Családnév szerint növekvő sorrend";
    people.value!.sort((a, b) => b.last_name.localeCompare(a.last_name));
  }

}
</script>

<template>
  <h1 class="display-5">Emberek</h1>
  <button class="mb-3 btn btn-success"  v-on:click="sortByLastName(sortingTypeIsAscending, $event)">
    Családnév szerint növekvő sorrend
  </button>
  <div class="d-flex flex-wrap justify-content-center gap-3">
    <template v-for="(person, index) in people">
      <PeopleCard :person="person"/>
    </template>
  </div>
</template>


<style scoped>

</style>