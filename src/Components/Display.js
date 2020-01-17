import React from "react";

const Display = ({atBatInfo}) => {
  return (
    <div>
      <div>Balls:{atBatInfo.balls}</div>
      <div>Strikes:{atBatInfo.strikes}</div>
    </div>
  )
}

export default Display