import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

var vm = new Vue({
	el: '#app',
	data: {
		files: []
	},
	mounted: function() {
		Vue.axios.get("file-list.json").then((response) => {
			vm.files = response.data.map(f => {
				let filename = f.substr(0, f.lastIndexOf('.'))
				return {
					name: filename.replace(/^.*[\\\/]/, ''),
					path: f,
					extension: f.split('.').pop()
				};
			});
		})
	}
})