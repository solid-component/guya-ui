import { TinyColor } from "@ctrl/tinycolor";
import { AliasToken } from "../../theme/interface";

export interface SwitchToken {
  /**
   *  @desc 开关高度
   *  @descEN Height of Switch
   */
  trackHeight: number;
  /**
   * @desc 小号开关高度
   * @descEN Height of small Switch
   */
  trackHeightSM: number;
  /**
   * @desc 开关最小宽度
   * @descEN Minimum width of Switch
   */
  trackMinWidth: number;
  /**
   * @desc 小号开关最小宽度
   * @descEN Minimum width of small Switch
   */
  trackMinWidthSM: number;
  /**
   * @desc 开关内边距
   * @descEN Padding of Switch
   */
  trackPadding: number;
  /**
   * @desc 开关把手背景色
   * @descEN Background color of Switch handle
   */
  handleBg: string;
  /**
   * @desc 开关把手阴影
   * @descEN Shadow of Switch handle
   */
  handleShadow: string;
  /**
   * @desc 开关把手大小
   * @descEN Size of Switch handle
   */
  handleSize: number;
  /**
   * @desc 小号开关把手大小
   * @descEN Size of small Switch handle
   */
  handleSizeSM: number;
  /**
   * @desc 内容区域最小边距
   * @descEN Minimum margin of content area
   */
  innerMinMargin: number;
  /**
   * @desc 内容区域最大边距
   * @descEN Maximum margin of content area
   */
  innerMaxMargin: number;
  /**
   * @desc 小号开关内容区域最小边距
   * @descEN Minimum margin of content area of small Switch
   */
  innerMinMarginSM: number;
  /**
   * @desc 小号开关内容区域最大边距
   * @descEN Maximum margin of content area of small Switch
   */
  innerMaxMarginSM: number;
}

export const switchToken = (token: AliasToken): SwitchToken => {
  const { fontSize, lineHeight, controlHeight, colorWhite } = token;

  const height = fontSize * lineHeight;
  const heightSM = controlHeight / 2;
  const padding = 2; // Fixed value
  const handleSize = height - padding * 2;
  const handleSizeSM = heightSM - padding * 2;

  return {
    trackHeight: height,
    trackHeightSM: heightSM,
    trackMinWidth: handleSize * 2 + padding * 4,
    trackMinWidthSM: handleSizeSM * 2 + padding * 2,
    trackPadding: padding, // Fixed value
    handleBg: colorWhite,
    handleSize,
    handleSizeSM,
    handleShadow: `0 2px 4px 0 ${new TinyColor("#00230b")
      .setAlpha(0.2)
      .toRgbString()}`,
    innerMinMargin: handleSize / 2,
    innerMaxMargin: handleSize + padding + padding * 2,
    innerMinMarginSM: handleSizeSM / 2,
    innerMaxMarginSM: handleSizeSM + padding + padding * 2,
  };
};
