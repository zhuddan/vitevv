<template>
  <button @click="testStore.increase">increase</button>
  <button @click="testStore.decrease">decrease</button>
</template>

<script setup lang="ts">
  import { useTestStore } from '@/store/modules/test';
  const testStore = useTestStore();
</script>

<style scoped></style>
