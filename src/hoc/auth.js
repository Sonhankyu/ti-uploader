import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import StartTimer from "../components/Timer/StartTimer";
import FullTimer from "../components/Timer/FullTimer";
import UserTimer from "../components/Timer/UserTimer";

export default function(SpecificComponent) {

    return () => {
        const auth = useSelector(state => state['auth'].auth);
        const history = useHistory();
        const dispatch = useDispatch();
        const time = new Date();
        const moveTime = new Date(Date.parse(time) + 3600000);
        const fullTime = new Date(Date.parse(time) + 7200000);

        useEffect(() => {
            StartTimer(dispatch, detectMove);
            if (window.localStorage.getItem('full') === null) {
                window.localStorage.setItem('full', fullTime);
            }
            window.localStorage.setItem('move', moveTime);
        }, []);

        const detectMove = useCallback(() => {
            const time = new Date();
            const moveTime = new Date(Date.parse(time) + 3600000);
            window.localStorage.setItem('move', moveTime);
        }, []);

        useEffect(() => {
            const countdown = setInterval(() => {
                FullTimer(dispatch, countdown);
            }, [1000])
            return () => clearInterval(countdown);
        }, [fullTime]);

        useEffect(() => {
            const countdown = setInterval(() => {
                UserTimer(countdown);
            }, [1000])
            return () => clearInterval(countdown);
        }, [moveTime]);

        useEffect(() => {
            if (auth === false) {
                history.push('/');
            }
        }, [auth]);

        return <SpecificComponent/>
    }
}