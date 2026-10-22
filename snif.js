/*************************************

应用名称：snif
脚本功能：m3u8
下载地址：yıldız
更新日期：2026-05-14
脚本作者：@yazar
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
# Tüm HTTP/HTTPS isteklerini tarar, script içindeki Safari filtresi diğer tarayıcıları eler
^https?:\/\/.+ url script-request-header https://raw.githubusercontent.com/circas/quant/refs/heads/main/snif.js


[mitm]
hostname = *

*************************************/
/*
 Quantumult X — Safari Media Request Monitor
 Tür: script-request-header
 Sadece Safari tarayıcısından gelen medya isteklerini yakalar.
*/

const url = ($request && $request.url) || "";
const headers = ($request && $request.headers) || {};

// User-Agent kontrolü için küçük harfe çeviriyoruz
const userAgent = (headers["User-Agent"] || headers["user-agent"] || "").toLowerCase();

// İsteğin Safari'den gelip gelmediğini kontrol et (Chrome/App içi tarayıcıları eler)
const isSafari = userAgent.includes("safari") && !userAgent.includes("chrome") && !userAgent.includes("crios") && !userAgent.includes("fxios");

if (isSafari) {
  const patterns = [
    { ext: "M3U8", re: /\.m3u8(?:$|[?#])/i },
    { ext: "MPD",  re: /\.mpd(?:$|[?#])/i },
    { ext: "MP4",  re: /\.mp4(?:$|[?#])/i },
    { ext: "TS",   re: /\.ts(?:$|[?#])/i },
    { ext: "M4S",  re: /\.m4s(?:$|[?#])/i },
    { ext: "WEBM", re: /\.webm(?:$|[?#])/i },
    { ext: "M4A",  re: /\.m4a(?:$|[?#])/i },
    { ext: "FLV",  re: /\.flv(?:$|[?#])/i }
  ];

  const match = patterns.find(p => p.re.test(url));

  if (match) {
    // Aynı linkin kısa süre içinde tekrar bildirim göndermesini engellemek için QX persistent storage kullanılabilir
    // Ancak temel kullanım için direkt bildirim gönderiyoruz:
    $notification.post(
      "🧭 Safari Medya: " + match.ext,
      "Quantumult X",
      url
    );
    
    console.log(`[Safari Media Sniffer] (${match.ext}): ${url}`);
  }
}

$done({});
/*
 Quantumult X — Safari Media Request Monitor
 Tür: script-request-header
 Sadece Safari tarayıcısından gelen medya isteklerini yakalar.
*/

const url = ($request && $request.url) || "";
const headers = ($request && $request.headers) || {};

// User-Agent kontrolü için küçük harfe çeviriyoruz
const userAgent = (headers["User-Agent"] || headers["user-agent"] || "").toLowerCase();

// İsteğin Safari'den gelip gelmediğini kontrol et (Chrome/App içi tarayıcıları eler)
const isSafari = userAgent.includes("safari") && !userAgent.includes("chrome") && !userAgent.includes("crios") && !userAgent.includes("fxios");

if (isSafari) {
  const patterns = [
    { ext: "M3U8", re: /\.m3u8(?:$|[?#])/i },
    { ext: "MPD",  re: /\.mpd(?:$|[?#])/i },
    { ext: "MP4",  re: /\.mp4(?:$|[?#])/i },
    { ext: "TS",   re: /\.ts(?:$|[?#])/i },
    { ext: "M4S",  re: /\.m4s(?:$|[?#])/i },
    { ext: "WEBM", re: /\.webm(?:$|[?#])/i },
    { ext: "M4A",  re: /\.m4a(?:$|[?#])/i },
    { ext: "FLV",  re: /\.flv(?:$|[?#])/i }
  ];

  const match = patterns.find(p => p.re.test(url));

  if (match) {
    // Aynı linkin kısa süre içinde tekrar bildirim göndermesini engellemek için QX persistent storage kullanılabilir
    // Ancak temel kullanım için direkt bildirim gönderiyoruz:
    $notification.post(
      "🧭 Safari Medya: " + match.ext,
      "Quantumult X",
      url
    );
    
    console.log(`[Safari Media Sniffer] (${match.ext}): ${url}`);
  }
}

$done({});
