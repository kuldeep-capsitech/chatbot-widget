import { writable } from "svelte/store";

export const open = writable(false);
export const openFaq = writable(false);
export const openChat = writable(false);
export const openAgent = writable(false);