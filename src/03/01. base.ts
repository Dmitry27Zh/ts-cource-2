type InState = number | string | boolean

function useState(initial: InState): [InState, (newValue: InState) => void] {
  let value = initial
  function setValue(newValue: InState): void {
    value = newValue
  }

  return [value, setValue]
}

let [counter, setCounter] = useState(10)
let [userName, setUsername] = useState('Admin')
// counter++ ---- error
setCounter('a lot') // ---- no error

function useState2<T>(initial: T): [T, (newValue: T) => void] {
  let value = initial
  function setValue(newValue: T): void {
    value = newValue
  }

  return [value, setValue]
}

let [counter2, setCounter2] = useState2(10)
let [userName2, setUsername2] = useState2('Admin')
counter2++ // ---- no error
// setCounter2('a lot') // ---- error

let [isAdmin, setIsAdmin] = useState2(true)

export {}
