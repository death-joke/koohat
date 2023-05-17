import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

//create a componenement who print a score 
const Score = (props: { score: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
    return (
        <div>
            <h1>Score</h1>
            <h2>{props.score}</h2>
        </div>
    );
};

export default Score;