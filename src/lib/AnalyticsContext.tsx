import { createContext, PropsWithChildren, useMemo } from 'react';
import { AnalyticsBrowser } from '@customerio/cdp-analytics-browser'


type AnalyticsContextType = {
  analytics: AnalyticsBrowser
}
export const AnalyticsContext = createContext<AnalyticsContextType>({analytics: new AnalyticsBrowser()});

type AnalyticsProviderType = PropsWithChildren & {
  apiKey: string
}

export const AnalyticsProvider = ({ apiKey, children }: AnalyticsProviderType) => {
const analytics = useMemo(() => AnalyticsBrowser.load({ writeKey: apiKey}), [apiKey])

  return (
    <AnalyticsContext.Provider value={{analytics}}>
      {children}
    </AnalyticsContext.Provider>
  )
};