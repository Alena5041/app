<template>
  <div class="p-grid p-m-0">
    <div class="p-col-3 p-pt-4 p-shadow-1" style="background: #fff"><ntSideBar /></div>
    <div class="p-col-9">
      <Card style="width: auto; margin: 2em; text-align: left">
        <template #content>
          <ntContent />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from 'primevue/card';
import ntSideBar from "@/components/ntSideBar";
import ntContent from "@/components/ntContent";

export default {
  name: "ntPage",
  components: {
    Card,
    ntSideBar,
    ntContent
  }
}
</script>

<style scoped>

</style>