import {
  MouseEvent as ReactMouseEvent,
  FC,
  useRef,
  useState,
  useEffect,
  ChangeEvent,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export interface RangeInputProps {
  min?: number;
  max?: number;
  title: string;
  unit?: string;
  step?: number;
  onChange: (value: number, e?: Event) => any;
}

const DRAGGABLE_WIDTH = 50;

const RangeInput: FC<RangeInputProps> = ({
  min = 0,
  max = 100,
  title,
  unit,
  step = 1,
  onChange,
}) => {
  const [position, setPosition] = useState(0);
  const [hoverPosition, setHoverPosition] = useState(0);
  const [value, setValue] = useState(min);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hoverProgressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("mouseenter", handleStartHover);
    }
    return () => {
      wrapper?.removeEventListener("mouseenter", handleStartHover);
    };
  }, []);

  const handleStartDrag = (e: ReactMouseEvent) => {
    e.preventDefault();

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleStopDrag);
  };

  const handleStartHover = () => {
    const wrapper = wrapperRef.current;

    wrapper?.addEventListener("mousemove", handleHover);
    wrapper?.addEventListener("mouseleave", handleStopHover);
  };

  const handleHover = (e: MouseEvent) => {
    if (wrapperRef.current) {
      const { left } = wrapperRef.current.getBoundingClientRect();
      const mousePosition = e.clientX - left - 17;

      setHoverPosition(mousePosition);
    }
  };

  const handleStopHover = () => {
    const hoverBar = hoverProgressBarRef.current;
    setHoverPosition(0);

    if (hoverBar) {
      hoverBar.removeEventListener("mousemove", handleHover);
      hoverBar.removeEventListener("mouseleave", handleStopHover);
    }
  };

  const handleDrag = (e: MouseEvent | ReactMouseEvent) => {
    e.preventDefault();

    if (wrapperRef.current) {
      const { left, width } = wrapperRef.current.getBoundingClientRect();
      const DRAGGABLE_WIDTH = 50;
      let newPosition = e.clientX - left - DRAGGABLE_WIDTH / 2;

      if (newPosition + DRAGGABLE_WIDTH > width)
        newPosition = width - DRAGGABLE_WIDTH;
      else if (newPosition < 0) newPosition = 0;

      const newValue =
        Math.floor(newPosition / ((width - DRAGGABLE_WIDTH) / (max - min))) +
        min;
      setPosition(newPosition);
      setValue(newValue);

      onChange(newValue);
    }
  };

  const handleManualValueSetting = (e: ChangeEvent<HTMLInputElement>) => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const { width } = wrapper.getBoundingClientRect();
      let value = Number(Number(e?.target?.value).toFixed(2));

      if (value > max) value = max;
      else if (value < min) value = min;

      let newPosition = ((width - DRAGGABLE_WIDTH) / (max - min)) * value;
      setPosition(newPosition < 0 ? 0 : newPosition);
      setValue(value);
      onChange(value);
    }
  };

  const handleStopDrag = (e: MouseEvent) => {
    e.preventDefault();

    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", handleStopDrag);
  };

  return (
    <Wrapper>
      <RangeTitle>{title}</RangeTitle>
      <Range ref={wrapperRef} onClick={handleDrag}>
        <ProgressBar position={position} />
        <HoverProgressBar position={hoverPosition} ref={hoverProgressBarRef} />
        <Draggable onMouseDown={handleStartDrag} position={position}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faAngleRight} />
        </Draggable>
      </Range>

      <OutputWrapper>
        <Output
          value={value}
          onChange={handleManualValueSetting}
          type="number"
        />
        {unit && <Units>{unit}</Units>}
      </OutputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const RangeTitle = styled.h3`
  flex-basis: 100%;

  border-radius: 20px;

  font-size: 1.5rem;
  text-align: center;

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const Units = styled.span`
  position: absolute;
  top: 7.5px;
  right: 7.5px;
  border-radius: 10px;

  font-size: 0.75rem;

  background: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[600]};

  padding: 5px;
`;

const OutputWrapper = styled.div`
  flex-basis: 20%;
  height: 40px;
  position: relative;
`;

const Output = styled.input`
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  border-radius: 20px;
  border: none;

  font-size: 1.25rem;

  background: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.white};

  padding: 5px 5px 5px 20px;
`;

const Range = styled.div`
  position: relative;
  width: 70%;
  height: 15px;

  margin: 50px 0;

  border: 2px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 20px;

  cursor: pointer;
`;

interface DraggableProps {
  position: number;
}

const Draggable = styled.div<DraggableProps>`
  position: absolute;
  top: -17.5px;
  left: ${({ position }) => position}px;
  width: 50px;
  height: 50px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 0 4px 0px ${({ theme }) => theme.colors.gray[900]};

  font-size: 2rem;

  background-color: ${({ theme }) => theme.colors.orange[900]};
  color: white;

  border-radius: 50%;
`;

const ProgressBar = styled.div<DraggableProps>`
  height: 100%;
  width: ${({ position }) => position + 15}px;

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[300]};
`;

const HoverProgressBar = styled(ProgressBar)`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;

  background: rgb(240, 240, 240);
`;

export default RangeInput;
