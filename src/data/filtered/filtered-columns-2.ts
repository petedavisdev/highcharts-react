import { Options } from 'highcharts';

export const filteredColumns2: Options = {
	title: { text: 'Columns with conversion rates 2' },
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
			data: [1898, 676, 676, 75, 46, 39, 35],
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
								[null, 38, 100, 13, 64, 70, 90][
									this.point.index
								] +
								'%'
						: '';
				},
				allowOverlap: true,
				align: 'right',
			},
		},
	},
};
