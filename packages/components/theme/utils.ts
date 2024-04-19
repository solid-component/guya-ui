import { GenSize, GenStatus } from "./types";

export const genStatus: GenStatus = (status) => {
  return {
    [`&:not([disabled]):not(.is-disabled):hover`]: {
      ...status.hover,
    },
    "&:not([disabled]):not(.is-disabled):active": {
      ...status.active,
    },
    "&:not([disabled]):not(.is-disabled).is-focus": {
      ...status.focus,
    },
    "&[disabled], &.is-disabled": {
      cursor: "not-allowed",
      ...status.disabled,
    },
  };
};

export const genSize: GenSize = (prefix, size) => {
  return {
    [`&.${prefix}-large`]: {
      ...size.large,
    },
    [`&.${prefix}-small`]: {
      ...size.small,
    },
  };
};


export function convertStringToKebabCase(str) {  
  // 将字符串中的每个字符转换为小写  
  let lowerCaseStr = str.toLowerCase();  

  // 使用正则表达式匹配每个大写字母前面的位置，并在那里插入"-"  
  // 注意: 使用正则表达式中的全局标志'g'和替换函数来插入"-"  
  let kebabCaseStr = lowerCaseStr.replace(/([A-Z])/g, function(match) {  
      return '-' + match.toLowerCase();  
  });  

  // 如果字符串以"-"开头，则移除它  
  if (kebabCaseStr.startsWith('-')) {  
      kebabCaseStr = kebabCaseStr.substring(1);  
  }  

  return kebabCaseStr;  
}  


const prefix = "happy";

export const genPrefix = (className: string) => `${prefix}-${className}`;
export const genPrefixClasses = (classes: string | Record<string, boolean | undefined>) => {
  if (typeof classes === "string") {
    return {
      [genPrefix(classes)]: true,
    };
  }
  return Object.entries(classes).reduce((classStr, [className, value]) => {
    classStr[genPrefix(className)] = value
    return classStr;
  }, {});
};
