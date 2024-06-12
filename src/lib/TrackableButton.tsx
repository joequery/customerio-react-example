import React, { PropsWithChildren } from "react";
import { useAnalytics } from "./useAnalytics";


type TrackableButtonProps = {
    eventName: string;
    as?: React.ComponentType;
    [x:string]: any;
} & PropsWithChildren

const HTMLButton = ({children, ...rest}: PropsWithChildren) => {
    return <button {...rest}>{children}</button>
}
export const TrackableButton = ({eventName, as, children, ...rest}: TrackableButtonProps) => {
    const analytics = useAnalytics()
    const Component = as ?? HTMLButton

    // Preserve event handler if one exists
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // @ts-ignore
        const { onClick } = {...rest}
        if(onClick){
            onClick(event)
        }
        analytics.track(eventName)
    }

    const props = {
        ...rest,
        onClick: onClickHandler
    }

    // @ts-ignore
    return <Component {...props}>{children}</Component>
}