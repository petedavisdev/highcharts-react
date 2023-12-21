import { Options } from 'highcharts';

export const bar: Options = {
	title: {
		text: 'Stacked bar chart',
	},
	xAxis: {
		categories: [''],
	},
	series: [
		{
			type: 'bar',
			name: '1-5',
			data: [38],
		},
		{
			type: 'bar',
			name: '6-13',
			data: [8],
		},
		{
			type: 'bar',
			name: '14-18',
			data: [1],
		},
		{
			type: 'bar',
			name: '19+',
			data: [0],
		},
	],
	yAxis: {
		reversedStacks: false,
	},
	plotOptions: {
		bar: {
			stacking: 'percent',
			dataLabels: {
				enabled: true,
				format: '{point.percentage:.0f}%',
			},
		},
	},
};
