import { writable } from "svelte/store";

export const screenType = writable<number>(0); // 0:一覧画面 1:詳細画面
export const showDeleteMemoModalFlg = writable<boolean>(false);
export const selectIndex = writable<number>(null);

export type memo = {
  title: string;
  context: string;
  date: string;
};

export const memoList = writable<memo[]>([]);
