import { useEffect, useRef, useState } from "react";
import { Container, Rect, PlayButton } from "./sorter.styled-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const BooleanSort = ({ nums }) => {
  const [i, setI] = useState(0);
  const [timer, setTimer] = useState(1000);
  const timeInputRef = useRef(timer);
  const ok = useRef(true);
  const [numbers, setNumbers] = useState(nums);
  const numbersRef = useRef(numbers);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused){
        if (i < numbersRef.current.length - 1) {
        if (numbersRef.current[i] > numbersRef.current[i + 1]) {
            numbersRef.current[i] += numbersRef.current[i + 1];
            numbersRef.current[i + 1] =
            numbersRef.current[i] - numbersRef.current[i + 1];
            numbersRef.current[i] -= numbersRef.current[i + 1];
            ok.current = false;
            setTimeout(() => {
              setNumbers([...numbersRef.current]);
              setTimeout(() => {
                setI(i + 1);
                }, timer);
            }, timer);
        }
        else{
        setTimeout(() => {
            setI(i + 1);
        }, timer);
      }
        } else {
        if (ok.current) {
            console.log(`gata`);
        } else {
              ok.current = true;
              setI(0);
        }
        }
    }
  }, [i, isPaused, timer]);

  const isAsc = (num1, num2) => {
    return num1 <= num2;
  };
  
  return (
    <div>
    <label htmlFor={`timerInput`}>Change the speed:</label>
    <input type="number" id={`timerInput`} placeholder={`${timer}ms current speed`} onChange={(e) => timeInputRef.current = e.target.value}></input>
    <button onClick={(e) => setTimer(timeInputRef.current)}>Set timer</button>
    <PlayButton onClick={(e) => setIsPaused(!isPaused)}>{isPaused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
    </PlayButton>
    <Container>
      {numbers.map((num, idx) => {
        let color;
        if (idx === numbers.length - 1 && i !== numbers.length - 2)
          color = `#b4b4b4`;
        else if (
          (idx === i || idx === i + 1) &&
          isAsc(numbers[i], numbers[i + 1])
        )
          color = `green`;
        else if (
          (idx === i || idx === i + 1) &&
          !isAsc(numbers[i], numbers[i + 1])
        )
          color = `red`;
        else color = `#b4b4b4`;

        return (
          <Rect key={idx} height={num} color={color}>
            {num}
          </Rect>
        );
      })}
    </Container>
    </div>
  );
};

export default BooleanSort;
