import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({  
  site: "https://37orbit.com",
  output: "static",
  integrations: [tailwind({applyBaseStyles: true
  })],
});
