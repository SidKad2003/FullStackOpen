import P1 from "./content/part1";
import P2 from "./content/part2";
import P3 from "./content/part3";

const Content = () => {
    return (
        <>
            <P1 part1='Fundamentals of React'
                exercises1={10} />
            <P2
                part2='Using props to pass data'
                exercises2={7}
            />
            <P3
                part3='State of a component'
                exercises3={14} />
        </>
    )
}

export default Content;