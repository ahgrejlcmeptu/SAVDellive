import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default (app) => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,

    });
    vuetify.theme = {
        disable: true
    }
    app.use(vuetify);
};