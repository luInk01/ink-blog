import type { NavBarConfig } from "../../types/config";
import { LinkPreset } from "../../types/config";

/**
 * 导航栏配置覆盖（从旧版 src/config.ts 迁移）
 */
export default {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "Links",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/luInk01",
					external: true,
					icon: "fa7-brands:github",
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/10970272",
					external: true,
					icon: "fa7-brands:bilibili",
				},
			],
		},
	],
} satisfies DeepPartial<NavBarConfig>;
