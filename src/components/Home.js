import messi from "./Pictures/messi.jpg"

// How to get from time now to target time?
const countdown = () => {
    const countDate = new Date('Nov 20, 2022 10:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

// How the heck does time work in milisec?
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//How to calculate this?
const resultDay = Math.floor(gap / day);
const resultHour = Math.floor((gap % day) / hour);
const resultMinute = Math.floor((gap % hour) / minute);
const resultSecond = Math.floor((gap % minute) / second);

document.querySelector(".day").innerText = resultDay + 'd';
document.querySelector(".hour").innerText = resultHour + "h";
document.querySelector(".minute").innerText = resultMinute + "m";
document.querySelector(".second").innerText = resultSecond + 's';
};

setInterval(countdown, 1000);



const Home = () => (
<body style={{ backgroundImage: `url(${messi})`,backgroundRepeat:"no-repeat", height: "60rem", display: "flex", flexDirection: "column", backgroundSize:"120rem"  }}>
    <div className = "boxbox" >
        <h2>World Cup in</h2>
        <div className="countdown">
            <div className="container-days">
                <h3 className ="day">Time</h3>
                <h3>Days</h3>
            </div>
            <div className="container-hour">
                <h3 className ="hour">Time</h3>
                <h3>Hour</h3>
            </div>
            <div className="container-minute">
                <h3 className ="minute">Time</h3>
                <h3>Minute</h3>
            </div>
            <div className="container-second">
                <h3 className ="second">Time</h3>
                <h3>Second</h3>
            </div>
        </div>
    </div>  
</body>  
);

export default Home;