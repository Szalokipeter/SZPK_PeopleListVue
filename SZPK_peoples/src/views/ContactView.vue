<script setup lang="ts">
import { ref, onMounted  } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import data  from '../data/data_people';
import type People from '@/types/People';

const route = useRoute();
const router = useRouter();
const people = data.getPeople();
const person = ref<People>();

const goBack = () => {
    router.back();
};

onMounted(() => {
  const id = parseInt(route.params.id.toString(), 10);
  person.value = people.find(p => p.id === id);
});

</script>

<template>
<div class="container mt-5">
    <div class="card shadow-lg p-4">
      <h1 class="display-5 text-center mb-4">Készítette</h1>
      <template v-if="person">
        <div class="row align-items-center">
          <div class="col-md-4 text-center">
            <img
              :src="person!.avatar"
              alt="Dolgozó képe"
              class="img-fluid rounded-circle shadow"
              style="max-width: 150px;"
            />
          </div>
          <div class="col-md-8">
            <h3 class="text-primary">{{ person!.first_name }} {{ person!.last_name }}</h3>
            <p class="text-muted">
              <strong>Email:</strong> {{ person!.email }}
            </p>
          </div>
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-secondary px-4" @click="goBack">
            <i class="bi bi-arrow-left"></i> Go back
          </button>
        </div>
      </template>
    </div>
  </div>
</template>


<style scoped>

</style>