// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  nitro: {
    preset: "vercel-edge",
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY,
    redirect: false,
    cookies: {
      name: "sb",
    },
  },
  modules: [
    "@nuxtjs/supabase",
  ],
})
