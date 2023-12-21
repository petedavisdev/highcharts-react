import { Options } from 'highcharts';

export const pie: Options = {
	title: {
		text: 'Pie Chart',
	},
	series: [
		{
			type: 'pie',
			name: 'Users',
			data: [
				{
					name: 'Licensed',
					y: 324,
				},
				{
					name: 'Disabled',
					y: 6,
				},
				{
					name: 'Deleted',
					y: 433,
				},
			],
		},
	],
	legend: {
		enabled: true,
	},
	plotOptions: {
		pie: {
			showInLegend: true,
			innerSize: '50%',
		},
		series: {
			dataLabels: {
				formatter() {
					return [42.5, 0.8, 56.7][this.point.index] + '%';
				},
			},
		},
	},
};
