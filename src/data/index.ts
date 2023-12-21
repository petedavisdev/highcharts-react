import { column1 } from './columns-1';
import { column2 } from './columns-2';
import { bar } from './bar';
import { funnel } from './funnel';
import { line } from './line';
import { pie } from './pie';

import { filteredColumns1 } from './filtered/filtered-columns-1';
import { filteredColumns2 } from './filtered/filtered-columns-2';

export const demoData = {
	column1,
	column2,
	line,
	funnel,
	pie,
	bar,
};

export const filteredDemoData = {
	...demoData,
	column1: filteredColumns1,
	column2: filteredColumns2,
};
