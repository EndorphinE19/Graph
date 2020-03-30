import axios from 'axios'

export default {
    state: {
        dataLine: [],
        dataPie: []
    },
    mutations: {
        addLine(state, data) {
            state.dataLine.push(data)
        },
        addPie(state, data) {
            state.dataPie.push(data)
        }
    },
    actions: {
        async dataPie (ctx, data) {
            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlODA2ZWI2NzAwMTRkNGMzMmRkZmIwZCIsImV4cCI6MTU4NjA4MTcyMX0.TFLdAwYDKNkKCuWc31CcosBq2Sstf7C_BGyfAdTaUVQ';
            const dataOfGraph = await axios.get('https://xbi-dev.elastoo.com' + data, { headers: { Authorization: `Bearer ${token}` } });
            ctx.commit('addPie', dataOfGraph.data)
        },
        async dataLine (ctx, data) {
            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlODA2ZWI2NzAwMTRkNGMzMmRkZmIwZCIsImV4cCI6MTU4NjA4MTcyMX0.TFLdAwYDKNkKCuWc31CcosBq2Sstf7C_BGyfAdTaUVQ';
            const dataOfGraph = await axios.get('https://xbi-dev.elastoo.com' + data, { headers: { Authorization: `Bearer ${token}` } });
            ctx.commit('addLine', dataOfGraph.data)
        }
    },
    getters: {
        getLine(state) {
            return state.dataLine
        },
        getPie(state) {
            return state.dataPie
        }
    }
}