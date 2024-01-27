<script lang="ts">
	import {
		memoList,
		showDeleteMemoModalFlg,
		selectIndex,
	} from "../../store/common";

	let memoTitle = $memoList[$selectIndex].title;

	/**
	 * メモを削除
	 */
	function deleteMemo() {
		const localStorageMemoList: string = localStorage.getItem("memoList");
		const newMemoList: any[] = localStorageMemoList
			? JSON.parse(localStorageMemoList)
			: [];

		newMemoList.splice($selectIndex, 1);

		localStorage.setItem("memoList", JSON.stringify(newMemoList));

		memoList.set(newMemoList);
		closeModal(); // 本モーダルを閉じる
	}

	/**
	 * 本モーダルを閉じる
	 */
	function closeModal() {
		showDeleteMemoModalFlg.set(false);
	}
</script>

<style lang="scss">
	.modal {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		&-background {
			width: 100%;
			height: 100%;
			background: rgba(232, 222, 220, 0.7);
		}
		&-contents {
			position: absolute;
			top: 50px;
			left: 0;
			right: 0;
			margin: auto;
			width: 400px;
			height: 150px;
			padding: 20px;
			background: #ffffff;
			border-radius: 10px;
			opacity: 1;
			.close {
				position: absolute;
				top: 10px;
				right: 10px;
				font-size: 24px;
				cursor: pointer;
				&:hover {
					color: #cbb5b5;
				}
			}
			.title {
				text-align: center;
			}
			.contents {
				margin-top: 24px;
			}
			.buttons {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 24px;
				.btn {
					width: 120px;
					&:not(:first-child) {
						margin-left: 12px;
					}
				}
			}
		}
	}
</style>

<div class="modal">
	<div class="modal-background">
		<div class="modal-contents">
			<span class="close" on:click={closeModal}>×</span>
			<h2 class="title">メモを削除</h2>
			<div class="contents">
				<p>『{memoTitle}』のメモを削除してもよろしいですか</p>
			</div>
			<div class="buttons">
				<button class="btn" on:click={closeModal}>キャンセル</button>
				<button class="btn" on:click={deleteMemo}>削除</button>
			</div>
		</div>
	</div>
</div>