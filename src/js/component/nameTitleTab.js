import { useEffect } from "react";

export default function changeTitle() {
	useEffect(() => {
		document.title = "Best List Ever";
	});
}
