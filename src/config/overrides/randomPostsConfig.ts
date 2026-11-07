import type { RandomPostsConfig } from "../../types/config";

/**
 * 随机文章配置覆盖：关闭
 */
export default {
	enable: false,
} satisfies DeepPartial<RandomPostsConfig>;
