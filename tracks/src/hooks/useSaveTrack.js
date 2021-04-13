import {useContext} from "react";
import {Context as LocationContext} from "../context/LocationContext";
import {Context as TrackContext} from "../context/TrackContext";
import {navigate} from "../navigationRef";

export default () => {
    const {createTrack} = useContext(TrackContext);
    const {state: {name, locations}, reset} = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(name, locations);
        reset();
        navigate('TrackList')
    };

    return [saveTrack];
}