<template>
    <div class="wrapper">
        <div>
            <button @click="newKeyAndAddGraph" :class="{isButtonActive: active}" :disabled="active">Add Pie Graph</button>
        </div>
        <div>
            <DxPieChart
                id="pie"
                :data-source="arr"
                palette="Bright"
                title="Area of Countries"
                @point-click="pointClickHandler($event)"
                @legend-click="legendClickHandler($event)">
                <DxSeries
                    argument-field="groups"
                    value-field="share">

                    <DxLabel :visible="true">
                        <DxConnector
                            :visible="true"
                            :width="1"
                        />
                    </DxLabel>
                </DxSeries>
                <DxSize :width="500"/>
                <DxExport :enabled="true"/>
            </DxPieChart>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport
} from 'devextreme-vue/pie-chart';

export default {
    name: 'Pie',
    data(){
        return {
            arr: [],
            active: false
        }
    },
    computed: {
        ...mapGetters(['getPie']),
    },
    methods: {

        pointClickHandler(e) {
            this.toggleVisibility(e.target);
        },

        legendClickHandler(e) {
            let arg = e.target,
            item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

            this.toggleVisibility(item);
        },

        toggleVisibility(item) {
            item.isVisible() ? item.hide() : item.show();
        },

        newKeyAndAddGraph() {
            
            for (let i = 0; i < this.getPie[0].length; i++) {   
                this.arr.push({
                    groups:this.getPie[0][i]['Группа'],
                    share:this.getPie[0][i]['Доля']
                })
            }

            this.active = !this.active
        }
    },
    components: {
        DxPieChart,
        DxSize,
        DxSeries,
        DxLabel,
        DxConnector,
        DxExport
    }
}
</script>