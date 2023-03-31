import React from 'react'

export default function useTimeout(callback: any, delay: number) {
  const timeoutRef = React.useRef(null)
  const savedCallback = React.useRef(callback)
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  React.useEffect(() => {
    const tick = () => savedCallback.current()
    if (typeof delay === 'number') {
      /* eslint-disable-next-line */
      /** @ts-ignore */
      timeoutRef.current = window.setTimeout(tick, delay)
      /* eslint-disable-next-line */
      /** @ts-ignore */
      return () => window.clearTimeout(timeoutRef.current)
    }
  }, [delay])
  return timeoutRef
}
