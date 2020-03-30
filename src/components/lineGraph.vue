<template>
  <div>
    <div>
      <button @click="newKeyAndAddGraph" :class="{isButtonActive: active}" :disabled="active">Add Line Graph</button>
    </div>
    <div>
      <div id="chart-demo">
    <DxChart
      id="chart"
      :data-source="arr"
      palette="Violet"
    >
      <DxCommonSeriesSettings
        :type="type"
        argument-field="date"
      />
      <DxSeries
        v-for="item in arr"
        :key="item.percent"
        :value-field="name"
        :name="name"
      />
      <DxMargin :bottom="20"/>
      <DxArgumentAxis
        :value-margins-enabled="false"
        discrete-axis-division-mode="crossLabels"
      >
        <DxGrid :visible="true"/>
      </DxArgumentAxis>
      <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="bottom"
      />
      <DxExport :enabled="true"/>
      <DxTitle text="Energy Consumption in 2004">
        <DxSubtitle text="(Millions of Tons, Oil Equivalent)"/>
      </DxTitle>
      <DxTooltip :enabled="true"/>
    </DxChart>
    
  </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxExport,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTitle,
  DxSubtitle,
  DxTooltip
} from 'devextreme-vue/chart';
import DxSelectBox from 'devextreme-vue/select-box';

export default {
  name: 'lineGraph',
  components: {
    DxSelectBox,
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxExport,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTitle,
    DxSubtitle,
    DxTooltip
  },
  data() {
    return {
      types: ['line', 'stackedline', 'fullstackedline'],
      type: 'line',
      arr: [],
      active: false,
      name:'percent'
    };
  },

  methods: {
      newKeyAndAddGraph() {
           
            for (let i = 0; i < this.getLine[0].length; i++) {   
                this.arr.push({
                    date:this.getLine[0][i]['Дата'],
                    percent:this.getLine[0][i]['Процент']
                })
            }
        
            this.active = !this.active
        }
  },
  computed: {
      ...mapGetters(['getLine'])
  }
};
</script>
<style>
.options {
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    margin-top: 20px;
}

.option {
    margin-top: 10px;
}

.caption {
    font-size: 18px;
    font-weight: 500;
}

.option > span {
    margin-right: 10px;
}

.option > .dx-widget {
    display: inline-block;
    vertical-align: middle;
}
</style>