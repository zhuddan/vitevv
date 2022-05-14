<template>
  <div> {{ testStore.count }} </div>
  <HelloWorld />
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import { useTestStore } from '@/store/modules/test';
  const testStore = useTestStore();
</script>

<style scoped></style>
