// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxt/ui"],
  colorMode: {
    preference: "light",
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en-US.json" },
      { code: "pt", iso: "pt-BR", file: "pt-BR.json" },
    ],
    langDir: "locales",
    defaultLocale: "en",
  },
});
