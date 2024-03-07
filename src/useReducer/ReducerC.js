import React, { useReducer } from 'react'
import { Button } from '@chakra-ui/react'

function ReducerC() {

    const initialState = 0;

    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case'reset':
                return 0;
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
        <div className='normaldiv p-5'>
        <h1>Count = {count}</h1>
        <Button className='m-2' colorScheme='blue' onClick={() => dispatch('increment')}>Increment</Button>
        <Button className='m-2' colorScheme='red' onClick={() => dispatch('decrement')}>Decrement</Button>
        <Button className='m-2' colorScheme='yellow' onClick={() => dispatch('reset')}>Reset</Button>
        </div>
        
    </>
  )
}

export default ReducerC