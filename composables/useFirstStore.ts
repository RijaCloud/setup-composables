import { defineStore } from 'pinia';
export default function useEchoPlatformStore() {
  const useFirstStore = defineStore('useFirstStore', {
    state: () => ({
      _aState: false,
    }),
    getters: {
      aState: (state) => state._aState,
    },
    actions: {
      setAState(aState: boolean) {
        this._aState = aState;
      },
      async useRandomUser() {
        const { results } = await $fetch('https://randomuser.me/api/');
        return results;
      },
    },
  });

  return {
    useFirstStore,
  };
}
