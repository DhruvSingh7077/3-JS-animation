import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "../public", // ✅ point to actual public folder
  base: "./",
});
