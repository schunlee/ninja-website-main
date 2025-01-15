"use client";
import { useEffect } from "react";

const TrackPage = () => {
  useEffect(() => {
    // 加载外部脚本
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");        
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    const initTracking = async () => {
      try {
        await loadScript("/js/nativeTrackFireBase_v12.js");
      } catch (e) {}

      await loadScript("/js/crypto-js.js");

      let measurement_id = track.getQueryParam("measureid");
      let api_secret = track.getQueryParam("apisecret");

      track.init(measurement_id, api_secret);

      const getAdConfig = () => {
        return {
          packId: 6632,
          domain: track.getQueryParam("adurl"),
          gad_source: track.getQueryParam("gad_source"),
          wbraid: track.getQueryParam("wbraid"),
          gbraid: track.getQueryParam("gbraid"),
          gclid: track.getQueryParam("gclid"),
        };
      };

      localStorage.setItem("Touristuuid", track.getQueryParam("touristuuid"));
      const adCfg = getAdConfig();

      // 动态加载 Google Analytics 脚本
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurement_id}`;
      document.head.appendChild(gtagScript);

      gtagScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", measurement_id);
        console.log(
          `Google Analytics initialized with measurement_id: ${measurement_id}`
        );
      };
    };

    initTracking();
  }, []);

  const trackCustomEvent = (event, order, ext) => {
    const gclid = adCfg.gclid || "";
    const gad_source = adCfg.gad_source || "";
    const wbraid = adCfg.wbraid || "";
    const gbraid = adCfg.gbraid || "";
    track.trackMAPIAndBI(event, adCfg, order, ext);
    console.log(
      `trackCustomEvent - Event: ${event}, Order: ${order}, Ext: ${ext}, Ad Config: gclid=${gclid}, gad_source=${gad_source}, wbraid=${wbraid}, gbraid=${gbraid}`
    );
  };

  const trackPurchaseEvent = (
    currency,
    cost,
    orderId,
    goodsId,
    goods_name,
    evtTag
  ) => {
    track.trackPurchaseMAPIAndBI(
      evtTag + "purchase",
      {
        currency,
        cost,
        orderId,
        goodsId,
        goods_name,
      },
      adCfg,
      3100,
      Math.round(parseFloat(cost) * 100)
    );

    console.log(
      `trackPurchaseEvent - Currency: ${currency}, Cost: ${cost}, Order ID: ${orderId}, Goods ID: ${goodsId}, Goods Name: ${goods_name}, Ad Config: ${JSON.stringify(
        adCfg
      )}`
    );
  };

  return <div></div>;
};

export default TrackPage;
