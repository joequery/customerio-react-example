import { useContext } from "react";
import { AnalyticsContext } from "./AnalyticsContext";
import { AnalyticsBrowser } from "@customerio/cdp-analytics-browser";

export const useAnalytics = () : AnalyticsBrowser => {
    const analyticsContext = useContext(AnalyticsContext)
    return analyticsContext.analytics
}
