import { defineNuxtPlugin, useCookieConsent, useRouter } from '#imports';
import { watch } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const CLARITY_SNIPPET = `!function(c,l,a,r,i,t,y){function sync(){(new Image).src="https://c.clarity.ms/c.gif"}"complete"==document.readyState?sync():window.addEventListener("load",sync);a[c]("metadata",(function(){a[c]("set","C_IS","0")}),!1,!0);if(a[c].v||a[c].t)return a[c]("event",c,"dup."+i.projectId);a[c].t=!0,(t=l.createElement(r)).async=!0,t.src="https://scripts.clarity.ms/0.8.41/clarity.js",(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y),a[c]("start",i),a[c].q.unshift(a[c].q.pop()),a[c]("set","C_IS","0")}("clarity",document,window,"script",{"projectId":"qo6ifcvtba","upload":"https://i.clarity.ms/collect","expire":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"content":true,"report":"https://report.clarity.ms/eus2-tag","keep":["msclkid"],"dob":2148});`;
const CLARITY_ATTRIBUTE = 'data-clarity-snippet';
const MAX_CLARITY_ATTEMPTS = 20;

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

const insertClaritySnippet = () => {
  if (!document?.head || document.querySelector(`script[${CLARITY_ATTRIBUTE}]`)) {
    return;
  }
  const script = document.createElement('script');
  script.setAttribute(CLARITY_ATTRIBUTE, 'true');
  script.type = 'text/javascript';
  script.textContent = CLARITY_SNIPPET;
  document.head.appendChild(script);
};

const sendClarityEvent = (eventName: string, payload: Record<string, unknown>) => {
  let attempts = 0;
  const attempt = () => {
    if (typeof window?.clarity === 'function') {
      window.clarity('event', eventName, payload);
      return;
    }
    if (attempts >= MAX_CLARITY_ATTEMPTS) {
      return;
    }
    attempts += 1;
    window.setTimeout(attempt, 200);
  };
  attempt();
};

const trackRoute = (route: RouteLocationNormalizedLoaded | null) => {
  if (!route) {
    return;
  }
  const title = typeof route.meta?.title === 'string' ? route.meta.title : '';
  const payload: Record<string, unknown> = {
    path: route.fullPath,
    name: route.name ? String(route.name) : 'unknown',
    title
  };
  sendClarityEvent('nuxt_page_view', payload);
};

export default defineNuxtPlugin(() => {
  const { state } = useCookieConsent();
  const router = useRouter();

  const handleConsent = (hasAccess: boolean) => {
    if (!hasAccess) {
      return;
    }
    insertClaritySnippet();
    trackRoute(router.currentRoute.value);
  };

  watch(
    () => state.value.statistic,
    (statisticAllowed) => {
      handleConsent(statisticAllowed);
    },
    { immediate: true }
  );

  router.afterEach((to) => {
    if (!state.value.statistic) {
      return;
    }
    trackRoute(to);
  });
});
