import Script from 'next/script'

export default function YandexAd({ blockId, type = 'default' }) {
  const renderToId = `yandex_rtb_${blockId}`

  const modalStyle =
    type === 'modal'
      ? {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }
      : {}

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
                Ya.Context.AdvManager.render({
                  blockId: "${blockId}",
                  renderTo: "${renderToId}",
                  async: true
                });
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
      <div id={renderToId} style={{ ...modalStyle }}></div>
    </div>
  )
}
