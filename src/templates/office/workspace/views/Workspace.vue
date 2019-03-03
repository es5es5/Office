<template>
    <div class="workspace">
      <div>
        <el-button type="success" icon="el-icon-plus" circle @click="gridCreate"></el-button>
      </div>
      <grid-layout
        :layout.sync="gridItems"
        :col-num="30"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="false"
        :margin="[5, 5]"
        :use-css-transforms="false"
        >
        <div class="item_wrap" v-for="item in gridItems" :key="item.i">
          <grid-item :class="item.color" style="text-align: center;"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :static="item.static">
            <div class="content_wrap" @click="putGridItem(item.i)">
              <span class="bg_white">{{ item.name }}</span>
            </div>
          </grid-item>
        </div>
      </grid-layout>

    </div>
</template>

<script>

export default {
	name: 'Workspace',
	created () {},
	mounted () {},
	destroyed () {},
	components: {
  },
	filters: {},
	data () {
    return {
      gridItems: [
        {
          x: 0,
          y: 0,
          w: 4,
          h: 4,
          name: '이환웅',
          i: '0',
          static: true,
          color: 'bg_orange'
        },
        {
          x: 4,
          y: 0,
          w: 4,
          h: 4,
          name: '홍길동',
          i: '1',
          static: true,
          color: 'bg_green'
        },
        {
          x: 8,
          y: 0,
          w: 4,
          h: 4,
          name: 'Louis Vuitton',
          i: '3',
          static: true,
          color: 'bg_blue'
        },
      ],
    }
  },
	computed: {},
	watch: {},
	methods: {
    capFirst (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    },
    getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    },
    generateName () {
      var name1 = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"]
      var name2 = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"]
      var name = this.capFirst(name1[this.getRandomInt(0, name1.length + 1)]) + ' ' + this.capFirst(name2[this.getRandomInt(0, name2.length + 1)])
      return name
    },
    putGridItem (itemId) {
      console.log(itemId)
      let _item = this.gridItems.filter((item) => {
        return item.i === itemId
      })[0].color = 'bg_green'
      console.log(_item)
    },
    gridCreate () {
      this.gridItems.push({
        x: 2,
        y: -4,
        w: 4,
        h: 4,
        name: this.generateName(),
        static: true,
        color: 'bg_orange',
        i: ((Math.random() * 100000).toFixed(0)).toString(),
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
