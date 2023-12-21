import { Options } from 'highcharts';

export const filteredColumns1: Options = {
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
			data: [245, 123, 112, 102, 102, 14, 4],
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
								[null, 50, 94, 97, 100, 14, 30][
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
