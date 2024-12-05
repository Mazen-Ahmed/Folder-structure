import FolderIcon from "icons/folder";
import HtmlIcon from "icons/html";
import JavascriptIcon from "icons/javascript";
import PngIcon from "icons/png";
import SvgIcon from "icons/svg";
import TypescriptIcon from "icons/typscript";
import React, { useState } from "react";
import type { NodeComponentPropertiesType } from "types/node";

const NodeComponent = ({
	node,
	isSelected,
	setIsSelected,
	optionsMenuVisible,
	setOptionsMenuVisible,
}: NodeComponentPropertiesType) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpandHandler = () => {
		setIsExpanded(!isExpanded);
	};

	const iconSelectionHandler = (type: string) => {
		switch (type) {
			case "svg":
				return <SvgIcon />;
			case "img":
				return <PngIcon />;
			case "html":
				return <HtmlIcon />;
			case "ts":
				return <TypescriptIcon />;
			case "js":
				return <JavascriptIcon />;

			default:
				return <FolderIcon isExpanded={isExpanded} />;
		}
	};

	return (
		<div className="nodes">
			<div>
				{node.type === "folder" && (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
							cursor: "pointer",
						}}>
						<button
							onClick={toggleExpandHandler}
							style={{
								cursor: "pointer",
								fontWeight: "bold",
								userSelect: "none",
								border: "none",
								background: "none",
								color: "#fff",
								display: "flex",
								gap: 10,
								alignItems: "center",
								width: "100%",
							}}>
							{iconSelectionHandler(node.meta)}
							{node.name}
						</button>
					</div>
				)}

				{node.type === "file" && (
					<div
						style={{
							width: "90%",
							position: "relative",
							display: "flex",
							gap: 5,
							alignItems: "center",
						}}
						className={isSelected === node.name ? "active" : ""}
						onClick={() => setIsSelected(node.name)}
						onContextMenu={(e) => {
							e.preventDefault();
							setOptionsMenuVisible(node.name);
						}}
						onBlur={() => setOptionsMenuVisible(null)}>
						{iconSelectionHandler(node.meta)}
						{node.name}
						{optionsMenuVisible === node.name && (
							<div
								style={{
									position: "absolute",
									background: "#34495e",
									width: 200,
									height: "auto",
									display: "flex",
									flexDirection: "column",
									padding: 5,
									gap: 2,
									zIndex: 999,
									bottom: -80,
								}}>
								<button
									onClick={() =>
										console.log(`copy ${node.name}`)
									}>
									copy
								</button>
								<button
									onClick={() =>
										console.log(`delete ${node.name}`)
									}>
									delete
								</button>
								<button
									onClick={() =>
										console.log(`rename ${node.name}`)
									}>
									rename
								</button>
							</div>
						)}
					</div>
				)}
			</div>

			{isExpanded && node.children && (
				<div style={{ marginLeft: "20px" }}>
					{node.children.map((child: any) => (
						<NodeComponent
							key={child.name}
							node={child}
							isSelected={isSelected}
							setIsSelected={setIsSelected}
							optionsMenuVisible={optionsMenuVisible}
							setOptionsMenuVisible={setOptionsMenuVisible}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default NodeComponent;
