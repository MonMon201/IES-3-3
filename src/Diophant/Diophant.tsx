import React, { useState } from "react";
import {
  StyledButton,
  StyledDiophant,
  StyledInput,
  StyledTextField,
  StyledOutput,
} from "./Diophant.styles";
import { GeneticDiophantus } from "./Diophant.Logic";

export const Diophant = () => {
  const [output, setOutput] = useState<number>(20);
  const [a, setA] = useState<void | number>(0)
  const [b, setB] = useState<void | number>(0)
  const [c, setC] = useState<void | number>(0)
  const [d, setD] = useState<void | number>(0)
  const [k1, setk1] = useState(1);
  const [k2, setk2] = useState(2);
  const [k3, setk3] = useState(3);
  const [k4, setk4] = useState(4);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, setValue: (newValue: number) => void) => {
    const value = parseInt(e.target.value);
    console.log(value)
    if (value) {
      setValue(value);
    }
  };

  const compute = () => {
    const result = new GeneticDiophantus({task: [k1, k2, k3, k4], target: 20}).solve();
    if (result) {
      setA(result[0])
      setB(result[1])
      setC(result[2])
      setD(result[3])
    }
  };
  return (
    <StyledDiophant>
      <StyledInput>
        <StyledTextField
          variant={"outlined"}
          onChange={(e) => {
            onChange(e, setk1)
          }}
          value={k1}
        />
        a+
        <StyledTextField
          variant={"outlined"}
          onChange={(e) => {
            onChange(e, setk2)
          }}
          value={k2}
        />
        b+
        <StyledTextField
          variant={"outlined"}
          onChange={(e) => {
            onChange(e, setk3)
          }}
          value={k3}
        />
        c+
        <StyledTextField
          variant={"outlined"}
          onChange={(e) => {
            onChange(e, setk4)
          }}
          value={k4}
        />d=
        <StyledTextField
          variant={"outlined"}
          onChange={(e) => {
            onChange(e, setOutput)
          }}
          value={output}
        />
      </StyledInput>
      <StyledOutput>
              {a && b && c && d ? `a=${a} b=${b} c=${c} d=${d}` : `Set koefs and click 'Compute'`}
      </StyledOutput>
      <StyledButton color="primary" variant="contained" onClick={compute}>
        Compute
      </StyledButton>
    </StyledDiophant>
  );
};
