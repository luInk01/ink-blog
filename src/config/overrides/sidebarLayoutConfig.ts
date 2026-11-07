import type { SidebarLayoutConfig } from "../../types/config";

/**
 * 侧边栏配置覆盖：精简版
 * 左栏：个人资料、公告、文章目录
 * 右栏：分类
 * 移动端抽屉：个人资料、公告、分类
 * （移除音乐、日历、站点统计、标签云）
 */
export default {
	components: {
		left: ["profile", "announcement", "card-toc"],
		right: ["categories"],
		drawer: ["profile", "announcement", "categories"],
	},
} satisfies DeepPartial<SidebarLayoutConfig>;
