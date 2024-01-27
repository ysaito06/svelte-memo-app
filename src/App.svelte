<script lang="ts">
	import { screenType } from "./store/common";
	import List from "./pages/List.svelte";
	import Detail from "./pages/Detail.svelte";
	//import "./assets/css/reset.css";
	//import "./assets/css/common.css";
</script>

<style lang="scss">
	main {
		width: 544px;
		padding: 20px;
	}
</style>

<main>
	<h1>メモアプリ</h1>
	{#if $screenType === 0}
		<List />
	{:else if $screenType === 1}
		<Detail />
	{/if}
</main>