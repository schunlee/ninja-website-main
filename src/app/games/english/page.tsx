"use client";
import { useEffect } from "react";
import "/public/css/bootstrap.min.css";
import "/public/css/style.css";
import "/public/css/magnific-popup.css";
import "/public/css/animate.css";
import "/public/css/slick.css";
import "/public/css/animate.css";
import Script from "next/script";

const Home = () => {
  useEffect(() => {
    var year = new Date().getFullYear();
    $("#copywrite").text(`${year}©Pixel Shippuden`);
    const mid = "G-WTJRGYNH5T";
    const apisecret = "9CrFr20pSrK994kdnQneAA";
    function getAdConfig() {
      var domain = track.getcurrentDomain();
      var adCfg = {};
      adCfg.packId = 6632;
      adCfg.domain = domain;
      adCfg.utm_data = "";
      adCfg.gad_source = track.getQueryParam("gad_source");
      adCfg.wbraid = track.getQueryParam("wbraid");
      adCfg.gbraid = track.getQueryParam("gbraid");
      adCfg.gclid = track.getQueryParam("gclid");
      return adCfg;
    }
    var adCfg = getAdConfig();
    window.dataLayer = window.dataLayer || [];
    // 确保 gtag 函数可用
    const gtag = (...args) => {
      window.dataLayer.push(args);
    };

    // 将 gtag 函数绑定到 window 对象，以便在其他地方可以访问
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", mid, { gclid: adCfg.gclid, user_id: track.getDeviceId() });

    function getAdurl(paramJson) {
      let gclid = adCfg.gclid;
      let domain = track.getcurrentDomain();
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
        var link = document.createElement("a");
        link.href =
          "https://cdn.jksfun.com/xshy_apk/pixelshippuden_f_release_1127160000.apk";
        link.click();
      });
    }
    document.getElementById("installBtn").addEventListener("click", onClick);
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
      <div
        style={{
          backgroundImage: "url(/gallery/fish-bg.svg)",
          backgroundSize: "10%",
        }}
      >
        <header className="bg-black-50 fixed-top">
          <div className="container">
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-3 col-sm-4">
                <img
                  src="/gallery/logo-Z.png"
                  style={{ display: "block", width: "80px" }}
                />
              </div>
              <div className="col-6 col-sm-4">
                <p
                  className="text-white"
                  style={{ marginTop: "5px", marginBottom: "0px" }}
                >
                  Download App
                </p>
                <span
                  className="text-white"
                  style={{
                    whiteSpace: "nowrap",
                    fontSize: "xx-small",
                    color: "silver",
                  }}
                >
                  Pixel style Naruto RPG game
                </span>
              </div>
              <div className="col-3 col-sm-4">
                <a
                  id="installBtn"
                  type="button"
                  className="btn btn-main rounded-pill"
                  style={{
                    fontSize: "xx-small",
                    padding: "8px",
                    marginLeft: "-20px",
                  }}
                >
                  Install
                </a>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="container">
            <div
              className="row align-items-center"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="row">
                <img
                  src="/gallery/banner.png"
                  style={{
                    marginTop: "0px",
                    paddingTop: "80px",
                    width: "60vh",
                  }}
                />
              </div>
              <div
                className="col-lg-12 col-md-12"
                style={{ marginTop: "30px" }}
              >
                <div className="about-item position-relative mt-5 mt-lg-0">
                  <h2 className="mt-1 mb-3">Pixel Shippuden</h2>
                  <h4 className="mt-1 mb-3">
                    - The best <span className="text-color">pixel style</span>{" "}
                    Naruto <span className="text-color">RPG</span> game
                  </h4>

                  <p className="mb-4 font-weight-bold">
                    Enter the Naruto universe in our pixel-style RPG! Join
                    iconic characters, explore the Hidden Leaf Village, and
                    complete epic mis sions. Customize your ninja, master unique
                    skills, and face off against powerful enemies. With
                    nostalgic pixel art and engaging game play, this is the
                    perfect adventure for any Naruto fan!
                  </p>
                  <h4 className="mt-1 mb-3">- Gift Code:</h4>
                  <h5 className="mt-1 mb-3 text-color font-italic">
                    naruto666 sasuk666 kakashi666
                  </h5>
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-main" id="downloadBtn">
                      Install<i className="ti-angle-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer
          className="footer bg-black-50"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }} // Center the content
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                {/* 使用 Flexbox 对齐图标和文本 */}
                <a href="https://www.narutostorm.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                    style={{ fill: "white" }}
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                  </svg>
                </a>
                <p
                  id="copywrite"
                  className="center"
                  style={{
                    marginLeft: "5px",
                    transform: "translateY(2px)",
                    color: "white",
                  }} // 调整颜色
                ></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
