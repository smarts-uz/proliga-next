import { useEffect } from 'react'
import Head from 'next/head'

const YandexAd = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://an.yandex.ru/system/context.js'
    script.async = true
    script.onload = () => {
      if (window.yandexContext) {
        window.yandexContext.refresh()
      }
    }
    document.body.appendChild(script)
  }, [])

  return (
    <div>
      <Head>
        <script type="text/javascript">
          {`
            (function(w, d, s, t, id) {
                w[id] = w[id] || [];
                w[id].push({ 'script': s, 'onload': function() { console.log('Yandex Ad loaded'); } });
                var f = d.getElementsByTagName(t)[0], j = d.createElement(t);
                j.src = s;
                j.async = true;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'https://an.yandex.ru/system/context.js', 'script', 'yandexContext');
          `}
        </script>
      </Head>
      {/* This is where the ad will be injected */}
      <div id="yandex-ad-1"></div>
    </div>
  )
}

export default YandexAd
