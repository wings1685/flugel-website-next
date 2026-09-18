import { _navOpened } from "./navOpened";
import { _selectedMonth } from "./selectedMonth";

export const allStores = {
	navOpened: _navOpened,
	selectedMonth: _selectedMonth,
} as const;
export type AllStores = typeof allStores;
export type AllStoreKeys = keyof AllStores;
