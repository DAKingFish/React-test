// ReactNode => string、number、jsx、boolean、null
/**
 * 1、当 numner > 10 按钮变成红色背景
 * 2、当 number < 0 给一个弹出框的提示，说不能小于0 ==> 如何获取state改变之后的值？？
 * 3、等待1s，还原回去
 */

/**
 * 实现两个数字相加计算器功能
 * 1、字符串装数字的方法 Number('90')、parseInt('90')、parseFloat('90.334')
 * 2、当计算结果大于1000的时候，提示 最大不能超过1000，并且点击确定之后，背景色改为灰色，值保持不变
 */
// 任何组件命名都要大写开头
import { useState } from 'react'
import './index.scss'
export default function Test() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  return (
    <div>
      <div className="homework">
        <p>hook练习</p>
        <div
          className="hw1"
          style={{ backgroundColor: num3 > 1000 ? 'gray' : 'lightgreen' }}
        >
          <input
            type="text"
            value={num1}
            onChange={(e) => {
              isNaN(Number(e.target.value))
                ? setNum1(0)
                : setNum1(Number(e.target.value))
            }}
          />
          +
          <input
            type="text"
            value={num2}
            onChange={(e) => {
              isNaN(Number(e.target.value))
                ? setNum2(0)
                : setNum2(Number(e.target.value))
            }}
          />
          <button
            onClick={() => {
              if (num1 + num2) {
                alert('计算值不能超过1000')
              }
              setNum3(num1 + num2)
            }}
          >
            =
          </button>
          <input type="text" value={num3} />
        </div>
      </div>
    </div>
  )
}
