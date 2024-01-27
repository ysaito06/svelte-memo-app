<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { memoList } from "../../store/common";

	const dispatch = createEventDispatcher();
	let memoTitle: string = "";
	let memoContext: string = "";

	/**
	 * メモを登録
	 */
	function registMemo() {
		const localStorageMemoList: string = localStorage.getItem("memoList");
		const newMemoList: any[] = localStorageMemoList
			? JSON.parse(localStorageMemoList)
			: [];
		const now: Date = new Date();

		newMemoList.push({
			title: memoTitle,
			context: memoContext,
			date: `${String(now.getFullYear())}年${String(
				now.getMonth() + 1
			)}月${String(now.getDate())}日`,
		});

		localStorage.setItem("memoList", JSON.stringify(newMemoList));

		memoList.set(newMemoList);
		closeModal(); // 本モーダルを閉じる
	}

	/**
	 * 本モーダルを閉じる
	 */
	function closeModal() {
		dispatch("close");
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
			width: 500px;
			height: 400px;
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
					height: 32px;
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
			<h2 class="title">メモを登録</h2>
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
				<button class="btn" on:click={closeModal}>キャンセル</button>
				<button class="btn" on:click={registMemo}>登録</button>
			</div>
		</div>
	</div>
</div>