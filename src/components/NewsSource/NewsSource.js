import template from './news_source.html'

export default {
  name: 'news-source',
  template: template,
  data() {
    return {
      sources: [],
      source: ''
    }
  },
  created: function() {
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(response => this.sources = response.data.sources)
  },
  methods: {
    updateCurrentSource: function(event) {
      this.sources.map(source => {
        if(source.id === event.target.value) this.source = source
      })

      this.$emit('currentSource', event.target.value)
    }
  }
}
