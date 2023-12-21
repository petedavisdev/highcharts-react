import Highcharts from 'highcharts';
import Funnel from 'highcharts/modules/funnel';
import HighchartsReact from 'highcharts-react-official';

import { BooleanParam, useQueryParams } from 'use-query-params';

import styled from 'styled-components';

import './modern-normalize.css';

import { demoData, filteredDemoData } from './data';

import { useEffect, useState } from 'react';

// Initialize any non-core charts, e.g. funnel chart
Funnel(Highcharts);

const defaultChartOptions: Highcharts.Options = {
	colors: [
		'#391ee6',
		'#06742b',
		'#ffbf00',
		'#bf0338',
		'violet',
		'cyan',
		'limegreen',
		'orange',
	],
};

function Chart(props: { options: Highcharts.Options }) {
	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={{ ...defaultChartOptions, ...props.options }}
		/>
	);
}

const Main = styled.main`
	padding: 2rem;
`;

const Columns = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	place-content: top;
`;

export default function App() {
	const [query, setQuery] = useQueryParams({
		x: BooleanParam,
		y: BooleanParam,
	});

	const [dashboardData, setDashboardData] = useState<typeof demoData>();

	useEffect(() => {
		console.log(query);

		// This line is just a demo. You would fetch the new data here:
		const newData = query.x || query.y ? filteredDemoData : demoData;

		setDashboardData(newData);
	}, [query]);

	return (
		<Main>
			<h1>Reporting UI demo</h1>

			<p>
				Filters: {query.x && 'x,'} {query.y && 'y'}
			</p>

			<label>
				<input
					type="checkbox"
					name="x"
					id="x"
					checked={query.x ?? false}
					onChange={(e) => setQuery({ x: e.target.checked })}
				/>
			</label>

			{/* `key` is used to make sure all charts are re-rendered when the data changes */}
			{dashboardData && (
				<Columns key={JSON.stringify(dashboardData)}>
					<Chart options={dashboardData.column1} />
					<Chart options={dashboardData.column2} />
					<Chart options={dashboardData.line} />
					<Chart options={dashboardData.funnel} />
					<Chart options={dashboardData.pie} />
					<Chart options={dashboardData.bar} />
				</Columns>
			)}
		</Main>
	);
}
