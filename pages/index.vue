<template>
  <div>State: {{ state }}</div>
</template>
<script>
export default {
  setup() {
    return {
      useFirstStore: useFirstStore().useFirstStore(), // the first calls the composable function and the second init the store
      useSecondStore: useSecondStore().useSecondStore(), // same here
    };
  },
  computed: {
    state() {
      return this.useSecondStore.aState;
    },
  },
  mounted() {
    this.useSecondStore.setAState('value radom');
    if (process.client) {
      // I want this part to be called on client side
      const result = this.useFirstStore.useRandomUser(); // The useFirstStore is undefined or the useRandomUser is not a function in the console
      if (result) {
        console.log(result); // i did this to check
      }
    }
  },
};
</script>
