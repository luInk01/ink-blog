import type { FullscreenWallpaperConfig } from "../../types/config";

/**
 * 全屏壁纸配置覆盖：关闭（配合 wallpaperMode 隐藏切换按钮）
 */
export default {
	enable: false,
} satisfies DeepPartial<FullscreenWallpaperConfig>;
