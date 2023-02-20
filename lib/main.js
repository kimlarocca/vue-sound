import {
    App
} from 'vue';

import VueSound from '../src/components/VueSound.vue'

export default {
    install: ( App ) => {
        App.component( 'VueSound', VueSound );
    }
};

export {
    VueSound
};