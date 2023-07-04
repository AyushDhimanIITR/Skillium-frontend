import React, {useEffect} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const GameScreen = () => {
  const handleKey = (e) => {
    if(e.keyCode == 13){
      document.documentElement.requestFullscreen();
      return true;
    }else return false;
  }
  

  useEffect(() => {
  
    window.addEventListener('keydown', handleKey);
    
    return() => window.removeEventListener('keydown', handleKey);
  }, []);
    const {unityProvider} = useUnityContext({
      loaderUrl: "WebGl/Build/Loader.loader.js",
      dataUrl: "WebGl/Build/build.data.unityweb",
      frameworkUrl: "WebGl/Build/framework.framework.js.unityweb",
      codeUrl: "WebGl/Build/buildWasm.wasm.unityweb",
  });
  return (
      
    <div allow="fullscreen">
      <Unity unityProvider={unityProvider} style={{width:"100vw", height:"100vh", justifySelf: "center", alignItems:"center"}} />
    </div>
  );
};

export default GameScreen;
