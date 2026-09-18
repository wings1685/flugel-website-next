export const codes = {
	types: `
export type DeepGuard<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepGuard<T[K]>
  : T[K];
};`,
	glass: `
export default function Glass(props: DeepGuard<Props>) {
  ...
}`
} as const;
