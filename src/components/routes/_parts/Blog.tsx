import { Glass, VerticalList } from "@/components/shared/Sections";
import { PageTitle } from "@/components/shared/Typography";
import { Entries } from "../../features";
import { Icon } from "@/components/shared/Utils";
import "./Blog.sass";

export default function Blog() {
	return (
		<Glass as="section">
			<PageTitle icon="rss">記事</PageTitle>
			<VerticalList id="blog_entries">
				<Entries>
					<Icon type="arrow" />
				</Entries>
			</VerticalList>
		</Glass>
	)
}
