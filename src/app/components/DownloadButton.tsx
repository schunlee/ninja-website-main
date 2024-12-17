import { Button } from "@chakra-ui/react/button";
import React from "react";

function DownloadButton() {
  return (
    <Button
      as="a"
      href="https://cdn.jksfun.com/xshy_apk/pixelshippuden_f_release_1127160000.apk"
      bgColor="black"
      mr={3}
      backgroundImage="url('https://pics.narutostorm.com/download.png')" // 替换为你的图片路径
      bgSize="contain" // 背景覆盖
      bgPosition="center" // 背景居中
      bgRepeat="no-repeat" // 不重复背景
      _hover={{ opacity: 0.8 }} // 悬停效果
      _active={{ transform: "scale(0.95)" }} // 点击效果
      border="none" // 无边框
      width={{ base: "80px", md: "80px" }} // 设置宽度
      height="60px" // 设置高度
      padding="0" // 内边距设置为0以完全显示图片
      color="transparent" // 文本颜色透明
    >
      DOWNLOAD
    </Button>
  );
}

export default DownloadButton;
