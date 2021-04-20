import { useEffect, useRef, useState } from 'react'
import { Container } from "./style"
import { CSSTransition } from 'react-transition-group'
import Header from './../../components/Header';
export const Album = (props: any) => {
    const { history } = props
    const [showStatus, setShowStatus] = useState(true)
    const handleBack = () => {
        setShowStatus(false);
    };
    const container: any = useRef();
    useEffect(() => {
        console.log('- 刚开始时的 class 为：', container.current.classList.toString());
        const observer = new MutationObserver(function () {
            console.log('然后 class 变更为：', container.current && container.current.classList.toString());
        });
        observer.observe(container.current, {
            attributes: true
        });
    }, []);
    return (
        <CSSTransition
            in={showStatus}
            timeout={300}
            classNames="fly"
            appear={true}
            unmountOnExit
            onExited={history.goBack}>
            <Container ref={container}>
                <Header title={"返回"} handleClick={handleBack}></Header>
            </Container>
        </CSSTransition>
    )
}
