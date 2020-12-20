<template>
  <Divider align="left" type="dashed">
    <h3 class="p-m-0">Témata</h3>
  </Divider>
  <Tree :value="topics">
    <template #default="slotProps">
      {{slotProps.node.label}}
    </template>
    <template #tag="slotProps">
      {{slotProps.node.label}}<Tag :value="slotProps.node.tag" class="p-ml-2"></Tag>
    </template>
  </Tree>
  <Divider />
  <Divider align="left" type="dashed">
    <h3 class="p-m-0">Složky</h3>
  </Divider>
  <Tree :value="folders">
    <template #default="slotProps">
      {{slotProps.node.label}}
    </template>
    <template #tag="slotProps">
      {{slotProps.node.label}}<Tag :value="slotProps.node.tag" class="p-ml-2"></Tag>
    </template>
  </Tree>
</template>

<script>
import Tree from 'primevue/tree';
import menuData from '../data/menu';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';

export default {
  name: "ntSideBar",
  data() {
    return menuData
  },
  components: {
    Tree,
    Tag,
    Divider,
  }
}
</script>

<style>
.p-tree {
  border: none!important;
}
.p-treenode-content {
  padding: 0 0.5rem!important;
}
.p-tree-toggler {
  height: 1rem!important;
  width: 1rem!important;
}
.p-tag-value {
  line-height: 1;
}
.p-divider-dashed.p-divider-horizontal:before {
  border-top-style: dashed!important;
}
.p-divider.p-divider-horizontal {
  margin: 1rem 0 0.5rem!important;
}
</style>