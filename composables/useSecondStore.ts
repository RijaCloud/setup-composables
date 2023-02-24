import { defineStore } from 'pinia';
export default function useEchoPlatformStore() {
  const useSecondStore = defineStore('useSecondStore', {
    state: () => ({
      _aState: useCookie('random').value,
    }),
    getters: {
      aState: (state) => state._aState,
    },
    actions: {
      setAState(aState: string) {
        useCookie('random').value = aState;
        this._aState = aState;
      },
    },
  });

  return {
    useSecondStore,
  };
}
