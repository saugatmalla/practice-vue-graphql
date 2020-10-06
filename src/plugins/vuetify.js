import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
      theme: {
        options: {
          customProperties: true
        },
        themes: {
          light: {
            primary:'#db563f',
            secondary:'#FAFAFA',
            accent:'#14B9D6',
            error: '#D0021B',
            warning: '#FFC200',
            info: '#666666',
            success: '#5CB85C',
            black: '#000000',
            bloodred: '#af371f',
            darkGrey: '#4b4b4b'
          }
        }
      }
})
