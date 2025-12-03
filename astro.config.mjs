import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({  
  site: "https://37orbit.com",
  output: "server",
  integrations: [tailwind({applyBaseStyles: true
  })],
});
