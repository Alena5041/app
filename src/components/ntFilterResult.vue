<template>
  <div class="p-d-flex p-mt-3">
    <Checkbox v-model="checked" :binary="false" />
    <Divider layout="vertical" />
    <span class="p-mr-2">Zprávy bez duplicit: <Tag style="background: #239C97" value="3263"></Tag></span>
    <span class="p-mr-2">všechny: <Tag style="background: #239C97" value="6854"></Tag></span>
    <span class="p-mr-2">nepřečtené: <Tag style="background: #239C97" value="3259"></Tag></span>
  </div>
  <Divider />
</template>

<script>
import Divider from 'primevue/divider';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

export default {
  name: "ntFilterResult",
  components: {
    Divider,
    Checkbox,
    Tag
  }
}
</script>

<style scoped>
.p-divider-solid.p-divider-horizontal:before {
  border-top-style: solid!important;
}
.p-divider-solid.p-divider-vertical:before {
  border-left-style: solid!important;
}
.p-divider-vertical {
  height: 20px!important;
  min-height: 20px!important;
  padding: 0.5rem 0!important;
}
.p-divider-vertical:before {
  height: 20px!important;
}
</style>