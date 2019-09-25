import { terser } from "rollup-plugin-terser";

export default {
  input: ["_includes/assets/js/pages/site.js", "_includes/assets/js/pages/contact.js"],
  output: [
    // ES module version, for modern browsers
    {
      dir: "_site/js",
      format: "es",
      sourcemap: true
    }/* ,
    // SystemJS version, for older browsers
    {
      dir: "_site/js",
      format: "system",
      sourcemap: true
    } */
  ],plugins: [
    terser()
  ]
};
