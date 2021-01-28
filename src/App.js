import './App.css';
import { IoMoonOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
function App() {
	return (
		<div>
			<div className="container">
				<div className="header flex justify-between p-5">
					<div className="title">
						<h3 className="text-xl font-semibold">Where in the world?</h3>
					</div>
					<div className="theme-toggle flex items-center">
						<IoMoonOutline  />
						<span className="ml-3">Dark Mode</span>
					</div>
				</div>
				<div className="filters">
					<div className="input">
						<input type="text" placeholder="Search for a country" />
						<IoSearchOutline />
					</div>
					<select name="region" id="region">
						<option value="Africa">Africa</option>
						<option value="America">America</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default App;
