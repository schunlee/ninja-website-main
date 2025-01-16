import { Button } from "@chakra-ui/react/button";
import Script from "next/script";
import React, { useEffect } from "react";

function DownloadButton() {
  useEffect(() => {
    const mid = "G-WTJRGYNH5T";
    const apisecret = "9CrFr20pSrK994kdnQneAA";
    function getAdConfig() {
      const domain = track.getcurrentDomain();
      const adCfg = {};
      adCfg.packId = 6632;
      adCfg.domain = domain;
      adCfg.utm_data = "";
      adCfg.gad_source = track.getQueryParam("gad_source");
      adCfg.wbraid = track.getQueryParam("wbraid");
      adCfg.gbraid = track.getQueryParam("gbraid");
      adCfg.gclid = track.getQueryParam("gclid");
      return adCfg;
    }
    let adCfg = getAdConfig();
    window.dataLayer = window.dataLayer || [];
    // 确保 gtag 函数可用
    const gtag = (...args) => {
      window.dataLayer.push(args);
    };

    // 将 gtag 函数绑定到 window 对象，以便在其他地方可以访问
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", mid, { gclid: adCfg.gclid, user_id: track.getDeviceId() });

    function getAdurl() {
      const gclid = adCfg.gclid;
      const domain = track.getcurrentDomain();
      let ad_detail_url = domain + "?gclid=";
      if (gclid) ad_detail_url += gclid;
      return ad_detail_url;
    }

    function onClick() {
      track.trackGTAGAndBI("G1_ClickAdPageView", 30, adCfg);
      const adurl = getAdurl();
      const localuuid = track.getDeviceId();
      const str =
        "touristuuid=" +
        localuuid +
        "&adurl=" +
        adurl +
        "&gad_source=" +
        adCfg.gad_source +
        "&gbraid=" +
        adCfg.gbraid +
        "&mid=" +
        mid +
        "&apisecret=" +
        apisecret;
      console.log("copy str = " + str);
      track.copyToClipboard(str, () => {
        let link = document.createElement("a");
        link.href =
          "https://cdn.jksfun.com/xshy_apk/pixelshippuden_f_release_1127160000.apk";
        link.click();
      });
    }
    document.getElementById("downloadBtn").addEventListener("click", onClick);
    track.trackGTAGAndBI("G1_AdPageView1", 20, adCfg);
    track.commit(adCfg.domain, adCfg.gclid, adCfg.gad_source, adCfg.gbraid);
  }, []);
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WTJRGYNH5T"
        strategy="beforeInteractive"
      />
      <Script src="/js/jquery.js" strategy="beforeInteractive" />
      <Script src="/js/script.js" strategy="beforeInteractive" />
      <Script src="/js/crypto-js.js" strategy="beforeInteractive" />
      <Script
        src="/js/nativeTrackFireBase_v12.js"
        strategy="beforeInteractive"
      />
      <Button
        as="a"
        id="downloadBtn"
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
    </>
  );
}

export default DownloadButton;
