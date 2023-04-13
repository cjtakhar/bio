import Image from './images/kt.jpg'

export default function Bio() {
    return (
        <div>
            <div className="main-container">
                <div className="title-container">
                    <h1 className="title">Kuljit Kaur Takhar</h1>
                </div>
                <div className="bio-container">
                    <img className="bio-img" src={Image} alt="kuljit takhar" />
                    <div className="bio-text">
                        <p className="text">Kuljit Kaur Takhar is a highly passionate technologist and committed humanitarian based in San Francisco dedicated to driving positive change in the world. </p>
                        <p>She has notably contributed her efforts and experience to the Harvard Humanitarian Initiative by analyzing complex data sets to identify root causes of refugee crisis and recommending corrective actions. These recommendations have been instrumental in guiding governments and industries towards a more effective response to critical issues and predicting future occurrence.</p>
                        <p className="text">Today, Kuljit applies technology to make impactful, ethical, meaningful change in the way that we live and, as an engineer, works exclusively with mission driven organizations that are committed to making the world a better place. </p>
                        <p className="text">She believes no human is illegal and trans rights are human rights.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}