<template>
  <div v-for="item in items" :key="item.id">
    <div class="p-grid">
      <div class="p-col-1 p-pt-4" style="width: 2.5rem;">
        <Checkbox v-model="checked" :binary="false" />
      </div>
      <div class="p-col-9">
        <h4 class="p-mt-3 p-mb-1"><a href="#">{{ item.title }}</a></h4>
      </div>
      <div class="p-col-2 p-text-center">
        <Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" />
      </div>
    </div>
    <div class="p-grid">
      <div class="p-col-1" style="width: 2.5rem;">
        <Checkbox v-model="checked" :binary="true" />
      </div>
      <div class="p-col-9">
        <small>{{ item.date }} {{ item.topic }} {{ item.source }} <a :href="item.url" v-if="item.url">URL</a></small>
        <img :alt="item.publisher" :title="item.publisher" :src="require(`@/assets/${item.publisherImg}`)" height="20" class="p-ml-3">
        <p>{{ item.text }}</p>
      </div>
      <div class="p-col-2 p-text-center">
        <img alt="img" :src="require(`@/assets/${item.img}`)" />
      </div>
    </div>
    <div class="p-grid">
      <div class="p-col-1" style="width: 2.5rem;">
      </div>
      <div class="p-col-11">
        <ntActivity />
      </div>
    </div>
    <Divider />
  </div>
</template>

<script>
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import ntActivity from "@/components/ntActivity";
import articlesData from "@/data/articles.js";
import Divider from 'primevue/divider';

export default {
  name: "ntListItem",
  data() {
    return articlesData
  },
  components: {
    ntActivity,
    Button,
    Checkbox,
    Divider
  }
}
</script>

<style scoped>
.p-divider-solid.p-divider-horizontal:before {
  border-top-style: solid!important;
}
a {
  color: #2196F3;
}
a:hover {
  color: #239C97;
}
</style>