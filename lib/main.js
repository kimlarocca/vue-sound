import {
    App
} from 'vue';

import VueSound from '../src/components/VueSound.vue'

export default {
    install: ( app ) => {
        app.component( 'VueSound', VueSound );
    }
};

// export {
//     VueSound
// };