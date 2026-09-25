export const sleep = (ms: number): Promise<number> => {
	return new Promise(resolve => {
		const timeoutID = window.setTimeout(() => resolve(timeoutID), ms);
	});
}

export const unescapeTag = (text: string) => text.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
