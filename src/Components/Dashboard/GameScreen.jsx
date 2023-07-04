import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

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
    const {unityProvider} = useUnityContext({
      loaderUrl: "WebGl/Build/Loader.loader.js",
      dataUrl: "WebGl/Build/build.data.unityweb",
      frameworkUrl: "WebGl/Build/framework.framework.js.unityweb",
      codeUrl: "WebGl/Build/buildWasm.wasm.unityweb",
  });
  return (
      
    <div>
      <Unity unityProvider={unityProvider} style={{width:"100vw", height:"100vh", justifySelf: "center", alignItems:"center"}} />
    </div>
  );
};

export default GameScreen;
