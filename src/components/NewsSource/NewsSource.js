import template from './news_source.html'

export default {
  name: 'news-source',
  template: template,
  data: function() {
    return {
      sources: []
    }
  },
  created: function() {
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(response => this.sources = response.data.sources)
  }
}
