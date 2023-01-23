import React from "react";
import Card from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const addLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const deleteLogin = () => {
        localStorage.removeItem("auth");
    };
    return (
        <>
            <Card>
                <Component
                    onLogin={addLogin}
                    onLogOut={deleteLogin}
                    isAuth={isAuth}
                />
            </Card>
        </>
    );
};

export default withFunctions;
