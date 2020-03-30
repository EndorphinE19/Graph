<template>
    <div>
        <lineGraph />
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import lineGraph from '../components/lineGraph'

export default {
    name: 'LineG',
    methods: {
        ...mapActions(['dataLine'])
    },
    async mounted() {
        alert()
        this.dataLine('/api/datasource/5e80afe684ffe8d196c2156f/data')
    },
    components: {
        lineGraph
    }
}
</script>
<style lang="scss">

</style>