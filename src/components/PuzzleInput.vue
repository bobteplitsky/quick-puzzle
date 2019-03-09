<template>
    <div>
        <input v-model="val1" @keypress="onlyNumber" type="text">
        <input v-model="val2" @keypress="onlyNumber" type="text">
        <input v-model="val3" @keypress="onlyNumber" type="text">
        <button @click="$emit('check-clicked', $props)" type="button">Check</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: ["val1", "val2", "val3"],
    data() {
        return {
            val1: "",
            val2: "",
            val3: ""
        };
    },
    methods: {
        onlyNumber($event: any) {
            let keyCode = $event.keyCode ? $event.keyCode : $event.which;
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
                // 46 is dot
                $event.preventDefault();
            }
        }
    },
    computed: {}
});
</script>

<style>
input[type="text"] {
    width: 105px;
    padding: 10px 0;
    text-align: center;
    margin: 4px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ddd;
}
</style>