<template>
  <ul>
    <li v-for="included in includedList" :key="included">{{ included }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return { includedList: ["ESLint", "StyleLint", "Prettier"] };
  },
});
</script>
