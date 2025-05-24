import { Suspense, lazy } from "react"
export function WidgetLoader({name, propsForWidget}: {name: string, propsForWidget: string}) {
const DynamicComponent = lazy(() => delayForDemo(import(`./${name}.tsx`)))

    return (
        <>
        <Suspense fallback={<Loading/>}>
        <DynamicComponent footer={propsForWidget} />
        </Suspense>
        </>
    )
}

function Loading(){
    return (
        <>
        Loading....
        </>
    )
}

function delayForDemo(promise: Promise<any>) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }
  