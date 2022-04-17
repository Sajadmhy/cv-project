import React from "react";

const Name = (props) => {
    const { tasks } = props;

    return (
        <p>
            {tasks.text}
        </p>
    );
};

export default Name;