import React from "react";
import "./TestScore.css";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { extraCurricularData } from "../../data/extraCurricularData";

const TestScore = () => {
    return (
        <div className="test-score-wrapper">
            <h2>Test Scores</h2>
            <div className="test-score-card">
                <div className="ielts">
                    <h3>IELTS</h3>
                    <h4>Overall: 7.5 out of 9</h4>
                    <ul>
                        <li>
                            <b>Listening:</b> 8.5
                        </li>
                        <li>
                            <b>Reading:</b> 6.5
                        </li>
                        <li>
                            <b>Writing:</b> 6.5
                        </li>
                        <li>
                            <b>Speaking:</b> 7.5
                        </li>
                    </ul>
                </div>
                <div className="gre">
                    <h3>GRE</h3>
                    <h4>Overall: 309 out of 340</h4>
                    <ul>
                        <li>
                            <b>Quantitative:</b> 162
                        </li>
                        <li>
                            <b>Verbal:</b> 147
                        </li>
                        <li>
                            <b>Analytical Writing:</b> 3.5
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TestScore;
