<template>
    <div>
        <input v-model="val1" v-bind:class="resultInputClass" type="text" disabled>
        <input v-model="val2" v-bind:class="resultInputClass" type="text" disabled>
        <input v-model="val3" v-bind:class="resultInputClass" type="text" disabled>
        <span v-bind:class="resultTextClass">{{ resultMessage }}</span>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: ["val1", "val2", "val3"],
    methods: {},
    computed: {
        obeysRule(): boolean {
            return (
                this.val1 !== null &&
                this.val2 !== null &&
                this.val3 !== null &&
                this.val2 > this.val1 &&
                this.val3 > this.val2
            );
        },

        resultMessage(): string {
            if (!this.val1 || !this.val2 || !this.val3) return "";
            return this.obeysRule ? "Yes!" : "No.";
        },

        resultTextClass: function() {
            return {
                obeysMessage: this.obeysRule,
                disobeysMessage: !this.obeysRule
            };
        },

        resultInputClass: function() {
            return {
                obeysInput: this.obeysRule,
                disobeysInput: !this.obeysRule
            };
        }
    }
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

button {
    padding: 8px 20px;
    background: #777;
    border-radius: 3px;
    border: none;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
}

.obeysMessage {
    color: green;
}

.disobeysMessage {
    color: red;
}

.obeysInput {
    background: #bad40a;
}

.disobeysInput {
    background: #ecbcc1;
}
</style>