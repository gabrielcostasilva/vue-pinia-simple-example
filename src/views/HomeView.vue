
<template>
  <main>
    <h1>Select an option</h1>
    <select v-model="selectedOption" >
      <option>Money</option>
      <option>Hapiness</option>
      <option>Peace</option>
    </select>
    <button @click="setOptionValue">Set</button>
  </main>
</template>

<script setup>
import { sharedValueStore} from '@/stores/store'
import { ref } from 'vue';

const selectedOption = ref('')
const aSharedValueStore = sharedValueStore()

const setOptionValue = () => {
  aSharedValueStore.setOption(selectedOption.value)
}

</script>
