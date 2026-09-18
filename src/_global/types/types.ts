export type DeepGuard<T> = {
	readonly [K in keyof T]: T[K] extends object
		? DeepGuard<T[K]>
		: T[K];
};
