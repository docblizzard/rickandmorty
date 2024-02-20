<template>
  <div>
    hello
    <vs-pagination :total="40" v-model="currentx"></vs-pagination>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from "vue";

export default {
  setup() {
    return {};
  },
  data() {
    return {
      currentx: 14,
    };
  },
};
</script>
<style scoped></style>
