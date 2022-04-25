import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import { BsCheckCircleFill, BsTrophyFill } from "react-icons/bs";
import { BiReset } from "react-icons/bi";

const ListApp = (props) => {
	const [todo, setTodo] = useState("");
	const [list, setList] = useState([]);
	const [strike, setStrike] = useState("");
	const [done, setDone] = useState([]);

	const addItem = (item) => {
		const newList = [...list, item];

		return setList(newList), setTodo("");
	};

	const deleteItem = (i) => {
		const current = [...list];

		const updatedList = current.filter((value, index) => {
			return index !== i;
		});

		return setList(updatedList);
	};
	const resetAll = () => {
		return setList([]), setStrike(""), setDone([]);
	};

	const addDone = (item, i) => {
		const newDone = [...done, item];

		return setDone(newDone), deleteItem(i);
	};

	return (
		<>
			<div className="topper">
				<span className="quote"> Lists are a form of power.</span>
				<br />
				<span className="author">- A. S. Byatt</span>
			</div>

			<div className="form">
				<h1>Miami Vibes List</h1>
				<input
					placeholder="Start Typing.."
					value={todo}
					onChange={(event) => setTodo(event.currentTarget.value)}
				/>
				<SiAddthis className="add" onClick={() => addItem(todo)} />
				<BiReset className="reset" onClick={() => resetAll()} />
				RESET
				<ul>
					{list.map((value, i) => {
						return (
							<span className="underline">
								<li key={i}>
									{value}
									<BsCheckCircleFill
										className="checkbox"
										onClick={() => addDone(value, i)}
									/>

									<BsTrash
										className="del"
										onClick={() => deleteItem(i)}
									/>
								</li>
							</span>
						);
					})}
					{done.map((complete, x) => {
						return (
							<li key={x} className="line">
								{complete} <BsTrophyFill className="yay" />
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default ListApp;
