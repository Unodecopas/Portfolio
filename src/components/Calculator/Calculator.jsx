import React, { useEffect, useState } from 'react'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import WindowsBar from '../WindowsBar'

const btnValue = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
]
const toLocaleString = (num) =>
  String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const removeSpaces = (num) => num.toString().replace(/\s/g, '')

const Calculator = ({ setTaskbarApp }) => {
  const [calc, setCalc] = useState({
    sing: '',
    num: 0,
    res: 0
  })
  useEffect(() => {
    setTaskbarApp('Caculator')
    return () => setTaskbarApp()
  }, [])
  const numClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML
    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === '0'
            ? '0'
            : removeSpaces(calc.num) % 1 === 0
              ? toLocaleString(Number(removeSpaces(calc.num + value)))
              : toLocaleString(calc.num + value),
        res: !calc.sing ? 0 : calc.res
      })
    }
  }
  const commaClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }
  const signClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML
    setCalc({
      ...calc,
      sing: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }
  const equalsClickHandler = () => {
    if (calc.sing && calc.num) {
      const math = (a, b, sing) =>
        sing === '+'
          ? a + b
          : sing === '-'
            ? a - b
            : sing === 'X'
              ? a * b
              : a / b

      setCalc({
        ...calc,
        res:
          calc.num === '0' && calc.sing === '/'
            ? "Can't divide with 0"
            : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sing
              )
            ),
        sing: '',
        num: 0
      })
    }
  }
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num)) * -1 : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res)) * -1 : 0,
      sing: ''
    })
  }
  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0
    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sing: ''
    })
  }
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: '',
      num: 0,
      res: 0
    })
  }
  return (
    <div className="calculator">
      <WindowsBar title='Calculator.exe' />
      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          {btnValue.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === '=' ? 'equals' : ''}
                value={btn}
                onClick={
                  btn === 'C'
                    ? resetClickHandler
                    : btn === '+-'
                      ? invertClickHandler
                      : btn === '%'
                        ? percentClickHandler
                        : btn === '='
                          ? equalsClickHandler
                          : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
                            ? signClickHandler
                            : btn === '.'
                              ? commaClickHandler
                              : numClickHandler
                }
              />
            )
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  )
}
export default Calculator
