<script setup lang="ts">
import type People from '@/types/People';
import { useRouter } from 'vue-router';


var props = defineProps(['person']);
const router = useRouter();

function navToPerson(id : Number){
   router.push(`../keszitette/${id}`);
}

</script>

<template>
   <div class="card" style="width: 18rem;">
  <img class="card-img-top" @click="navToPerson(person.id)" :src="person.avatar" :alt="(person.last_name, person.first_name)">
  <div class="card-body">
    <h5 class="card-title" @click="navToPerson(person.id)">
      {{ person.last_name }} {{ person.first_name }}
   </h5>
    <p class="card-text">{{ person.email }}</p>
    <div @click="navToPerson(person.id)" class="btn btn-primary">Contact</div>
    <!-- :href="`/keszitette/` + person.id" -> Ez egy ronda de szintén működő megoldás lenne egy anchor HTML tag-en :D -->
   </div>
</div>
</template>


<style scoped>

</style>