import template from './App.html'

import NewsSource from './components/NewsSource/NewsSource'

export default {
  name: 'app',
  template: template,
  components: {
    NewsSource
  },
  data() {
    return {
      source: ''
    }
  },
  methods: {
    updateCurrentSource: source => this.source = source
  }
}
