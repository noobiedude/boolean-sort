import { useRef, useState } from 'react';
import './App.css';
import BooleanSort from './components/sorter.component';

export default function App() {

  let nums = [...Array(10)].map((e) => Math.floor(Math.random() * 20) + 1);
  return (
  <div>
    <BooleanSort nums={nums}></BooleanSort>
  </div>
  )
}

