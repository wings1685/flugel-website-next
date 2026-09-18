import { codeToHtml } from "shiki";

export const getHighlightedCode = async (code: string, lang: string) => {
	return await codeToHtml(code, {
		lang,
		theme: 'dark-plus'
	});
};
export const getHighlightedCodeWithFormat = async (text: string, lang?: string) => {
	const language = lang ?? 'typescript';
	let code = text;
	if (code.charAt(0) === "\n") code = code.substring(1);

	return await codeToHtml(code, {
		lang: language,
		theme: 'dark-plus'
	});
};
