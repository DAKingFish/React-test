//创建自定义hooks的定时器
import { useState } from 'react'
//不知道怎么给组件传参,直接传个形参 props
export function useTimer() {
  const [time, setTime] = useState(-1)
  const run = (t: any) => {
    if (Number(t) >= 0) {
      setTimeout(() => {
        setTime(t)
        run(t - 1)
      }, 1000)
    }
  }
  return {
    time,
    run,
  }
}
