<template>
  <header>
    <Toolbar>
      <template #left :model="items">
        <img alt="logo" src="../assets/ThemeMainLogo.png" height="40" class="p-mr-2">
        <Button label="Dashboard" class="p-button-plain p-button-text" />
        <Button label="Monitoring" class="p-button-plain p-button-text" />
      </template>
      <template #right>
        <Button icon="pi pi-bell" class="p-button-rounded p-button-text p-button-plain p-mr-1" />
        <Button icon="pi pi-question-circle" class="p-button-rounded p-button-text p-button-plain p-mr-1" />
        <Button icon="pi pi-user" class="p-button-rounded p-button-text p-button-plain" />
      </template>
    </Toolbar>
  </header>
</template>

<script>
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';

export default {
  name: "ntHeader",
  data() {
    return {
      items: [
        {label: 'Dashboard', to: '#'},
        {label: 'Monitoring', to: '#'},
      ]
    }
  },
  components: {
    Toolbar,
    Button
  }
}
</script>
<style scoped>
.p-toolbar {
  background: #fff;
}
</style>