var $3D0D8$reactjsxruntime = require("react/jsx-runtime");
var $3D0D8$reactdom = require("react-dom");
var $3D0D8$react = require("react");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}







function $25a73f08fe668a49$export$abd05461e3de4b43() {
    const [minutesLeft, setMinutesLeft] = $3D0D8$react.useState(5);
    const [seconds1, setSeconds] = $3D0D8$react.useState(0);
    const [isActive, setIsActive] = $3D0D8$react.useState(false);
    $3D0D8$react.useEffect(()=>{
        const startTimer = setInterval(()=>{
            clearInterval(startTimer);
            let intervalID;
            if (isActive) {
                intervalID = setInterval(()=>{
                });
                if (seconds1 === 0) {
                    if (minutesLeft !== 0) {
                        setSeconds(59);
                        setMinutesLeft(minutesLeft - 1);
                    } else {
                        let minutes = displayTimer ? 5 : 4;
                        let seconds = 59;
                        setSeconds(seconds - 1);
                        setMinutes(minutes);
                    }
                } else setSeconds(seconds1 - 1);
            }
        });
    }, [
        isActive,
        seconds1
    ]);
    return(/*#__PURE__*/ $3D0D8$reactjsxruntime.jsxs("div", {
        className: "break-time",
        children: [
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsxs("div", {
                className: "break-message",
                children: [
                    /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("h2", {
                        children: "Break Time !"
                    }),
                    minutesLeft,
                    ":",
                    seconds1
                ]
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("div", {
                className: "start__stop__buttons",
                children: /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("button", {
                    onClick: ()=>setIsActive(!isActive)
                    ,
                    children: isActive ? 'Stop' : 'Start'
                })
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("div", {
                className: "plus__button",
                children: /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("button", {
                    className: "plus",
                    onClick: ()=>setMinutesLeft(minutesLeft + 1)
                    ,
                    children: "+"
                })
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("div", {
                className: "minus__button",
                children: /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("button", {
                    onClick: ()=>setMinutesLeft(minutesLeft - 1)
                    ,
                    children: "-"
                })
            })
        ]
    }));
}
var $25a73f08fe668a49$export$2e2bcd8739ae039 = $25a73f08fe668a49$export$abd05461e3de4b43;


function $d80a6cce7fa5df0b$export$c57e9b2d8b9e4de() {
    const [minutesLeft, setMinutesLeft] = $3D0D8$react.useState(25);
    const [seconds1, setSeconds] = $3D0D8$react.useState(0);
    const [displayTimer, setDisplayTimer] = $3D0D8$react.useState(false);
    const [isActive, setIsActive] = $3D0D8$react.useState(false);
    $3D0D8$react.useEffect(()=>{
        const startTimer = setInterval(()=>{
            clearInterval(startTimer);
            let intervalID;
            if (isActive) {
                intervalID = setInterval(()=>{
                });
                if (seconds1 === 0) {
                    if (minutesLeft !== 0) {
                        setSeconds(59);
                        setMinutesLeft(minutesLeft - 1);
                    } else {
                        let minutes = displayTimer ? 24 : 4;
                        let seconds = 59;
                        setSeconds(seconds - 1);
                        setMinutes(minutes);
                    }
                } else setSeconds(seconds1 - 1);
            }
        }, 1000);
    }, [
        isActive,
        seconds1
    ]);
    return(/*#__PURE__*/ $3D0D8$reactjsxruntime.jsxs("div", {
        className: "pomodoro",
        children: [
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsxs("div", {
                className: "timer-comp",
                children: [
                    /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("h2", {
                        children: "Time to work !"
                    }),
                    minutesLeft,
                    ":",
                    seconds1
                ]
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("div", {
                className: "start__stop__buttons",
                children: /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("button", {
                    onClick: ()=>setIsActive(!isActive)
                    ,
                    children: isActive ? 'Stop' : 'Start'
                })
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("div", {
                className: "plus__button",
                children: /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("button", {
                    className: "plus",
                    onClick: ()=>setMinutesLeft(minutesLeft + 1)
                    ,
                    children: "+"
                })
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("div", {
                className: "minus__button",
                children: /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("button", {
                    onClick: ()=>setMinutesLeft(minutesLeft - 1)
                    ,
                    children: "-"
                })
            }),
            /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("div", {
                className: "break-timer",
                children: /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx($25a73f08fe668a49$export$2e2bcd8739ae039, {
                })
            })
        ]
    }));
}
var $d80a6cce7fa5df0b$export$2e2bcd8739ae039 = $d80a6cce7fa5df0b$export$c57e9b2d8b9e4de;


function $40aea0f90e98f543$export$86fbec116b87613f() {
    return(/*#__PURE__*/ $3D0D8$reactjsxruntime.jsx("div", {
        className: "timer",
        children: /*#__PURE__*/ $3D0D8$reactjsxruntime.jsx($d80a6cce7fa5df0b$export$2e2bcd8739ae039, {
        })
    }));
}


const $349a00930b14e029$var$app = document.getElementById("app");
($parcel$interopDefault($3D0D8$reactdom)).render(/*#__PURE__*/ $3D0D8$reactjsxruntime.jsx($40aea0f90e98f543$export$86fbec116b87613f, {
}), $349a00930b14e029$var$app);


//# sourceMappingURL=index.js.map
