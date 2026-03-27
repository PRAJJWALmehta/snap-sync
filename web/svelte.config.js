import adapter from "@sveltejs/adapter-auto";
import { relative, sep, resolve } from "node:path"; // Added resolve

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    runes: ({ filename }) => {
      const relativePath = relative(import.meta.dirname, filename);
      const pathSegments = relativePath.toLowerCase().split(sep);
      const isExternalLibrary = pathSegments.includes("node_modules");

      return isExternalLibrary ? undefined : true;
    },
  },
  kit: {
    adapter: adapter(),
    // --- TOP 1% SDD ALIAS CONFIG ---
    alias: {
      $api: resolve("../core/sdk"),
      "$api/*": resolve("../core/sdk/*"),
    },
  },
};

export default config;
