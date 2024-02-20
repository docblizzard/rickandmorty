<template>
  <div>
    <PaginationComponent></PaginationComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Characters, CharactersService } from "@/models/Characters";
import PaginationComponent from "@/components/reusables/PaginationComponent.vue";

export default defineComponent({
  name: "Hello-World",
  components: {
    PaginationComponent,
  },
  data() {
    return {
      characters: [] as Characters[],
    };
  },
  methods: {
    // CharactersService.fetchCharacters(),
  },
  async mounted() {
    // this.fetchCharacters();
    const characters = CharactersService.fetchCharacters(1);
    for (const charac of await characters) {
      console.log(charac.name);
    }
    // console.log(characters);
  },
});
</script>

<style scoped></style>
