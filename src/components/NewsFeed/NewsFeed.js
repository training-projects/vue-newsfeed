import template from './news_feed.html'

export default {
  name: 'news-feed',
  template: template,
  props: ['source'],
  data() {
    return { articles: [] }
  },
  watch: {
    source: function(source) {
      this.updateArticlesWhenChangeSource(source)
    }
  },
  methods: {
    updateArticlesWhenChangeSource: function(source) {
      const query = 'https://newsapi.org/v1/articles?source=' + source
                  + '&apiKey=7dda0be5024d4fc3bfa187adc13467fd'

      this.$http.get(query)
        .then(response => this.articles = response.data.articles)
    }
  }
}
