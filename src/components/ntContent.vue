<template>
  <h1 class="p-mt-0">DEMO: Farmacie</h1>
  <ntFilter />
  <ntFilterTags />
  <ntFilterQuantity />
  <ntList />
</template>

<script>
import ntFilter from "@/components/ntFilter";
import ntList from "@/components/ntList";
import ntFilterQuantity from "@/components/ntFilterResult";
import ntFilterTags from "@/components/ntFilterTags";

export default {
  name: "ntContent",
  components: {
    ntFilterQuantity,
    ntFilter,
    ntList,
    ntFilterTags
  }
}
</script>

<style scoped>

</style>