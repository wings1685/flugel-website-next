import { experiments } from "../_models/usePage";
import { Glass, HorizontalList, VerticalList } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import "./Archives.sass";

export default function Archives() {
	return (
		<Glass as="section">
			<PageTitle icon="folder">実験一覧</PageTitle>
			<VerticalList>
				{experiments.map(experiment => (
					<li key={ experiment.description }>
						<Paragraph className="archives_paragraph">{ experiment.description }</Paragraph>
						<HorizontalList className="monospace">
							{experiment.stacks.map(stack => (
								<li key={ stack }>{ stack }</li>
							))}
						</HorizontalList>
					</li>
				))}
			</VerticalList>
		</Glass>
	)
}
