export interface NodeType {
	type: string;
	meta: string;
	name: "file" | "folder";
	children?: NodeType[];
}

export interface NodeComponentPropertiesType {
	node: any;
	isSelected: string | null;
	setIsSelected: (id: string | null) => void;
	optionsMenuVisible: string | null;
	setOptionsMenuVisible: (id: string | null) => void;
}
