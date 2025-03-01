"use client"; // 确保这是一个客户端组件

import { usePathname } from "next/navigation"; // 从 next/navigation 导入
import Header from "./Header";
import Footer from "./Footer";

const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // 获取当前路径

  const noLayoutRoutes = [
    "/games/english",
    "/games/english/nativetrack",
    "/nativetrack",
    "/games/japanese",
    "/games/chinese",
    "/games/vietnamese",
    "/games/german",
    "/games/french",
    "/games/spanish",
    "/games/korean",
    "/games/thai",
    "/games/portuguese",
  ]; // 不需要布局的页面
  const isNoLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!isNoLayout && <Header />}
      {children}
      {!isNoLayout && <Footer />}
    </>
  );
};

export default ConditionalLayout;
