// vite.config.ts
import { defineConfig } from "file:///Users/raja/Projects/verve/CDS/node_modules/.pnpm/vite@4.2.1/node_modules/vite/dist/node/index.js";
import react from "file:///Users/raja/Projects/verve/CDS/node_modules/.pnpm/@vitejs+plugin-react-swc@3.2.0_vite@4.2.1/node_modules/@vitejs/plugin-react-swc/index.mjs";
import webfontDownload from "file:///Users/raja/Projects/verve/CDS/node_modules/.pnpm/vite-plugin-webfont-dl@3.7.0_vite@4.2.1/node_modules/vite-plugin-webfont-dl/dist/index.js";
import { vanillaExtractPlugin } from "file:///Users/raja/Projects/verve/CDS/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.8.0_vite@4.2.1/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import autoprefixer from "file:///Users/raja/Projects/verve/CDS/node_modules/.pnpm/autoprefixer@10.4.14_postcss@8.4.23/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig(({ mode }) => {
  const isProd = mode === "production";
  return {
    assetsInclude: ["**/*.glb"],
    css: {
      postcss: {
        plugins: [autoprefixer()]
      }
    },
    plugins: [
      vanillaExtractPlugin(),
      react(),
      isProd ? webfontDownload() : void 0
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmFqYS9Qcm9qZWN0cy92ZXJ2ZS9DRFMvYXBwcy9sYW5kaW5nLXBhZ2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yYWphL1Byb2plY3RzL3ZlcnZlL0NEUy9hcHBzL2xhbmRpbmctcGFnZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmFqYS9Qcm9qZWN0cy92ZXJ2ZS9DRFMvYXBwcy9sYW5kaW5nLXBhZ2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCB3ZWJmb250RG93bmxvYWQgZnJvbSBcInZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcIjtcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBpc1Byb2QgPSBtb2RlID09PSBcInByb2R1Y3Rpb25cIjtcbiAgcmV0dXJuIHtcbiAgICBhc3NldHNJbmNsdWRlOiBbXCIqKi8qLmdsYlwiXSxcbiAgICBjc3M6IHtcbiAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgcGx1Z2luczogW2F1dG9wcmVmaXhlcigpXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbigpLFxuICAgICAgcmVhY3QoKSxcbiAgICAgIGlzUHJvZCA/IHdlYmZvbnREb3dubG9hZCgpIDogdW5kZWZpbmVkLFxuICAgIF0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1UsU0FBUyxvQkFBb0I7QUFDL1YsT0FBTyxXQUFXO0FBQ2xCLE9BQU8scUJBQXFCO0FBQzVCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sa0JBQWtCO0FBR3pCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sU0FBUyxTQUFTO0FBQ3hCLFNBQU87QUFBQSxJQUNMLGVBQWUsQ0FBQyxVQUFVO0FBQUEsSUFDMUIsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ1AsU0FBUyxDQUFDLGFBQWEsQ0FBQztBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AscUJBQXFCO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sU0FBUyxnQkFBZ0IsSUFBSTtBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
