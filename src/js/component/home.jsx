import React, { useState } from "react";
import ListApp from "./listapp.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<div className="sheet">
				<div className="container">
					<span className="react-logo">
						<span className="nucleo"></span>
					</span>
				</div>

				<ListApp />
			</div>
		</>
	);
};

export default Home;
