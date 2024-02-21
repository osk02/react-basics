import { useState } from "react";

export const UserGreeting = () => {
    const isLoggedIn = true;
    return(
        <div>
            <h1>Welcome {isLoggedIn && 'Om'} </h1>
        </div>
    );
}