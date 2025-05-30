import { Alert } from "@mui/material";
import React from "react";

export default function TAlertSuccess(props){
    return (
        <Alert severity="success">{props.children}</Alert>
    )
}