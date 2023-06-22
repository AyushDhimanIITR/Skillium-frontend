import React from "react";

const game = {
  gameScreen:
    '<iframe width="1000" height="960" scrolling="yes" frameborder="no" allow="autoplay" src="https://play.unity.com/webgl/7e334cf1-4d0c-4dd5-a5b1-dd6046e76b22?screenshot=false&embedType=embed" ></iframe>',
};

const Iframe = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : " " }}
    />
  );
};

const GameScreen = () => {
  return (
    <>
      <Iframe iframe={game["gameScreen"]} allow="autoplay" />
    </>
  );
};

export default GameScreen;
