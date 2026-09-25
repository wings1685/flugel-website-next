export const codes = {
	icon: `
const icons = {
  home: 'house',
  ...
  arrow: 'circle-right',
  code: 'code',
} as const;
export type Icons = keyof typeof icons;

export type Props = {
  type: Icons;
}

export default function Icon(props: DeepGuard<Props>) {
  return (
    &lt;i class={ \`icon fa-solid fa-\${icons[props.type]}\` }&gt;&lt;/i&gt;
  )
}`,
	pageTitle: `
type IconProps = Pick<ComponentProps<typeof Icon>, 'type'>;
type Props = HAttributes & {
  icon: IconProps['type'];
};

export default function PageTitle(props: DeepGuard<Props>) {
  return (
    &lt;h1 class="page_title"&lt;
      &lt;Icon type={ props.icon } /&lt;
      &lt;span&lt;{ props.children }&lt;/span&lt;
    &lt;/h1&lt;
  )
}`,
	types: `
export type Directions = 'left' | 'center' | 'right' | 'justify';
export type Sizes = 'small' | 'medium' | 'large' | 'extrasmall' | 'extralarge' | 'none';`,
	group: `
type Props = DivAttributes & {
  direction?: Directions;
  marginSize?: Extract<Sizes, 'small' | 'medium' | 'large' | 'none'>;
}`
} as const;
