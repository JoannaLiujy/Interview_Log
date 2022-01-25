function usePrevious(state) {
  const prevRef = useRef()
  const curRef = useRef()
  prevRef.current = curRef.current
  curRef.current = state
  return prevRef.current
}

/** 更新时 */
function useMount(fn) {
  useEffect(() => {
    fn()
  }, [])
}

function usePersistFn(fn) {
  const fnRef = useRef(fn)
  if (!fnRef.current) {
    fn.current = fn
  }
  return fn.current
}