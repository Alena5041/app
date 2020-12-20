<template>
  <div class="p-d-flex">
    <Button label="Web" class="p-button-sm p-button-xs"/>
    <Button icon="pi pi-star-o" class="p-button-rounded p-button-text p-button-plain p-button-sm" />
    <Button icon="pi pi-question-circle" class="p-button-rounded p-button-text p-button-plain p-button-sm" />
    <Button icon="pi pi-pencil" class="p-button-rounded p-button-text p-button-plain p-button-sm" />
    <Button icon="pi pi-trash" class="p-button-rounded p-button-text p-button-plain p-button-sm" />
    <Button icon="pi pi-download" class="p-button-rounded p-button-text p-button-plain p-button-sm" />
    <Button icon="pi pi-sort-amount-down" class="p-button-rounded p-button-text p-button-plain p-button-sm" />
    <Divider layout="vertical" />
    <Button icon="pi pi-tag" class="p-button-rounded p-button-text p-button-plain p-button-sm p-mr-2" />
    <Button label="Export" class="p-button-outlined p-button-secondary p-button-sm p-button-xs" />
    <Button label="test" class="p-button-outlined p-button-secondary p-button-sm p-button-xs" />
    <Button label="Logistika" class="p-button-outlined p-button-secondary p-button-sm p-button-xs" />
  </div>
</template>

<script>
import Button from 'primevue/button';
import Divider from 'primevue/divider';

export default {
  name: "ntActivity",
  components: {
    Button,
    Divider
  }
}
</script>

<style scoped>
.p-divider-solid.p-divider-vertical:before {
  border-left-style: solid!important;
}
.p-button-xs {
  margin: 0.3rem 0.5rem 0.3rem 0!important;
  padding: 0.1rem 0.5rem!important;
}
</style>