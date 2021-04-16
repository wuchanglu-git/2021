import React, { Suspense } from 'react'
const AsyncCom = React.lazy(() => import('./async'))
function F() {
    return <div>F:
        <AsyncCom />
    </div>
}
export default function Lazy() {
    return (
        <div>
            sadsad
            <Suspense fallback={<div><h1>---------------------------------...</h1>
                <h1>dsagdkjdhbjk</h1>
                <h1>dqdqwdwq</h1></div>}>
                <F />
            </Suspense>
        </div>
    )
}
