import Script from 'next/script'

export default function YandexAd({ blockId }) {
  const renderToId = `yandex_rtb_${blockId}`

  // if (typeof blockAdBlock === 'undefined') {
  //   alert('Please disable your ad blocker to support our site!')
  // }

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
                            s.src = "//an.yandex.ru/system/context.js";
                            s.async = true;
                            t.parentNode.insertBefore(s, t);
                        })(this, this.document, "yandexContextAsyncCallbacks");
                    `,
        }}
        onError={(e) => console.error('Yandex script failed to load:', e)}
      />
      <div id={renderToId}></div>
    </div>
  )
}
