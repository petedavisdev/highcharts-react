import { Options } from 'highcharts';

export const line: Options = {
	title: {
		text: 'Line chart',
	},
	xAxis: {
		title: {
			text: 'Months',
		},
		categories: [
			'Nov `22',
			'Dec `22',
			'Jan `23',
			'Feb `23',
			'Mar `23',
			'Apr `23',
			'May `23',
			'Jun `23',
			'Jul `23',
			'Aug `23',
			'Sep `23',
			'Oct `23',
			'Nov `23',
		],
	},
	yAxis: {
		title: {
			text: '',
		},
	},
	series: [
		{
			name: 'Offers',
			type: 'spline',
			data: [0, 11, 8, 5, 3, 1, 12, 10, 17, 6, 5, 2, 5],
		},
		{
			name: 'Hires',
			type: 'spline',
			data: [0, 0, 0, 0, 0, 0, 8, 7, 13, 5, 4, 1, 2],
		},
	],
};
