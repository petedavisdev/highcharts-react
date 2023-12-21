import { Options } from 'highcharts';

export const column1: Options = {
	title: { text: 'Columns with conversion rates 1' },
	xAxis: {
		categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
	},
	yAxis: {
		title: {
			text: '',
		},
	},
	series: [
		{
			name: '',
			type: 'column',
			data: [546, 310, 310, 133, 102, 14, 8],
		},
	],
	legend: {
		enabled: false,
	},
	plotOptions: {
		column: {
			colorByPoint: true,
			dataLabels: {
				enabled: true,
				formatter() {
					return this.point.index
						? '➔ ' +
								[0, 57, 100, 43, 77, 14, 57][this.point.index] +
								'%'
						: '';
				},
				allowOverlap: true,
				align: 'right',
			},
		},
	},
};
