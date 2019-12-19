try {
    window._ = require('lodash');
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    window.axios = require('axios');
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    let token = document.head.querySelector('meta[name="csrf-token"]');
    if (token) {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } 
} catch (e) {
    console.log(e);
}