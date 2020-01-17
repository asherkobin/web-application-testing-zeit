import React from "react";
import { onBall, onStrike, onFoul, onHit } from "../Helpers/atBatHelper";

const Dashboard = ({atBatInfo, setAtBatInfo}) => {
  const handleBallClick = e => {
    setAtBatInfo(onBall(atBatInfo));
  }

  const handleStrikeClick = e => {
    setAtBatInfo(onStrike(atBatInfo));
  }

  const handleFoulClick = e => {
    setAtBatInfo(onFoul(atBatInfo));
  }

  const handleHitClick = e => {
    setAtBatInfo(onHit(atBatInfo));
  }

  return (
    <div>
      <div><button onClick={handleBallClick}>Ball</button></div>
      <div><button onClick={handleStrikeClick}>Strike</button></div>
      <div><button onClick={handleFoulClick}>Foul</button></div>
      <div><button onClick={handleHitClick}>Hit</button></div>
    </div>
  )
}

export default Dashboard