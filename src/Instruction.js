import calculator from './calculator.png';

export default function Instruction() {
    return (
        <div className="content">
            <div className="header">
                <h1>Cost of Living Calculator</h1>
                <img className="calculator" src={calculator} alt='calculator'></img>
            </div>
            <h2>Compare Job Offers by COL</h2>
            <p>Input the city and salary for two job offers you're considering, and we'll calculate the real value of each offer based on the cost of living in each location.<br/><br/>You'll get a clear picture of how much you'll actually be able to afford in each city, and which job offer will give you more purchasing power and a better quality of life.
            </p>
        </div>
    );
}