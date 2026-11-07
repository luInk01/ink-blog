import type { SiteConfig } from "../../types/config";

/**
 * 站点配置覆盖（精简版）
 * 关闭全部特色页面，只保留核心博客功能
 */
export default {
	lang: "zh_CN",
	title: "Ink Notes",
	subtitle: "写给未来自己的备忘录",
	siteURL: "https://blog.luink.net/",

	// 精简：关闭所有特色页面（导航栏会自动隐藏对应链接）
	featurePages: {
		anime: false,
		diary: false,
		friends: false,
		projects: false,
		skills: false,
		timeline: false,
		albums: false,
		devices: false,
		aiTools: false,
	},

	navbarTitle: {
		mode: "logo",
		text: "Ink Notes",
	},

	bilibili: {
		vmid: "10970272",
	},

	// 精简：横幅只用一张固定图片，不轮播
	banner: {
		src: {
			desktop: ["/assets/desktop-banner/1.webp"],
			mobile: ["/assets/mobile-banner/1.webp"],
		},
		carousel: {
			enable: false,
		},
		homeText: {
			title: "Ink Notes",
			subtitle: ["写给未来自己的备忘录"],
			typewriter: {
				enable: false,
			},
		},
	},

	// 精简：隐藏壁纸模式切换按钮，固定使用横幅模式
	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "off",
	},
} satisfies DeepPartial<SiteConfig>;
