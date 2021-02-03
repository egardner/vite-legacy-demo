const vue2 = require( 'vite-plugin-vue2' );
const legacy = require( '@vitejs/plugin-legacy' );

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [ 
    vue2.createVuePlugin(),
    legacy( { targets: [ 'defaults', 'IE 11' ] } )
  ]
}
