<template>
    <div>
        <div v-if="answers.length" id="answers">Your guesses:
            <div v-if="answers.length">
                <transition-group name="list" tag="p">
                    <PuzzleAnswer
                        v-for="answer in answers"
                        :key="answer.id"
                        :val1="answer.val1"
                        :val2="answer.val2"
                        :val3="answer.val3"
                        class="list-item"
                    />
                </transition-group>
            </div>
        </div>

        <PuzzleInput @check-clicked="onCheckClicked"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import PuzzleInput from "./PuzzleInput.vue";
import PuzzleAnswer from "./PuzzleAnswer.vue";

export default Vue.extend({
    props: [],
    data() {
        return {
            answers: []
        };
    },
    methods: {
        onCheckClicked: function(data: any) {
            var id = this.$data.answers ? this.$data.answers.length + 1 : 1;
            var answer = {
                id: id,
                val1: data.val1,
                val2: data.val2,
                val3: data.val3
            };

            this.$data.answers.push(answer);
        }
    },
    components: { PuzzleInput, PuzzleAnswer }
});
</script>

<style>
#answers {
    padding: 0 0 2em 0;
}

.list-item {
    display: block;
    margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
</style>