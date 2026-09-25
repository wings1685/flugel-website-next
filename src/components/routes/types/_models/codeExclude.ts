export const codes = {
	glass: `
type IconProps = Pick<ComponentProps<typeof Icon>, 'type'>;
type Props = {
  mini?: boolean;
  isDark?: boolean;
} & ( | AsDiv | AsSection | ( AsLink & {
  href: string;
  icon?: IconProps['type'];
}) );`
} as const;
