<template>
  <div></div>
</template>
<script>
export default {
  setup() {
    return {
      useFirstStore: useFirstStore().useFirstStore(), // the first calls the composable function and the second init the store
      useSecondStore: useSecondStore().useSecondStore(), // same here
    };
  },
  mounted() {
    if (process.client) {
      // I want this part to be called on client side
      const result = this.useFirstStore.useRandomUser(); // The useFirstStore is undefined or the useRandomUser is not a function in the console
      if (result) {
        window.location.href = '/dashboard'; // i did this on purpose
      }
    }
  },
};
</script>
