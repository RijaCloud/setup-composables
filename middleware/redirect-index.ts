import { defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware(() => {
  return navigateTo('/redirect');
});
