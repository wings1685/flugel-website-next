import { PropsCode } from "@/components/features";
import { Box } from "@/components/shared/Sections";
import { Paragraph } from "@/components/shared/Typography";

export default function Props() {
	return (
		<Box>
			<Paragraph>
				A コンポーネントを B コンポーネントから呼ぶ際、A コンポーネントの props を継承し、型定義がズレないようにしています。<br />
				また、サイズや色などは共通の型定義に全てユニオン型で定義し、コンポーネントなどで使用する際は Extract や Exclude で絞り、同じ定義を作らないようにしています。
			</Paragraph>
			<PropsCode />
		</Box>
	)
}
