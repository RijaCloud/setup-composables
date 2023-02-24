<template>
  <div>Dashboard</div>
  <p>State: {{ aState }}</p>
</template>
<script>
export default {
  setup() {
    return {
      useSecondStore: useSecondStore().useSecondStore(),
    };
  },
  computed: {
    aState() {
      return this.useSecondStore.aState; // this throw an error : this.useSecondStore is not defined sometimes
    },
  },
};
</script>
