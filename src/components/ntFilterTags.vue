<template>
  <div class="p-mb-3">
    <small>Vybrané zdroje: </small>
    <Tag class="p-mr-2" icon="pi pi-info-circle" value="Tištěná média" rounded></Tag>
    <Tag class="p-mr-2" icon="pi pi-info-circle" value="Stream" rounded></Tag>
    <Tag class="p-mr-2" icon="pi pi-info-circle" value="Internet" rounded></Tag>
  </div>
  <Divider />
</template>

<script>
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';

export default {
  name: "ntFilterTags",
  components: {
    Tag,
    Divider
  }
}
</script>

<style scoped>
.p-divider-solid.p-divider-horizontal:before {
  border-top-style: solid!important;
}
.p-tag-rounded {
  padding: 0.1rem 0.4rem!important;
}
</style>