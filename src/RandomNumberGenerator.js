import React, { useState, useRef } from 'react';

function RandomNumberGenerator({ setMin, setMax }) {
const [min, setMinValue] = useState('');
const [max, setMaxValue] = useState('');
const [result, setResult] = useState([]);
const [lotteryResult, setLotteryResult] = useState([]);
const resultContainerRef = useRef(null);

const generateRandomNumber = () => {
const minValue = min ? parseInt(min, 10) : 0;
const maxValue = max ? parseInt(max, 10) : 100;
const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
setResult([...result, randomNumber]);
scrollToBottom();
};

const generateLotteryNumbers = () => {
let lotteryNumbers = [];
for (let i = 0; i < 6; i++) {
const minValue = 1;
const maxValue = 49;
const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
lotteryNumbers.push(randomNumber);
}
setLotteryResult([...lotteryResult, lotteryNumbers.join(', ')]);
scrollToBottom();
};

const scrollToBottom = () => {
resultContainerRef.current.scrollTop = resultContainerRef.current.scrollHeight;
};

return (
<div>
<input
type="number"
value={min}
onChange={e => setMinValue(e.target.value)}
placeholder="Minimum"
className="input"
/>
<input
type="number"
value={max}
onChange={e => setMaxValue(e.target.value)}
placeholder="Maximum"
className="input"
/>
<button onClick={generateRandomNumber} className="button">Generate</button>
<div ref={resultContainerRef} className="result-container">
{result.map((number, index) => (
<p key={index}>{number}</p>
))}
</div>
<hr />
<div>
<button onClick={generateLotteryNumbers} className="button">Generate Lottery Numbers</button>
<div ref={resultContainerRef} className="result-container">
{lotteryResult.map((numbers, index) => (
<p key={index}>{numbers}</p>
))}
</div>
</div>
</div>
);
}

export default RandomNumberGenerator;