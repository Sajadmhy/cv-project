import React from "react";

const Phone = (props) => {
    const { tasks } = props;

    return (
        <p>
            {tasks.text}
        </p>
    );
};

export default Phone;