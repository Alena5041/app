<template>
  <div class="p-mb-3">
    <Menubar :model="items">
      <template #start>
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" style="width: 35rem"/>
      </template>
    </Menubar>
  </div>
</template>

<script>
import Menubar from "primevue/components/menubar/Menubar";
import InputText from 'primevue/inputtext';

export default {
  name: "ntFilter",
  data() {
    return {
      items: [
        {
          label: 'Zdroj',
          items:[
            {label: 'Tištěná média'},
            {label: 'Televize'},
            {label: 'Rozhlas'},
            {label: 'Stream'},
            {label: 'Internet'},
            {label: 'Agenturní zpravodajství'},
            {label: 'Souhrnná anotace'}
          ]
        },
        {
          label: '',
          icon:'pi pi-question-circle p-mr-0',
          items:[
            {
              label: 'Nehodnoceno',
              icon:'pi pi-question-circle'
            },
            {
              label: 'Pozitivní',
              icon:'pi pi-plus-circle'
            },
            {
              label: 'Neutrální',
              icon:'pi pi-circle-on'
            },
            {
              label: 'Ambivalentní',
              icon:'pi pi-circle-off'
            },
            {
              label: 'Negativní',
              icon:'pi pi-minus-circle'
            }
          ]
        },
        {
          label: '',
          icon:'pi pi-star-o p-mr-0',
          items:[
            {
              label:'Důležité',
              icon:'pi pi-star'
            },
            {
              label:'Nedůležité',
              icon:'pi pi-star-o'
            }
          ]
        },
        {
          icon:'pi pi-user p-mr-0',
          label: '',
          items:[
            {
              label:'Search',
              icon:'pi pi-search'
            },
          ]
        }
      ],
    }
  },
  components: {
    Menubar,
    InputText
  },
}
</script>

<style scoped>

</style>