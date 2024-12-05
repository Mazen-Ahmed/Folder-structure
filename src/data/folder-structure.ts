export const FolderStructureData = {
	type: "folder",
	name: "parent",
	children: [
		{
			type: "folder",
			name: "data",
			children: [
				{
					type: "folder",
					name: "images",
					children: [
						{
							type: "file",
							meta: "img",
							name: "image.png",
						},
						{
							type: "file",
							meta: "img",
							name: "image2.webp",
						},
					],
				},
				{
					type: "file",
					meta: "svg",
					name: "logo.svg",
				},
			],
		},
		{
			type: "file",
			meta: "html",
			name: "index.html",
		},
		{
			type: "folder",
			name: "public",
			children: [
				{
					type: "file",
					meta: "ts",
					name: "index.ts",
				},
			],
		},
		{
			type: "folder",
			name: "root",
			children: [
				{
					type: "folder",
					name: "src",
					children: [
						{
							type: "file",
							meta: "js",
							name: "index.js",
						},
					],
				},
			],
		},
	],
};
