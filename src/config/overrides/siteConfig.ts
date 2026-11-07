import type { SiteConfig } from "../../types/config";

/**
 * 站点配置覆盖（从旧版 src/config.ts 迁移）
 */
export default {
	lang: "zh_CN",
	title: "Ink Notes",
	subtitle: "写给未来自己的备忘录",
	siteURL: "https://blog.luink.net/",

	navbarTitle: {
		mode: "logo",
		text: "Ink Notes",
	},

	bilibili: {
		vmid: "10970272",
	},

	banner: {
		homeText: {
			title: "Ink Notes",
			subtitle: ["写给未来自己的备忘录"],
			typewriter: {
				enable: false,
			},
		},
	},
} satisfies DeepPartial<SiteConfig>;
