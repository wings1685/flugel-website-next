import { Glass, Group } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import { GlassButton } from "@/components/features";
import { Icon } from "@/components/shared/Utils";

export default function Page() {
	return (
		<main>
			<Glass as="section">
				<PageTitle icon="home">404 Not Found</PageTitle>
				<Paragraph>お探しのページは存在しないか、移動された可能性があります。</Paragraph>
				<Group>
					<GlassButton as="a" href="/">
						Home
						<Icon type="arrow" />
					</GlassButton>
				</Group>
			</Glass>
		</main>
	)
}
