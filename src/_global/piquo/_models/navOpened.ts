/* eslint-disable @typescript-eslint/no-unused-vars */
import { observable } from "@legendapp/state";
import type { GetOptions, ListenerFn, TrackingType } from "@legendapp/state";

const serverStore = <T>(initialValue: T) => ({
	delete: () => {},
	set: (_: T) => {},
	peek: () => initialValue,
	get: (_?: TrackingType | GetOptions) => initialValue,
	onChange: (cb: ListenerFn<number>, options?: void) => {},
});

type Store = boolean;
const initialValue: Store = false;
export const _navOpened = {
	server: ({ navOpened$: serverStore(initialValue) }),
	client: () => ({ navOpened$: observable<Store>(initialValue) }),
};
