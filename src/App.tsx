import React from 'react';
import './App.css';
import ChartJs from './components/chart/ChartJs';

const App : React.FC = () : JSX.Element => {
	return (
		<div className="App">
			<ChartJs />
		</div>
	);
}

export default App;
