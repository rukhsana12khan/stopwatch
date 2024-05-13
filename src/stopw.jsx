import { useRef, useState } from "react";
import Button from "./button";


const Stopw = () => {

    const currentTime = useRef(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalid = useRef(null)

    const handaleStart = () => {
        currentTime.current = (Date.now());
        intervalid.current = setInterval(() => {
            setElapsedTime(Date.now() - currentTime.current)
        }, 10)
    }

    const handaleStop = () => {

        clearInterval(intervalid.current)

    }

    const handaleResert = () => {
        clearInterval(intervalid.current)
        setElapsedTime(0)




    }


    const formatTime = () => {
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10);

        mins = String(mins).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        miliseconds = String(miliseconds).padStart(2, "0")

        return `${mins}: ${seconds}:${miliseconds}`
    }

    return (
        <div className="  my-24">
            <p className="text-center text-3xl italic text-gray-100" >!!  Stopwatch  !!</p>
            <div className="flex justify-center p-6">

                <h1 className="text-3xl text-center">{formatTime()} </h1>
            </div >
            <div className="flex justify-center my-6 text-red-900">
                <Button text='Start' handeleclick={handaleStart} className="p-12" />
                <Button text='Stop' handeleclick={handaleStop} />
                <Button text='Resert' handeleclick={handaleResert} />
            </div>
        </div>
    )
}
export default Stopw;