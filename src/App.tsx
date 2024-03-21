import { useState } from "react";
import "./App.scss";

const App = () => {
  const [lastClicked, setLastClicked] = useState<Date | undefined>(undefined);
  const [buttonColor, setButtonColor] = useState<"red" | "blue" | "green">(
    "red"
  );

  const onClick = () => {
    setLastClicked(new Date());
    setButtonColor(getNextButtonColor());
  };

  const getNextButtonColor = (): "red" | "blue" | "green" => {
    switch (buttonColor) {
      case "red":
        return "blue";
      case "blue":
        return "green";
      case "green":
        return "red";
      default:
        throw new Error("Invalid color");
    }
  };

  const formatTimeZone = (time: Date | undefined, zone: string) => {
    if (!time) return "Never";

    return time.toLocaleString(undefined, {
      timeZone: zone,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div>
        <button
          data-testid="time-btn"
          onClick={onClick}
          style={{ backgroundColor: buttonColor }}
        >
          Click
        </button>
      </div>
      <div className="TimeContainer">
        <div className="TimeItem">
          Local time:{" "}
          {formatTimeZone(
            lastClicked,
            Intl.DateTimeFormat().resolvedOptions().timeZone
          )}
        </div>
        <div className="TimeItem">
          GMT Time: {formatTimeZone(lastClicked, "GMT")}
        </div>
        <div className="TimeItem">
          ACT Time: {formatTimeZone(lastClicked, "Australia/ACT")}
        </div>
      </div>
    </>
  );
};

export default App;
