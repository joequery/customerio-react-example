import { PropsWithChildren, useState } from 'react'
import { TrackableButton } from '../lib/TrackableButton'

type PinkButtonProps = PropsWithChildren & {
    [x:string]: any;
}
const MyButton = ({ children, ...rest }: PinkButtonProps) => {
    return <button style={{ borderRadius: '6px' }} {...rest}>{children}</button>
}

export const Demo = () => {
    const [clicks, setClicks] = useState(0)
    const onClick = () => {
        setClicks(c => c + 1)
    }

    return (
        <>
            <div className="flex-container">
                <div className="flex-item"><p>Clicks: {clicks}</p></div>
                <div className="flex-item"><p><TrackableButton as={MyButton} eventName="pink_trackable_button_clicked" onClick={onClick}>Click me!</TrackableButton></p></div>
            </div>
        </>
    )
}