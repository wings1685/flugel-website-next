import { Glass } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";

export default function Terms() {
	return (
		<Glass as="section">
			<PageTitle icon="lock">著作権・運用・免責事項</PageTitle>
			<Paragraph>本ウェブサイトに掲載される画像やロゴマークを、無断で使用・複製（ダウンロード）することを固く禁止いたします。</Paragraph>
			<Paragraph>
				当方は予告無しにコンテンツの変更、削除などを行うことがあります。また、当方が必要と認めたときは、本ウェブサイト自体の運用を中断または中止することがありますので予めご了承ください。<br />
				なお、当方はコンテンツの変更、削除または本ウェブサイトを使用できなかったことにより発生するいかなる損害に対しても責任を負うものではありません。
			</Paragraph>
			<Paragraph>
				当方は、本ウェブサイトに情報を掲載する際には、あらゆる面から細心の注意を払っております。<br />
				しかし、本ウェブサイトをご利用になったことにより生じるいかなる損害についても責任を負うものではありません。
			</Paragraph>
		</Glass>
	)
}
