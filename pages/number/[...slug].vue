<template>
  <div class="mx-auto flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-6">{{ numberSlug }}</h1>
    <p class="mb-8">{{ data }}</p>
    <UButton label="Generate another one" icon="i-ph-arrow-clockwise-duotone" color="white" variant="solid"
      @click="navigateTo('/number/' + generate)" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const numberSlug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug;
const generate = generateNumber();


const { data } = await useFetch('/api/' + numberSlug, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})


</script>

<style>
</style>

