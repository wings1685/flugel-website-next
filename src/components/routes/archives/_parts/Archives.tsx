import { sites } from "../_models/usePage";
import { Glass, HorizontalList, VerticalList } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import "./Archives.sass";

export default function Archives() {
	return (
		<Glass as="section">
			<PageTitle icon="folder">構築・実験一覧</PageTitle>
			<VerticalList>
				{sites.map(site => (
					<li key={ site.description }>
						<Paragraph className="archives_paragraph">{ site.description }</Paragraph>
						<HorizontalList className="monospace">
							{site.stacks.map(stack => (
								<li key={ stack }>{ stack }</li>
							))}
						</HorizontalList>
					</li>
				))}
			</VerticalList>
		</Glass>
	)
}
