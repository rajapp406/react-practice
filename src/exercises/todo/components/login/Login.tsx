import React, { useState } from "react";
import { TButton } from "../../../../elements/Button";
import { InputBox } from "../../../../elements/Input";
import { TCard } from "../../../../elements/Card";

export function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle login action
    const handleLogin = () => {
        console.log("Login Data:", formData);
        // Add login logic here (e.g., API call)
    };

    return (
        <div
            style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: "20px",
            }}
        >
            <TCard sx={{padding: '5em'}}>
                <InputBox
                    type="text"
                    label="Username"
                    name="username"
                    value={formData.username}
                    onInput={handleInputChange}
                />
                <InputBox
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onInput={handleInputChange}
                />
                <TButton onClick={handleLogin}>Login</TButton>
            </TCard>
        </div>
    );
}