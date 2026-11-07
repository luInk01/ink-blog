import type { PioConfig } from "../../types/config";

/**
 * 看板娘配置覆盖：关闭
 */
export default {
	enable: false,
} satisfies DeepPartial<PioConfig>;
