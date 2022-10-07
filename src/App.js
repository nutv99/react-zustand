import React from 'react';
import './style.css';
import useStore from './store';

export default function App() {
  const count = useStore((state) => state.count)
  const setCount = useStore((state) => state.setCount)

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
