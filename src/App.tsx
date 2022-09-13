import React from 'react';
import './App.css';
import ChartJs from './components/chart/ChartJs';
import TreeViewList from "./components/treeview/TreeViewList";
import HeaderToolBar from "./components/chart/HeaderToolBar";
import SelectCoin from './components/SelectCoin/SelectCoin';

const App : React.FC = () : JSX.Element => {
	return (
		<div className="container">
			<HeaderToolBar />
			<ChartJs />
			<SelectCoin />
			<TreeViewList />
		</div>
	);
}

export default App;
