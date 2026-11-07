import type { AnnouncementConfig } from "../../types/config";

/**
 * 公告配置覆盖（从旧版 src/config.ts 迁移）
 */
export default {
	content: "我一定要坚持记录呜呜呜呜",
} satisfies DeepPartial<AnnouncementConfig>;
