import { Icon } from "../Utils";
import type { DeepGuard } from "@/_global/types/types";
import type { HAttributes } from "@/_global/types/components";
import type { ComponentProps } from "react";
import "./PageTitle.sass";

type IconProps = Pick<ComponentProps<typeof Icon>, 'type'>;
type Props = HAttributes & {
	icon: IconProps['type'];
};
export default function PageTitle(props: DeepGuard<Props>) {
	return (
		<h1 className="page_title">
			<Icon type={ props.icon } />
			<span>
				{ props.children }
			</span>
		</h1>
	)
}
