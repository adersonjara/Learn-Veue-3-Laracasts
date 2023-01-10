export default {
	template:`
	<div>
		<!--<div>What's up</div>-->
		<button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" :disabled="processing">
			<slot />
		</button>
	</div>
	`,
	/*mounted() {
		alert('Hello');
	}*/
	data() {
		return {
			processing: true
		}
	}
}