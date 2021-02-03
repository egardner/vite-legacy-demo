import Vue from 'vue';
import Demo from './Demo.vue';
import '../node_modules/sd-components/dist/style.css';

new Vue( { 
	render: function ( h ) { return h( Demo ); }
} ).$mount( '#app' );