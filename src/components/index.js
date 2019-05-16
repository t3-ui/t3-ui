// import Vue from 'vue'
import Ttable from './table';
import Thello from './hello';
const Components = {
    Ttable,
    Thello
};
const install = function(Vue) {
    Object.keys(Components).forEach(key => {
        Vue.component(key, Components[key]);
    });
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

// module.exports.default = module.exports = API;

export default {
    install,
    Ttable,
    Thello
};