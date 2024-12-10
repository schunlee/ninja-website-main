// app/fonts.ts
import localFont from 'next/font/local';

const hanyiFont = localFont({
  src: './fonts/hanyi_pixel.ttf', // 字体文件路径
  display: 'swap', // 字体显示策略
});

const siyuanFont = localFont({
    src: './fonts/siyuan.otf', // 字体文件路径
    display: 'swap', // 字体显示策略
  });

  const ruiziFont = localFont({
    src: './fonts/ruizi.ttf', // 字体文件路径
    display: 'swap', // 字体显示策略
  });

export const fonts = {
  hanyiFont,
  siyuanFont,
  ruiziFont
};