<script lang="ts">
	import {
		screenType,
		memoList,
		showDeleteMemoModalFlg,
		selectIndex,
	} from "../store/common";

	/**
	 * メモ削除モーダルを表示
	 *
	 * @param {number} index 選択したメモのインデックス
	 */
	function showDeleteMemoModal(index: number) {
		selectIndex.set(index);
		showDeleteMemoModalFlg.set(true);
	}

	/**
	 * 詳細ページを非表示
	 *
	 * @param {number} index 選択したメモのインデックス
	 */
	function showMemoDetailPage(index: number) {
		selectIndex.set(index);
		screenType.set(1);
	}
</script>

<style lang="scss">
	.memo-list {
		li {
			border: 1px solid;
			padding: 20px;
			position: relative;
			cursor: pointer;
			&:not(:first-child) {
				border-top: none;
			}
			&:hover {
				background: #dcfaff;
			}
			.title {
				font-size: 24px;
			}
			.delete {
				position: absolute;
				top: 50%;
				right: 20px;
				transform: translateY(-50%);
				font-size: 32px;
				&:hover {
					color: #cbb5b5;
				}
			}
		}
	}
</style>

{#if $memoList.length > 0}
	<ul class="memo-list">
		{#each $memoList as { title, date }, i}
			<li on:click={() => showMemoDetailPage(i)}>
				<p class="title">{title}</p>
				<p class="date">登録日：{date}</p>
				<span
					class="delete"
					on:click|stopPropagation={() => showDeleteMemoModal(i)}>×</span>
			</li>
		{/each}
	</ul>
{:else}
	<p>メモは１件も登録されていません</p>
{/if}