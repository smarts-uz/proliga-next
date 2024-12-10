'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { BANNER } from 'app/utils/banner.util'
import { useMemo, useEffect, memo } from 'react'
import { BANNER_SERVICE_TYPE } from 'app/utils/banner-service.util'
import { useCreateBannerView } from 'app/hooks/system/useCreateBannerView/useCreateBannerView'

const MiniBanner = () => {
  const { banners } = useSelector((store) => store.banner)
  const { userTable, userAuth, geo, agent } = useSelector((store) => store.auth)
  const { createBannerView } = useCreateBannerView()

  const banner = useMemo(
    () => banners.find((b) => b?.banner_type === BANNER.MINI_BANNER),
    [banners]
  )

  useEffect(() => {
    if (banner?.type === BANNER_SERVICE_TYPE.CUSTOM) {
      if (banner?.id && userTable?.id && userAuth?.user?.id && geo && agent) {
        createBannerView({ banner_id: banner?.id })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [banner, agent, userTable?.id, userAuth?.user?.id, geo])

  return (
    <>
      {banner?.type === BANNER_SERVICE_TYPE.CUSTOM && (
        <Link
          href={banner?.link ?? ''}
          className="mb-2 block h-[120px] w-[360px] overflow-hidden rounded"
        >
          <img
            src={banner?.content_url ?? ''}
            alt={banner?.name}
            loading="lazy"
            className="h-full w-full rounded"
          />
        </Link>
      )}
    </>
  )
}

export default memo(MiniBanner)
