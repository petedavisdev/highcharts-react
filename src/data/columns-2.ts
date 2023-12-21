import { Options } from 'highcharts';

export const column2: Options = {
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
			data: [12898, 6076, 6076, 775, 496, 69, 35],
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
								[0, 47, 100, 13, 64, 14, 51][this.point.index] +
								'%'
						: '';
				},
				allowOverlap: true,
				align: 'right',
			},
		},
	},
};
