<template>
  <div>
    <button @click="testStore.increase">increase count</button>
    <button @click="testStore.decrease">decrease count</button>
  </div>
</template>

<script setup lang="ts">
  import { useTestStore } from '@/store/modules/test';
  const testStore = useTestStore();
</script>

<style scoped></style>
