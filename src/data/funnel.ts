import { Options } from 'highcharts';

export const funnel: Options = {
	title: { text: 'Funnel chart' },
	series: [
		{
			type: 'funnel',
			name: 'recipients',
			data: [
				['Delivered', 4],
				['Opened', 4],
				['Clicked', 1],
			],
		},
	],
	plotOptions: {
		series: {
			dataLabels: {
				inside: true,
			},
		},
		funnel: {
			neckHeight: 0,
		},
	},
};
