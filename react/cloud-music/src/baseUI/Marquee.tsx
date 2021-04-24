import styled, { keyframes } from 'styled-components'
const marquee_moveing = keyframes`
 0%{
    transform:translateX(100%);
 }
 100%{
    transform:translateX(-100%);
 }
`
const MarqueeStyleTag = styled.div`
    overflow-x:hidden;
    width:100%;
    .marquee-wrapper{
        animation:${marquee_moveing} 10s infinite linear;
    }
`
type PropsTypes = {
    children: any
}
export default function Marquee(props: PropsTypes) {
    const { children } = props
    return (
        <MarqueeStyleTag>
            <div className='marquee-wrapper'>
                {children}
            </div>
        </MarqueeStyleTag>
        //@ts-ignore
        // <marquee>{children}</marquee>
    )
}
