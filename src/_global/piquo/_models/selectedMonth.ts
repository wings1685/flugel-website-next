/* eslint-disable @typescript-eslint/no-unused-vars */
import { observable } from "@legendapp/state";
import type { GetOptions, ListenerFn, TrackingType } from "@legendapp/state";
import type { Months } from "@/_global/lib/shared";

const serverStore = <T>(initialValue: T) => ({
	delete: () => {},
	set: (_: T) => {},
	peek: () => initialValue,
	get: (_?: TrackingType | GetOptions) => initialValue,
	onChange: (cb: ListenerFn<number>, options?: void) => {},
});

type Store = Months | '';
const initialValue: Store = '';
export const _selectedMonth = {
	server: ({ selectedMonth$: serverStore(initialValue) }),
	client: () => ({ selectedMonth$: observable<Store>(initialValue) }),
};
