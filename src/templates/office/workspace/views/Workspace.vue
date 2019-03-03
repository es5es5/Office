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
            <div class="content_wrap" @click="showModalItemDetail(item)">
              <span class="bg_white">{{ item.name }}</span>
            </div>
          </grid-item>
        </div>
      </grid-layout>

      <!-- Modal -->
      <sui-modal v-model="modalInit">
        <sui-modal-header>자리 상세</sui-modal-header>
        <sui-modal-content>
          <sui-form>
            <sui-form-field>
              <label>이름</label>
              <input v-model="selectedItem.name">
            </sui-form-field>
            <sui-form-field>
              <label>배경색</label>
              <input v-model="selectedItem.color">
            </sui-form-field>
          </sui-form>
        </sui-modal-content>
        <sui-modal-actions>
          <sui-button @click="updateItem">
            수정
          </sui-button>
        </sui-modal-actions>
      </sui-modal>
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
      modalInit: false,
      selectedItem: {},
      gridItems: [
        {
          x: 10,
          y: 0,
          w: 8,
          h: 4,
          name: '강권영',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_green'
        },
        {
          x: 10,
          y: 4,
          w: 4,
          h: 4,
          name: '서승원',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_blue'
        },
        {
          x: 10,
          y: 8,
          w: 4,
          h: 4,
          name: '박민영',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_blue'
        },
        {
          x: 14,
          y: 4,
          w: 4,
          h: 4,
          name: '안수열',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_yellow'
        },
        {
          x: 10,
          y: 12,
          w: 4,
          h: 4,
          name: '이환웅',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_yellow'
        },
        {
          x: 14,
          y: 8,
          w: 4,
          h: 4,
          name: '이준희',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_orange'
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
    generateColor () {
      let color = [
        'bg_red',
        'bg_orange',
        'bg_yellow',
        'bg_green',
        'bg_blue',
        'bg_purple',
        'bg_cyan'
      ]
      return color[this.getRandomInt(0, color.length + 1)]
    },
    showModalItemDetail (item) {
      this.modalInit = true
      this.selectedItem = item
      console.log(this.selectedItem)
    },
    updateItem () {
      this.gridItems.filter(item => {
        if (item.i === this.selectedItem.i) {
          item = this.selectedItem
        }
      })
      this.modalInit = false
    },
    gridCreate () {
      this.gridItems.push({
        x: 2,
        y: -4,
        w: 4,
        h: 4,
        name: this.generateName(),
        static: true,
        color: this.generateColor(),
        i: ((Math.random() * 100000).toFixed(0)).toString(),
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
