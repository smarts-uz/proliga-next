import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'
import { BANNER_SERVICE_TYPE } from 'app/utils/banner-service.util'
import { BANNER } from 'app/utils/banner.util'

export const fetchBanners = createAsyncThunk('banner/fetchBanner', async () => {
  const { data, error } = await supabase
    .from('banner')
    .select(
      'id, name, content_url, link, banner_type, type, service_id, is_mobile'
    )
    .is('deleted_at', null)
    .in('banner_type', [
      BANNER.SIDE_BANNER_LEFT,
      BANNER.SIDE_BANNER_RIGHT,
      BANNER.MODAL_BANNER,
      BANNER.MINI_BANNER,
      BANNER.BIG_BANNER,
    ])
    .in('type', [
      BANNER_SERVICE_TYPE.CUSTOM,
      BANNER_SERVICE_TYPE.GOOGLE,
      BANNER_SERVICE_TYPE.YANDEX,
    ])
    .order('created_at', { ascending: false })

  return { data, error }
})
