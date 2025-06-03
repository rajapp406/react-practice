import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { THeader } from "../layouts/Header";
import React from "react";

export function TTable<T>(props: { rows: any, headers: any, onClick: (id: string) => void }) {
    const rows = props.rows;
    const headers = props.headers;
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>S. No</TableCell>
                        {
                            headers.map((v, i) => <TableCell key={i}>{v.label}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, j) => (
                        <TableRow onClick={() => props.onClick(row.id)}
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell key={row.id+String(j)}>{j + 1}</TableCell>
                            {
                                headers.map((v, i) => <TableCell key={row.id+String(i)}>{row[v.key]}</TableCell>)
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}