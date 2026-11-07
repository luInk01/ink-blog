import type { ProfileConfig } from "../../types/config";

/**
 * 个人资料配置覆盖（从旧版 src/config.ts 迁移）
 */
export default {
	name: "Lu Ink",
	bio: "好耶！！！",
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/10970272",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/luInk01",
		},
	],
} satisfies DeepPartial<ProfileConfig>;
