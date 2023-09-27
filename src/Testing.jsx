import React, { useState } from "react";

const Testing = ({ sidebarActive }) => {
	return (
		<div className={`sidebar ${sidebarActive ? "open" : ""}`}>
			<div className="sidebar-content">
				<ul>
					<li>
						<h1>Lol</h1>
					</li>
					<li>
						<h1>Lol</h1>
					</li>
					<li>
						<h1>Lol</h1>
					</li>
					<li>
						<h1>Lol</h1>
					</li>
					<li>
						<h1>Lol</h1>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Testing;
