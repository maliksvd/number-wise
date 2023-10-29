<template>
  <div class="mx-auto flex flex-col items-center justify-center h-screen">
    <UButton label="Generate a number" icon="i-ph-rocket-launch-duotone" color="white" variant="solid"
      @click="navigateTo('/number/' + number)" />
  </div>
</template>

<script lang="ts" setup>
const number = generateNumber();
</script>

<style>
</style>
