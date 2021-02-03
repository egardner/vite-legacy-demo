<template>
    <div id="demo">
        <h1>SD-Components</h1>

        <h2>AutocompleteSearchInput.vue</h2>
            <sd-autocomplete-search-input 
                :name="'demo-autocomplete'"
                :label="'demo-label'"
                :initialValue="autocompleteInputValue"
                :placeholder="'Foo, bar'"
                :lookupResults="fakeLookupResults"
                @input="fakeGetLookupResults"
                @clear-lookup-results="clearLookupResults">
            </sd-autocomplete-search-input>

            <br/>
        <hr/>

        <h2>Button.vue</h2>

        <h3>Primary</h3>
        <sd-button :primary="true">Primary button</sd-button>

        <h3>Progressive</h3>
        <sd-button :progressive="true">Progressive button</sd-button>

        <h3>Disabled</h3>
        <sd-button :disabled="true">Disabled button</sd-button>

        <h3>Destructive</h3>
        <sd-button :destructive="true">Destructive button</sd-button>

        <h3>Frameless</h3>
        <sd-button :frameless="true">Frameless button</sd-button>

        <h3>With Icons</h3>
        <sd-button :icon="sdIconSearch">Icon button</sd-button>

        <br/>
        <br/>

        <sd-button :icon="sdIconSearch" :invisibleText="true">
            Icon button with hidden text
        </sd-button>

        &nbsp;

        <sd-button :icon="sdIconCamera" :primary="true" :invisibleText="true">
            Icon button
        </sd-button>

        &nbsp;

        <sd-button :icon="sdIconError" :primary="true" :destructive="true" :invisibleText="true">
            Icon button
        </sd-button>

        <hr/>
        
        <h2>Select.vue</h2>
        <sd-select 
            :name="'demo-select'" 
            :items="fakeSelectItems">
        </sd-select>

        <hr/>

        <h2>Tabs.vue</h2>
        <sd-tabs>
            <sd-tab :name="'one'" :title="'Tab One'">
                <h3>Foo Bar</h3>
            </sd-tab>
            <sd-tab :name="'two'" :title="'Tab Two'">
                <h3>Baz Quux</h3>
            </sd-tab>
        </sd-tabs>

        <hr />

        <h2>Message.vue</h2>
        <sd-message :type="'notice'">Test Message</sd-message>
        <sd-message :type="'success'">Test Message</sd-message>
        <sd-message :type="'warning'">Test Message</sd-message>
        <sd-message :type="'error'">Test Message</sd-message>

        <br />
    </div>
</template>

<script>
import { sdIconCamera, sdIconError, sdIconSearch } from './assets/icons.js';
import {
    AutocompleteSearchInput,
    Button,
    Select,
    Tabs,
    Tab,
    Message
} from 'sd-components';

export default {
    components: { 
        'sd-autocomplete-search-input': AutocompleteSearchInput,
        'sd-button': Button,
        'sd-select': Select,
        'sd-tabs': Tabs,
        'sd-tab': Tab,
        'sd-message': Message
    },
    
    data() {
        return {
            sdIconCamera,
            sdIconError,
            sdIconSearch,
            fakeLookupResults: [],
            autocompleteInputValue: '',
            fakeSelectItems: [
                {
                    label: 'Apples',
                    value: 'apples'
                },
                {
                    label: 'Bananas',
                    value: 'bananas'
                },
                {
                    label: 'Grapefruit',
                    value: 'grapefruit'
                }
            ]
        }
    },

    methods: {
        clearLookupResults: function () {
            this.fakeLookupResults = [];
        },

        fakeGetLookupResults: function () {
            clearTimeout( this.debounceTimeoutId )
            this.debounceTimeoutId = setTimeout(
                function () { return [ 'foo', 'bar', 'baz', 'quux' ] },
                250
            );
        }
    }
};

</script>

<style>
#demo {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 1rem;
}
</style>