import Link from 'next/link'
import Image from 'next/image'
import SystemLink from './SystemLink'
import SidebarTab from './Tab'
import SidebarTabLink from './TabLink'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { TABS } from 'app/utils/tabs.util'
import { useLogOut } from 'app/hooks/auth/useLogOut/useLogOut'
import { useTranslation } from 'react-i18next'
import { sidebarStyles } from 'app/utils/sidebarStyles.util'

const MobileSidebar = ({ isModalOpen, setModalOpen }) => {
  const path = usePathname()
  const { t } = useTranslation()
  const { userAuth } = useSelector((state) => state.auth)
  const { lastVisitedTeam } = useSelector((store) => store.currentTeam)
  const { logOut } = useLogOut()

  const handleLogOut = () => {
    logOut()
    setModalOpen(false)
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="left-auto right-0 flex h-full w-4/5 min-w-80 translate-x-[0%] translate-y-[-50%] flex-col rounded-e-none rounded-s-xl p-4 py-6 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[0%] data-[state=open]:slide-in-from-right-1/2 xs:w-3/4 sm:w-2/3 sm:p-6">
        <DialogTitle className="left-0 right-0 top-0 hidden">Title</DialogTitle>
        <div className="flex flex-col items-start justify-center gap-6 py-12 xs:gap-7 sm:py-16">
          {path.includes('play') && (
            <>
              <SidebarTab
                toggleModal={() => setModalOpen(false)}
                tab={TABS.GameProfile}
                title={t('Profil')}
              />
              <SidebarTab
                toggleModal={() => setModalOpen(false)}
                title={t('Transferlar')}
                tab={TABS.Transfer}
              />
              <SidebarTab
                toggleModal={() => setModalOpen(false)}
                tab={TABS.Tournament}
                title={t('Turnir')}
              />
              <SidebarTab
                toggleModal={() => setModalOpen(false)}
                sidebarStyles={sidebarStyles}
                title={t('Jurnal')}
                tab={TABS.Journal}
              />
              <SidebarTab
                toggleModal={() => setModalOpen(false)}
                title={t('Statistika')}
                tab={TABS.Statistics}
              />
            </>
          )}
          {!path.includes('play') && lastVisitedTeam && (
            <>
              <SidebarTabLink
                toggleModal={() => setModalOpen(false)}
                tab={TABS.GameProfile}
                title={t('Profil')}
              />
              <SidebarTabLink
                toggleModal={() => setModalOpen(false)}
                title={t('Transferlar')}
                tab={TABS.Transfer}
              />
              <SidebarTabLink
                toggleModal={() => setModalOpen(false)}
                tab={TABS.Tournament}
                title={t('Turnir')}
              />
              <SidebarTabLink
                toggleModal={() => setModalOpen(false)}
                title={t('Jurnal')}
                tab={TABS.Journal}
              />
              <SidebarTabLink
                toggleModal={() => setModalOpen(false)}
                title={t('Statistika')}
                tab={TABS.Statistics}
              />
            </>
          )}
          <div className="group flex w-full gap-4">
            <span
              className={`block h-full w-2 rounded-md ${path.includes('championships') ? sidebarStyles.activeIndicator : sidebarStyles.passiveIndicator}`}
            />
            <Link
              className={`transition-all group-hover:text-white ${path.includes('championships') ? sidebarStyles.active : sidebarStyles.passive}`}
              href="/championships"
              onClick={() => setModalOpen(false)}
            >
              {t('Chempionat')}
            </Link>
          </div>
          <div className="flex w-full gap-4">
            <span
              className={`block h-full w-2 rounded-md ${path.includes('prizes') ? sidebarStyles.activeIndicator : sidebarStyles.passiveIndicator}`}
            />
            <Link
              className={`transition-all hover:text-white ${path.includes('prizes') ? sidebarStyles.active : sidebarStyles.passive}`}
              onClick={() => setModalOpen(false)}
              href="/prizes"
            >
              {t('Yutuqlar')}
            </Link>
          </div>
          <div className="flex w-full gap-4">
            <span
              className={`block h-full w-2 rounded-md ${path.includes('regulation') ? sidebarStyles.activeIndicator : sidebarStyles.passiveIndicator}`}
            />
            <Link
              className={`transition-all hover:text-white ${path.includes('regulation') ? sidebarStyles.active : sidebarStyles.passive}`}
              onClick={() => setModalOpen(false)}
              href="/regulation"
            >
              {t('Qoida')}
            </Link>
          </div>
        </div>
        <section
          className={`mt-auto flex w-full flex-col justify-between gap-1 rounded-md sm:flex-row`}
        >
          {userAuth ? (
            <>
              <SystemLink
                handleToggle={() => setModalOpen(false)}
                href="/cabinet"
              >
                <Image
                  width={24}
                  height={24}
                  alt="settings"
                  src="/icons/gear.svg"
                />
                <p>{t('Sozlamalar')}</p>
              </SystemLink>
              <div
                onClick={handleLogOut}
                className="flex h-full w-full gap-2 rounded bg-neutral-900 p-2 hover:bg-neutral-700"
              >
                <Image
                  src={'/icons/logout.svg'}
                  alt="user"
                  width={24}
                  height={24}
                />
                <p>{t('Tizimdan chiqish')}</p>
              </div>
            </>
          ) : (
            <SystemLink handleToggle={() => setModalOpen(false)} href="/auth">
              <Image
                src={'/icons/login.svg'}
                alt="user"
                width={24}
                height={24}
              />
              <p>{t('Tizimga kirish_1')}</p>
            </SystemLink>
          )}
        </section>
        <DialogDescription className="hidden">
          This is a navigation sidebar for mobile devices
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default MobileSidebar
