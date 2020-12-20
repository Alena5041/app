<template>
  <div class="main">
    <ntHeader />
    <ntPage />
  </div>
</template>
<script>
import ntHeader from "@/components/ntHeader";
import ntPage from "@/components/ntPage";

export default {
  data() {
    return {
      text: '123',
    }
  },
  components: {
    ntHeader,
    ntPage
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #f8f9fa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
