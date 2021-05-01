import React from "react";
import "./ExtraCurricular.css";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { extraCurricularData } from "../../data/extraCurricularData";

const ExtraCurricular = () => {
    return (
        <div className="extra-curricular-wrapper">
            <h2>Extra Curricular Activities</h2>
            <div className="extra-curricular-card">
                {extraCurricularData.map((item, idx) => (
                    <div className="single-extra-curricular" key={idx}>
                        <ArrowRightIcon />
                        <div>{item}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExtraCurricular;
