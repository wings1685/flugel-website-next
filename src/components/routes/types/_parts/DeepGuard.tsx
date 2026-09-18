import { DeepGuardCode } from "@/components/features";
import { Box } from "@/components/shared/Sections";
import { Paragraph } from "@/components/shared/Typography";

export default function DeepGuard() {
	return (
		<Box>
			<Paragraph>再帰的に Readonly を付与する DeepGuard 型を、コンポーネントの props や読み込みの戻り値の際に使用しています。</Paragraph>
			<DeepGuardCode />
		</Box>
	)
}
