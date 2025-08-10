import { useCallback, useRef } from "react";
import { Button } from "../button/button";
import IconMinus from "../icons/iconMinus";
import IconPlus from "../icons/iconPlus";

interface StepButtonInterface {
  direction: "inc" | "dec";
  onMouseDown: (direction: "dec" | "inc") => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  onTouchEnd: () => void;
}

export const StepButton = ({
  direction,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onTouchEnd,
}: StepButtonInterface) => {
  const isTouch = useRef(false);

  const handleStart = useCallback(
    (e: React.TouchEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (e.type === "touchstart") {
        isTouch.current = true;
        onMouseDown(direction);
      } else if (e.type === "mousedown") {
        if (isTouch.current) return; // игнорируем mouse после touch
        onMouseDown(direction);
      }
    },
    [onMouseDown, direction]
  );

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      isTouch.current = false;
    }, 300);
    onTouchEnd();
  }, [onTouchEnd]);

  return (
    <Button
      onTouchStart={handleStart}
      onMouseDown={handleStart}
      onTouchEnd={handleTouchEnd}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {direction === "dec" && <IconMinus />}
      {direction === "inc" && <IconPlus />}
    </Button>
  );
};
