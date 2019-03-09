import Vue from "vue";
import PuzzleContainer from "./components/PuzzleContainer.vue";

let v = new Vue({
	el: "#app",
	template: `
	<PuzzleContainer />
	`,
	components: { PuzzleContainer }
});
