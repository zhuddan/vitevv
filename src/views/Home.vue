<template>
  <h1> use pinia</h1>
  <span> count: {{ testStore.count }} </span><br />
  <HelloWorld />
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import { useTestStore } from '@/store/modules/test';
  const testStore = useTestStore();
</script>

<style scoped></style>
