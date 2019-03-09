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
        :margin="[10, 10]"
        :use-css-transforms="false"
        >
        <div class="item_wrap" v-for="item in gridItems" :key="item.i">
          <grid-item :class="item.color" class="hvr-buzz-out" style="text-align: center;"
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
            <sui-form-field>
              <label>직급</label>
              <el-radio-group v-model="selectedItem.grade">
                <el-radio :label="'0'">상무</el-radio>
                <el-radio :label="'1'">팀장</el-radio>
                <el-radio :label="'2'">과장</el-radio>
                <el-radio :label="'3'">대리</el-radio>
                <el-radio :label="'4'">사원</el-radio>
              </el-radio-group>
            </sui-form-field>
          </sui-form>
        </sui-modal-content>
        <sui-modal-actions>
          <sui-button @click="deleteItem">
            삭제
          </sui-button>
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
      color: [
        // 'bg_red',
        'bg_pink',
        'bg_yellow',
        // 'bg_blue',
        // 'bg_purple',
        'bg_cyan',
        'bg_green',
        'bg_orange',
      ],
      modalInit: false,
      selectedItem: {},
      gridItems: [
        {
          x: 10,
          y: 0,
          w: 8,
          h: 4,
          name: '강권영',
          grade: '0',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_pink'
        },
        {
          x: 10,
          y: 4,
          w: 4,
          h: 4,
          name: '서승원',
          grade: '3',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_green'
        },
        {
          x: 10,
          y: 8,
          w: 4,
          h: 4,
          name: '박민영',
          grade: '2',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_cyan'
        },
        {
          x: 14,
          y: 4,
          w: 4,
          h: 4,
          name: '안수열',
          grade: '1',
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
          grade: '4',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_orange'
        },
        {
          x: 14,
          y: 8,
          w: 4,
          h: 4,
          name: '이준희',
          grade: '3',
          i: ((Math.random() * 100000).toFixed(0)).toString(),
          static: true,
          color: 'bg_green'
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
        // 'bg_red',
        'bg_pink',
        'bg_yellow',
        // 'bg_blue',
        // 'bg_purple',
        'bg_cyan',
        'bg_green',
        'bg_orange',
      ]
      return color[this.getRandomInt(0, color.length + 1)]
    },
    showModalItemDetail (item) {
      this.modalInit = true
      this.selectedItem = item
    },
    updateItem () {
      this.gridItems.filter(item => {
        if (item.i === this.selectedItem.i) {
          item = this.selectedItem
          item.color = this.color[parseInt(this.selectedItem.grade)]
        }
      })
      this.modalInit = false
    },
    deleteItem () {
      this.gridItems.filter((item, index) => {
        if (item.i === this.selectedItem.i) {
          this.gridItems.splice(index, 1)
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
        grade: '4',
        static: true,
        color: this.color[4],
        i: ((Math.random() * 100000).toFixed(0)).toString(),
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.hvr-buzz-out:hover,
.hvr-buzz-out:focus,
.hvr-buzz-out:active {transform: scale(1);}
.hvr-buzz-out {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 5s;
    transition-property: transition;
}
</style>
