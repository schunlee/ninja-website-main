let Track = (function () {
    const ANALYZE_URL = "https://gmp15h5.jksfun.com";
    let _identityInfo = {};
    const k_Identity = "k_Identity";
    const privateKey = "nfadfakldfoe";
    const ROOT_URL = "https://p15platform.jksfun.com";
    let measurement_id = ``;
    let api_secret = ``;
    let _gClientId = '';
    function TrackCtor() {
        let indentity_str = localStorage.getItem(k_Identity);
        if (indentity_str) {
            _identityInfo = JSON.parse(indentity_str);
        }
    }
    let _analyze_start = 0;
    function _calculateTime() {
        if (_analyze_start > 0) {
            return new Date().getTime() - _analyze_start;
        }
        else {
            return 0;
        }
    }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    let _proto = TrackCtor.prototype;

    

    function _track_owner(eventId, market, dorder, packid, adurl, utm_data, ext) {
        const analyzeUrl = "https://gmp15h5.jksfun.com/";
        var browserInfo = getBrowserInfo();
        var reqData = {
            deviceid: track.getDeviceId(),
            dorder: dorder,
            packId: packid,
            new: "1",
            sid: "0",
            deviceName: "",
            key: market,
            time: _calculateTime(),
            msg: eventId,
            adurl: adurl,
            surl: utm_data,
        };
        if (browserInfo) {
            var parts = browserInfo.split(',');
            reqData.ext1 = parts[0].trim(),
                reqData.ext2 = parts[1].trim(),
                reqData.ext3 = parts[3].trim()
        }
        if (ext) reqData.ext = ext;
        console.log("download background send Event:" + eventId);

        let cryptoStr = "";
        for (const item in reqData) {
            cryptoStr += reqData[item];
        }
        const sign = CryptoJS.MD5(cryptoStr.toLowerCase()).toString();

        // 添加签名
        reqData.sign = sign;

        // 将数据转换为JSON字符串
        const data = new Blob([JSON.stringify(reqData)], { type: 'application/json' });

        // 构建完整URL
        const url = analyzeUrl + "client-analyze/newmark";

        // 使用navigator.sendBeacon()发送数据
        const success = navigator.sendBeacon(url, data);
        if (!success) {
            // 如果sendBeacon失败，可以在这里添加备用代码，例如使用fetch或XMLHttpRequest作为后备
            console.log("sendBeacon failed, consider fallback methods");
        }
    }

    function _track_owner_ajax(eventId, market, dorder, packid, adurl, ext1Cfg, ext) {
        const reqData = {
            deviceid: track.getDeviceId(),
            dorder: dorder,
            packId: packid,
            new: "1",
            sid: "0",
            deviceName: "",
            key: market,
            time: _calculateTime(),
            msg: eventId,
            adurl: adurl,
            surl: "", 
            ext:ext,
            ext1:JSON.stringify(ext1Cfg)
        };
        console.log("download background send Event:" + eventId);

        const xhr = new XMLHttpRequest();
        xhr.timeout = 60000;

        let url = ANALYZE_URL + "/client-analyze/newmark";
        let params = "";
        let cryptoStr = "";

        for (const item in reqData) {
            params += `${item}=${reqData[item]}&`;
            cryptoStr += reqData[item];
        }

        params = params.toLowerCase().slice(0, -1);
        console.log("html crypto_str:" + cryptoStr);
        params += `&sign=${CryptoJS.MD5(cryptoStr.toLowerCase())}`;
        params = encodeURI(params);
        url = `${url}?${params}`;
        console.log("html url:" + url);
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(null);
    };

    async function _fetchIdentityData(adConfig) {
        const clientIP = await getClientIP();
        let { adurl, utm_data, pixel_id, gclid } = adConfig;
        if (!adurl) {
            const identityData = await query(clientIP);
                adurl = identityData.adurl;
                pixel_id = "";
                gclid = identityData.gclid;
                utm_data = "";
        }
        return { adurl, utm_data, pixel_id, gclid, clientIP };
    }

    _proto.init = function(measurementId, apiSecret){
        measurement_id = measurementId;
        api_secret = apiSecret;
        console.log(`Initialized with measurement_id: ${measurement_id}, api_secret: ${api_secret}`);
    },
    _proto.getQueryParam = function(param) {
        // 从 window.location.search 中提取参数值
        param = param.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + param + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    },
    _proto.getcurrentDomain = function() {
        return window.location.hostname.replace(/\/$/, "");
    };
    _proto.getDeviceId = function() {
        if (typeof localStorage !== 'undefined') {
            let localuuid = localStorage.getItem("Touristuuid");
            if (!localuuid) {
                var uuid = uuidv4();
                localStorage.setItem('Touristuuid', uuid);
            }
        }
        return localStorage.getItem("Touristuuid");
    },

    function fallbackCopyToClipboard(text, onSuccess) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful && typeof onSuccess === 'function') {
                onSuccess();
            }
            return successful ? 'Text copied to clipboard: ' + text : 'Failed to copy text';
        } catch (err) {
            onSuccess();
            console.error('Fallback: Oops, unable to copy', err);
            return 'Unable to copy text to clipboard: ' + err;
        } finally {

            document.body.removeChild(textArea);
        }
    };

    _proto.copyToClipboard=function(text, onSuccess){
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                return navigator.clipboard.writeText(text)
                    .then(() => {
                        console.log('Text copied to clipboard: ' + text);
                        if (typeof onSuccess === 'function') {
                            onSuccess();
                        }
                        return 'Text copied to clipboard: ' + text;
                    })
                    .catch((err) => {
                        console.warn('Failed to copy using clipboard API, falling back to execCommand', err);
                        return fallbackCopyToClipboard(text, onSuccess);
                    });
            } else {
                console.warn("Navigator clipboard API not available, using fallback");
                return fallbackCopyToClipboard(text, onSuccess);
            }
    }
    function fetchGAPurchaseApi(eventKey, purchaseCfg,adConfig, order, biExt){
        const gclid = adConfig.gclid || "";
        const gad_source = adConfig.gad_source || "";
        const wbraid = adConfig.wbraid || "";
        const gbraid = adConfig.gbraid || "";
        bodyDic = {
              client_id: _gClientId,
              events: [{
                  name: eventKey,
                  params: {
                      gclid:gclid,
                      gad_source:gad_source,
                      wbraid:wbraid,
                      gbraid:gbraid,
                      user_id:track.getDeviceId(),
                      domainName: adConfig.domain,
                      currency:purchaseCfg.currency,
                      value:purchaseCfg.cost,
                      transaction_id:purchaseCfg.orderId,
                      items:[
                       { item_id:purchaseCfg.goodsId,
                        item_name:purchaseCfg.goods_name}
                      ]
                },
              }]
                }
       fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
                    method: "POST",
                    body: JSON.stringify(bodyDic)
              });
        _track_owner_ajax(eventKey, "Firebase", order,adConfig.packId, adConfig.domain,bodyDic,biExt);
    }

    function fetchGACollectApi(eventKey,adConfig, order, biExt){
        const gclid = adConfig.gclid || "";
        const gad_source = adConfig.gad_source || "";
        const wbraid = adConfig.wbraid || "";
        const gbraid = adConfig.gbraid || "";
         bodyDic = {
                client_id: _gClientId,
                events: [{
                    name: eventKey,
                    params: {
                        gclid:gclid,
                        gad_source:gad_source,
                        wbraid:wbraid,
                        gbraid:gbraid,
                        user_id:track.getDeviceId(),
                        domainName: adConfig.domain,
                  },
                }]
              };
         fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
              method: "POST",
              body: JSON.stringify(bodyDic)
        });
        _track_owner_ajax(eventKey, "Firebase", order, adConfig.packId, adConfig.domain,bodyDic, biExt);
    }
    _proto.trackPurchaseMAPIAndBI = function(eventKey,purchaseCfg,adConfig,order, ext){
        if(_gClientId == "")
        {
            gtag('get', measurement_id, 'client_id', (clientID) => {
                _gClientId = clientID;
                    fetchGAPurchaseApi(eventKey,purchaseCfg, adConfig, order, ext);
                });
        }
        else{
            fetchGAPurchaseApi(eventKey,purchaseCfg, adConfig, order, ext);
        }

    }
    
    _proto.trackMAPIAndBI = function(eventKey,adConfig,order, ownExt){
        if(_gClientId == "")
        {
            gtag('get', measurement_id, 'client_id', (clientID) => {
                _gClientId = clientID;
                    fetchGACollectApi(eventKey,adConfig,order, ownExt);
                });
        }
        else{
            fetchGACollectApi(eventKey,adConfig,order,ownExt);
        }

    }
    _proto.trackGTAGAndBI = async function (eventKey, order, adConfig) {
        let isTrack = localStorage.getItem("FireBaseTrace" + eventKey);
        if (!isTrack) {
            const gclid = adConfig.gclid || "";
            const gad_source = adConfig.gad_source || "";
            const wbraid = adConfig.wbraid || "";
            const gbraid = adConfig.gbraid || "";
            bodyDic = {
                 events: [{
                          name: eventKey,
                          params: {
                              gclid:gclid,
                              gad_source:gad_source,
                              wbraid:wbraid,
                              gbraid:gbraid,
                              user_id:track.getDeviceId(),
                              domainName: track.getcurrentDomain(),
                            },
                         }]
            }
            gtag('event', eventKey, {
                'domainName': track.getcurrentDomain(),
                'gclid':gclid,
                'user_id':track.getDeviceId(),
                'gad_source':gad_source,
                'wbraid':wbraid,
                'gbraid':gbraid
                // 其他自定义参数
            });
            console.log(`send google: event=${eventKey} domainName=${track.getcurrentDomain()} gclid=${gclid} user_id=${track.getDeviceId()} gad_source=${gad_source} wbraid=${wbraid} gbraid=${gbraid}`); 
            _track_owner_ajax(eventKey, "Firebase", order, adConfig.packId, track.getcurrentDomain(), bodyDic, "");
            localStorage.setItem("FireBaseTrace" + eventKey, "1");
        }
    };

    _proto.commit = function (adurl,gclid,adsource, gbraid) {
        if (!gclid) return Promise.resolve({});
        var msg = { adurl: adurl,gclid: gclid, adsource:adsource, gbraid:gbraid, touristuuid:track.getDeviceId()};
        const url = ROOT_URL + "/mapi/setipurl";
        return getClientIP().then(ip => {
            let reqData = {
                data: JSON.stringify(msg),
                ip: ip
            };
            let join_str = Object.keys(reqData).map(item => `${reqData[item]}`).join("");
            join_str += privateKey;
            const sign = CryptoJS.MD5(join_str).toString();
            reqData.sign = sign;

            let params = Object.keys(reqData).map(item => `${item}=${encodeURIComponent(reqData[item])}`).join('&');

            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                },
                body: params
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                });
        })
            .catch((error) => {
                console.error('Error:', error);
                throw error;  // Re-throw the error to ensure it can be caught by the caller
            });
    }

    function getBrowserInfo() {
        if (window['platform']) {
            var name = platform.name;
            var version = platform.version.match(/\d+/)[0];
            var os = platform.os;
            var browserInfoStr = `${name},${version},${os}`;
            return browserInfoStr;
        }
        else {
            return "";
        }

    };
    _ipaddress: "";
    function getClientIP() {
        // 使用Promise.resolve直接返回已缓存的IP地址的Promise
        if (this._ipaddress) {
            return Promise.resolve(this._ipaddress);
        } else {
            // 如果没有缓存的IP地址，发起网络请求获取
            return fetch('https://p15platform.jksfun.com/common/getip')
                .then(response => response.json())
                .then(data => {
                    console.log('Your IP address is:', data.data.ip);
                    this._ipaddress = data.data.ip; // 缓存IP地址
                    return data.data.ip; // 确保返回IP地址
                })
                .catch(error => {
                    console.error('Error:', error);
                    throw error; // 确保错误能被后续的catch处理
                });
        }
    }
    function query(ip) {
        if (_identityInfo.adurl) { // 更改为直接访问_identityInfo 
            return Promise.resolve(_identityInfo);
        } else {
            // 如果没有缓存的IP地址，发起网络请求获取
            const url = ROOT_URL + "/mapi/getipurl";
            let params = 'ip=' + ip;
            let md5_src = ip + privateKey;
            let ip_md5 = CryptoJS.MD5(md5_src).toString();
            params += '&sign=' + ip_md5;
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                },
                body: encodeURI(params),
            })
                .then(response => response.json())
                .then(dataJson => {
                    if (dataJson.code === '0') {
                        return dataJson.data;
                    } else {
                        console.log(JSON.parse(dataJson));
                    }
                })
                .then(data => {
                    console.log('Your adurl link is:', data.data);
                    _identityInfo = JSON.parse(data.data); // 将IP缓存起来
                    return _identityInfo; // 确保返回IP地址
                })
                .catch(error => {
                    console.error('Error:', error);
                    throw error; // 确保错误能被后续的catch处理
                });
        }
    };

    _proto.getMyIdentityData = function () {
        return _identityInfo;
    };

    return TrackCtor;
})();
window.track = window['track'] || new Track();