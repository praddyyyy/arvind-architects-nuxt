// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/sanity",
    "@nuxtjs/google-fonts",
  ],
  sanity: {
    projectId: "n7v220lp",
    apiVersion: "2024-02-15",
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  plugins: ["~/plugins/sanity.ts"],
  colorMode: {
    preference: "light",
  },
});
