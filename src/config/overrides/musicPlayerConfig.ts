import type { MusicPlayerConfig } from "../../types/config";

/**
 * 音乐播放器配置覆盖：关闭
 */
export default {
	enable: false,
} satisfies DeepPartial<MusicPlayerConfig>;
