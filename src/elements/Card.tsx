import { Card } from "@mui/material"
import React from "react"

export const TCard = (props) => {
    return (
      <Card {...props}>{props.children}</Card>
    )
}