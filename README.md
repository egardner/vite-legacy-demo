# Vite Legacy Demo

This is a simple demo of how to consume Vue2 components (which live 
[here](https://github.com/egardner/sd-components)) in a Vite project while also supporting legacy browsers (all the way back to IE11).

Two Vite plugins are used to do this:
 - [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)
 - [vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

 The underlying components are also built using Vite, using the "library mode" configuration.