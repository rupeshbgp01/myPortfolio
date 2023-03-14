import React from "react";
import './Skill_card.css';

function SkillCard(props) {
    return (
        <div className="skill_container">
            <article className="skill_detail">
                <div className="icon">{props.tag}</div>
                <div>
                    <h4>{props.title}</h4>
                    <small className="text-light">Experience </small></div>
            </article>
        </div>
    );
}

export default SkillCard;