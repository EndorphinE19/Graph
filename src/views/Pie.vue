<template>
    <div>
        <pie />
    </div>
   
</template>
<script>
import {mapActions} from 'vuex'
import pie from '../components/Pie'
export default {
    name: 'Pie',
    methods: {
        ...mapActions(['dataPie'])
    },
    async mounted() {
        alert()
        this.dataPie('/api/datasource/5e80afbc84ffe8d196c2156d/data')
    },
    components: {
        pie
    }
}
</script>