import React from "react";

const Email = (props) => {
    const { tasks } = props;

    return (
        <p>
            {tasks.text}
        </p>
    );
};

export default Email;