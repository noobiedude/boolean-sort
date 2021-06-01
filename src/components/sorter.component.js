import { useEffect, useRef, useState } from "react";
import { Container, Rect } from "./sorter.styled-component";

const BooleanSort = ({ timer, nums }) => {
  const [i, setI] = useState(0);
  const timerRef = useRef(timer);
  const ok = useRef(true);
  const [numbers, setNumbers] = useState(nums);
  const numbersRef = useRef(numbers);

  useEffect(() => {
    if (i < numbersRef.current.length - 1) {
      if (numbersRef.current[i] > numbersRef.current[i + 1]) {
        numbersRef.current[i] += numbersRef.current[i + 1];
        numbersRef.current[i + 1] =
          numbersRef.current[i] - numbersRef.current[i + 1];
        numbersRef.current[i] -= numbersRef.current[i + 1];
        ok.current = false;
        setNumbers(numbersRef.current);
      }
      setTimeout(() => {
        setI(i + 1);
        //console.log(numbers, ok, i);
      }, timerRef.current);
    } else {
      if (ok.current) {
        console.log(`gata`);
      } else {
        setTimeout(
          () => {
            ok.current = true;
            setI(0);
          }, //timerRef.current
          0
        );
      }
    }
  }, [i]);

  const isAsc = (num1, num2) => {
    return num1 <= num2;
  };
  return (
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
  );
};

export default BooleanSort;
