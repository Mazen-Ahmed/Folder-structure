import NodeComponent from "../nodes";
import { FolderStructureData } from "data/folder-structure";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
	const [folderStructure, setFolderStructure] =
		useState<any>(FolderStructureData);

	const [isSelected, setIsSelected] = useState<string | null>(null);

	const [optionsMenuVisible, setOptionsMenuVisible] = useState<string | null>(
		null
	);

	useEffect(() => {
		window.addEventListener("click", () => setOptionsMenuVisible(null));
		return () => {
			window.removeEventListener("click", () =>
				setOptionsMenuVisible(null)
			);
		};
	}, [setOptionsMenuVisible]);
	return (
		<div className="sidebar">
			<NodeComponent
				isSelected={isSelected}
				setIsSelected={setIsSelected}
				node={folderStructure}
				optionsMenuVisible={optionsMenuVisible}
				setOptionsMenuVisible={setOptionsMenuVisible}
			/>
		</div>
	);
};

export default Sidebar;
