import Card from './Card.js'
import options from './options.js'

export default {
    template: `
      <div class="p-4 mx-auto max-w-md bg-gray-50 h-screen flex flex-col justify-between">
      <div>
        <h2 class="text-2xl">今天吃啥呢？</h2>
        <Card v-show="it.name === current" v-for="it of options" class="mt-6" :data="it" />
      </div>
      <div class="text-center mb-4">
        <button v-if="!drawing" class="focus:outline-none px-4 py-1.5 text-lg bg-blue-500 text-white rounded-xl w-3/4"
                @click="handleClickDraw">
          看看吃啥
        </button>
        <button v-else class="focus:outline-none px-4 py-1.5 text-lg bg-blue-300 text-white rounded-xl w-3/4">
          吃什么呢...
        </button>
      </div>
      </div>
    `,
    components: {
        Card,
    },
    computed: {
        options() {
            return options
        },
    },
    data() {
        return {
            current: this.getRandomOption(),
            drawing: false,
        }
    },
    methods: {
        async handleClickDraw() {
            this.drawing = true
            for (let i = 0; i < 7; i++) {
                this.current = this.getRandomOption(this.current)
                await new Promise((resolve => setTimeout(resolve, 200)))
            }
            this.drawing = false
        },
        getRandomOption(excluded) {
            const index = Math.round(Math.random() * 1_000) % options.length
            if (excluded === options[index].name) {
                return this.getRandomOption(excluded)
            }
            return options[index].name
        }
    }
}