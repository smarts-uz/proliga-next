import Script from 'next/script'

export default function YandexAd({ blockId, type = null }) {
  const renderToId = `yandex_rtb_${blockId}`

  return (
    <div>
      <Script
        id={`yandex-context-script-${blockId}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, n, s, t) {
              w[n] = w[n] || [];
              w[n].push(function() {
                const config = {
                  blockId: "${blockId}",
                  renderTo: "${renderToId}",
                  async: true
                };
                if (${type ? `"${type}"` : 'null'}) {
                  config.type = "${type}";
                }
                Ya.Context.AdvManager.render(config);
              });
              t = d.getElementsByTagName("script")[0];
              s = d.createElement("script");
              s.type = "text/javascript";
              s.src = "https://an.yandex.ru/system/context.js";
              s.async = true;
              t.parentNode.insertBefore(s, t);
            })(window, document, "yandexContextAsyncCallbacks");
          `,
        }}
        onError={(e) => console.error('Yandex script failed to load:', e)}
      />
      <div id={renderToId}></div>
    </div>
  )
}
