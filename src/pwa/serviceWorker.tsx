import { useCallback, useEffect } from "preact/hooks";
import { useRegisterSW } from "virtual:pwa-register/react";

const ServiceWorker = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);
  }, [setOfflineReady, setNeedRefresh]);

  useEffect(() => {
    if (offlineReady) {
      console.log("[📦 pheralb/Preact-PWA] - Your app has been installed, it now works offline!");
    } else if (needRefresh) {
      console.log("[📦 pheralb/Preact-PWA] - A new update is available!");
      // Create here a toast or a modal with:
      // <button onClick={updateServiceWorker}>Update app</button>
      // <button onClick={close}>Close</button>
    }
  }, [close, needRefresh, offlineReady, updateServiceWorker]);

  return null;
};

export default ServiceWorker;
