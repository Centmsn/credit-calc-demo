import { FC, useState } from "react";
import styled from "styled-components";
import Checkbox from "./components/Checkbox";

import RangeInput from "./components/RangeInput";
import TextInput from "./components/TextInput";

enum Period {
  MIN = 3,
  MAX = 120,
}

enum Amount {
  MIN = 500,
  MAX = 100000,
}

const App: FC = () => {
  const [amount, setAmount] = useState<number>(Amount.MIN);
  const [period, setPeriod] = useState<number>(Period.MIN);
  const [loanPercent, setLoanPercent] = useState<number>(0);
  const [isPercentInputActive, setIsPercentInputActive] = useState(true);

  const handleValue = (value: number) => {
    setAmount(value);
  };

  const handlePeriod = (value: number) => {
    setPeriod(value);
  };

  const calcLoanInstalment = () => {
    let singleInstalment = Math.floor(amount / period);

    if (isPercentInputActive)
      singleInstalment =
        singleInstalment + singleInstalment * (loanPercent / 100);
    return singleInstalment.toFixed(2);
  };

  const handlePercentChange = (value: string) => {
    let converted = Number(value);

    if (converted > 12) converted = 12;
    else if (converted < 0) converted = 0;
    setLoanPercent(converted);
  };

  return (
    <Wrapper>
      <RangeInput
        onChange={handlePeriod}
        min={Period.MIN}
        max={Period.MAX}
        title="Okres"
        unit="M"
      />
      <RangeInput
        onChange={handleValue}
        max={Amount.MAX}
        min={Amount.MIN}
        title="Kwota"
        unit="PLN"
      />
      <Section>
        <Subsection>
          <InputWithUnits>
            <TextInput
              title="Oprocentowanie"
              onChange={handlePercentChange}
              type="number"
              disabled={!isPercentInputActive}
              value={loanPercent}
            />
            <Units>%</Units>
          </InputWithUnits>

          <Checkbox
            isChecked={isPercentInputActive}
            onClick={() => {
              setIsPercentInputActive(prev => !prev);
            }}
          />
        </Subsection>
        <Result>Rata kredytu: {calcLoanInstalment()}zł</Result>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 50vw;
  height: 30vh;
  min-height: 400px;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.orange[900]};

  padding: 20px;
`;

const InputWithUnits = styled.span`
  position: relative;
`;

const Units = styled.div`
  position: absolute;
  top: 50%;
  right: 11%;

  transform: translateY(-50%);

  border-radius: 5px;

  background: ${({ theme }) => theme.colors.gray[100]};
  padding: 0 10px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subsection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Result = styled.span`
  flex-basis: 50%;
  border-radius: 20px;

  font-size: 1.25rem;
  text-align: center;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.orange[900]};

  padding: 10px;
`;

export default App;
