
import "./recording.css";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import RecordingBar from '../../components/recordingBar/RecordingBar';
import { SearchOutlined } from "@material-ui/icons";
import Video from '../../components/video/Video';

export default function recording() {
  return (
    <div className="view">
        <SecondTopBar title="Recordings"/>
        <div class="search-container">
          
            <input type="text" placeholder="Search.." name="search" className="input"/>
            <button type="submit"><SearchOutlined/></button>
        
        </div>
        <div className="CameraTable">
        <RecordingBar Camera="Camera1"/>
        <RecordingBar Camera="Camera2"/>
        <RecordingBar Camera="Camera3"/>
        <RecordingBar Camera="Camera4"/>
        <RecordingBar Camera="Camera5"/>
        <RecordingBar Camera="Camera6"/>
        <RecordingBar Camera="Camera7"/>
        <RecordingBar Camera="Camera8"/>
        <RecordingBar Camera="Camera9"/>
        </div>
        
        
    </div>
  )
}
