<script lang="ts">
	import { memoList, screenType, selectIndex } from "../store/common";

	let memoTitle: string = $memoList[$selectIndex].title;
	let memoContext: string = $memoList[$selectIndex].context;

	/**
	 * メモ一覧画面に戻る
	 */
	function backListPage() {
		screenType.set(0);
	}

	/**
	 * メモを更新する
	 */
	function updateMemo() {
		const localStorageMemoList: string = localStorage.getItem("memoList");
		const newMemoList: any[] = localStorageMemoList
			? JSON.parse(localStorageMemoList)
			: [];

		newMemoList[$selectIndex].title = memoTitle;
		newMemoList[$selectIndex].context = memoContext;

		localStorage.setItem("memoList", JSON.stringify(newMemoList));

		memoList.set(newMemoList);
		backListPage(); // メモ一覧画面に戻る
	}
</script>

<style lang="scss">
	.detail {
		margin-top: 12px;
		.contents {
			margin-top: 24px;
			label {
				display: block;
				&:not(:first-child) {
					margin-top: 12px;
				}
				input,
				textarea {
					width: 100%;
					margin-top: 8px;
					font-size: 20px;
				}
				input {
					height: 32px;
				}
				textarea {
					height: 150px;
				}
			}
		}
		.buttons {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 24px;
			.btn {
				width: 120px;
			}
		}
	}
</style>

<div class="detail">
	<p class="link-text" on:click={() => backListPage()}>一覧画面に戻る</p>
	<div class="contents">
		<label class="input-title">
			<p>タイトル</p>
			<input bind:value={memoTitle} type="text" />
		</label>
		<label class="input-context">
			<p>内容</p>
			<textarea bind:value={memoContext} />
		</label>
	</div>
	<div class="buttons">
		<button class="btn" on:click={updateMemo}>更新</button>
	</div>
</div>