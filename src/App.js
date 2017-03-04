import template from './App.html'

import NewsSource from './components/NewsSource/NewsSource'
import NewsFeed from './components/NewsFeed/NewsFeed'

export default {
  name: 'app',
  template: template,
  components: {
    NewsSource,
    NewsFeed
  },
  data() {
    return { source: '' }
  },
  methods: {
    updateCurrentSource: function(source) {
      this.source = source
    }
  }
}
