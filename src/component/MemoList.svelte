<script lang="ts">
  import { memoList } from "../store/common";
</script>

{#if $memoList.length > 0}
	<ul class="memo-list">
		{#each $memoList as { title, date }, i}
			<li>
				<p class="title">{title}</p>
				<p class="date">登録日：{date}</p>
				<span
					class="delete"
					>×</span>
			</li>
		{/each}
	</ul>
{:else}
	<p>メモは１件も登録されていません</p>
{/if}