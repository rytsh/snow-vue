<template>
  <div class="app">
    <header class="app-header">
      <img
        src="/logo.svg"
        class="app-logo"
        alt="logo"
      >
      <p>Edit <code>src/App.vue</code> and save to reload.</p>
      <a
        class="app-link"
        href="https://vuejs.org"
        target="_blank"
        rel="noopener noreferrer"
      >{state.message} </a>
      <Show />
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Show from "@/components/Show.vue";

export default defineComponent({
  name: "App",
  components: {
    Show,
  },
  setup() {
    const state = reactive({
      message: "Learn Vue",
      includedList: ["ESLint", "StyleLint", "Prettier"],
    });
    return state;
  },
});
</script>
