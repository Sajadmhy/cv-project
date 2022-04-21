import React from "react";

const Skill = (props) => {
    const { tasks } = props;

    return (
        <p>
            {tasks.text.map(name => (
                <p className="skill-item">
                    {name}
                </p>
            ))}
        </p>
    );
};

export default Skill;