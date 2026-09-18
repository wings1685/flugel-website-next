export const flugel = 'Flügel';
export const siteTitle = `${flugel}.biz`;
export const siteDescription = `${flugel}.biz は、京都市内のウェブサイト制作・ウェブシステム開発を行うフリーランスです。`;

export const monthData = {
	jan: '伏見稲荷大社',
	feb: '鹿苑寺',
	mar: '北野天満宮',
	apr: '背割堤',
	may: '糺の森',
	jun: '嵐山',
	jul: '貴船',
	aug: '天橋立',
	sep: '御苑',
	oct: '賀茂御祖神社',
	nov: '禅林寺',
	dec: '祇園',
} as const;
export const months = Object.keys(monthData);
export type Months = typeof months[number];

export const blogEndpoint = 'https://wings.hatenablog.com';
