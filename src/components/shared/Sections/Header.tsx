import { GlassButton, NavCheckbox } from "@/components/features";
import { Icon } from "@/components/shared/Utils";
import "./Header.sass";

export default function Header() {
	return (
		<header>
			<NavCheckbox />
			<GlassButton as="a" href="/" testid="btn-header-home">
				<p>
					<span>Home</span>
				</p>
				<Icon type="home" />
			</GlassButton>
			<GlassButton as="a" href="/archives/" testid="btn-header-archives">
				<p>
					<span>Archives</span>
				</p>
				<Icon type="folder" />
			</GlassButton>
			<GlassButton as="a" href="/types/" testid="btn-header-types">
				<p>
					<span>Types</span>
				</p>
				<Icon type="code" />
			</GlassButton>
			<GlassButton as="div" id="btn_nav">
				<span></span>
			</GlassButton>
		</header>
	)
}
