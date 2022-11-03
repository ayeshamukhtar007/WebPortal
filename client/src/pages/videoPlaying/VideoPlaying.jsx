
import "./videoPlaying.css";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';

import Stream from "../../components/Stream/Stream";


export default function VideoPlaying() {
  return (
    <div className="view">
      <SecondTopBar title="Video"/>
        <Stream/>
        
        
    </div>
  )
}
