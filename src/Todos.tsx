import React from "react";

export const Todos = React.memo(({ todos, addTodo }) => {
    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
});