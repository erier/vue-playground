new Vue({
    el: '#app',
    data () {
        return {
            catImgUrl: null
        }
    },
    mounted () {
        axios
            .get('https://aws.random.cat/meow')
            .then(response => (this.catImgUrl = response.data.file))
    }
});

new Vue({
    el: '#nubmer',
    data () {
        return {
            num: null,
            numResponse: null,
            indicator: false
        }
    },
    methods: {
        getFact: function () {
            this.indicator = true;
            axios
                .get('http://numbersapi.com/' + this.num)
                .then(response => {
                    this.numResponse = response.data
                    this.indicator = false
                });
        }
    },
    computed: {
        isLoading: function() {
            return this.indicator;
        }
    }
});

new Vue({
    el: '#chuck',
    data () {
        return {
            fact: null,
            icon_url: null
        }
    },
    mounted () {
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then(response => (this.icon_url = response.data.icon_url))
            .then(response => (this.fact = response.data.value))
    }
});