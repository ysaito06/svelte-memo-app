<script lang="ts">
	import MemoListComponent from "../component/MemoList.svelte";
	import RegistMemoModal from "../component/modal/RegistMemoModal.svelte";
	import { memoList, showDeleteMemoModalFlg } from "../store/common";
	import { onMount } from "svelte";

	let showRegistMemoModalFlg: boolean = false; // メモ登録モーダルの表示フラグ

	onMount(() => {
		loadMemoList(); // ローカルストレージからメモ一覧を取得
	});

	/**
	 * ローカルストレージからメモ一覧を取得
	 */
	function loadMemoList() {
		const storageMemoList: any[] =
			JSON.parse(localStorage.getItem("memoList")) || [];

		memoList.set(storageMemoList);
	}

	/**
	 * メモ登録モーダルを表示
	 */
	function showRegistMemoModal() {
		showRegistMemoModalFlg = true;
	}

	/**
	 * メモ登録モーダルを非表示
	 */
	function closeRegistMemoModal() {
		showRegistMemoModalFlg = false;
	}
</script>

<style lang="scss">
	.home {
		.contents {
			margin-top: 12px;
			.btn {
				width: 120px;
			}
			.memo-list-area {
				margin-top: 20px;
			}
		}
	}
</style>

<div class="home">
	<div class="contents">
		<button
			type="button"
			class="btn"
			on:click={showRegistMemoModal}>メモを登録</button>
		<div class="memo-list-area">
			<MemoListComponent />
		</div>
	</div>
</div>

{#if showRegistMemoModalFlg}
	<RegistMemoModal on:close={closeRegistMemoModal} />
{/if}