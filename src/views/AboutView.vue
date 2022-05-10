<template>
  <div class="about">
    <h1>{{aSharedValueStore.getMessage}}</h1>
  </div>
</template>

<script setup>
import { sharedValueStore} from '@/stores/store'

const aSharedValueStore = sharedValueStore()
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
