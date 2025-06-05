import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { TButton } from "../../../../elements/Button";
import TAlertSuccess from "../../../../elements/Alert";
import { TCard } from "../../../../elements/Card";
import { InputBox } from "../../../../elements/Input";
import { registerUserThunk } from "../../../../redux/thunks/users/registerThunk";

interface RegistrationFormInputs {
    name: string;
    email: string;
    username: string;
    password: string;
    phone: string;
}

export function Registration() {
    const dispatch: AppDispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegistrationFormInputs>();

    const [responseStatus, setResponseStatus] = React.useState<string | null>(null);

    // Handle form submission
    const onSubmit: SubmitHandler<RegistrationFormInputs> = async (data) => {
        try {
            const response = await dispatch(registerUserThunk(data)).unwrap();
            setResponseStatus(response.meta.requestStatus);
        } catch (error) {
            console.error("Registration failed:", error);
            setResponseStatus("rejected");
        }
    };

    return (
        <>
            {responseStatus === "fulfilled" && (
                <TAlertSuccess>Registration has been successful!</TAlertSuccess>
            )}
            <TCard>
                <div style={{padding: '15px'}}>
                    <label><h2>Registration</h2></label>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputBox
                        type="text"
                        label="Name"
                        {...register("name", { required: "Name is required" })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <InputBox
                        type="email"
                        label="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address",
                            },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <InputBox
                        type="text"
                        label="Username"
                        {...register("username", { required: "Username is required" })}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <InputBox
                        type="password"
                        label="Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long",
                            },
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <InputBox
                        type="number"
                        label="Phone"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Phone number must be 10 digits",
                            },
                        })}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                    />
                    <TButton type="submit">Register</TButton>
                </form> </div>
             
            </TCard>
        </>
    );
}