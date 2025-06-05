import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    TextField,
    Button,
} from "@mui/material";

interface Header {
    key: string;
    label: string;
}

interface EditableTableProps<T> {
    rows: T[];
    headers: Header[];
    onSave: (updatedRows: T[]) => void;
}

export function EditableTable<T extends { id: string }>(props: EditableTableProps<T>) {
    const { rows, headers, onSave } = props;

    const [editableRows, setEditableRows] = useState<T[]>(rows);
    const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
    const [editingRowId, setEditingRowId] = useState<string | null>(null);

    const handleCheckboxChange = (id: string) => {
        const updatedSelectedRows = new Set(selectedRows);
        if (updatedSelectedRows.has(id)) {
            updatedSelectedRows.delete(id);
        } else {
            updatedSelectedRows.add(id);
        }
        setSelectedRows(updatedSelectedRows);
    };

    const handleEdit = (id: string) => {
        setEditingRowId(id);
    };

    const handleSave = (id: string) => {
        setEditingRowId(null);
        onSave(editableRows);
    };

    const handleInputChange = (id: string, key: string, value: string) => {
        const updatedRows = editableRows.map(row =>
            row.id === id ? { ...row, [key]: value } : row
        );
        setEditableRows(updatedRows);
    };

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="editable table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox />
                        </TableCell>
                        <TableCell>S. No</TableCell>
                        {headers.map((header, index) => (
                            <TableCell key={index}>{header.label}</TableCell>
                        ))}
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {editableRows.map((row, index) => (
                        <TableRow key={row.id}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedRows.has(row.id)}
                                    onChange={() => handleCheckboxChange(row.id)}
                                />
                            </TableCell>
                            <TableCell>{index + 1}</TableCell>
                            {headers.map(header => (
                                <TableCell key={header.key}>
                                    {editingRowId === row.id ? (
                                        <TextField
                                            value={row[header.key]}
                                            onChange={e =>
                                                handleInputChange(row.id, header.key, e.target.value)
                                            }
                                            size="small"
                                        />
                                    ) : (
                                        row[header.key]
                                    )}
                                </TableCell>
                            ))}
                            <TableCell>
                                {editingRowId === row.id ? (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => handleSave(row.id)}
                                    >
                                        Save
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        onClick={() => handleEdit(row.id)}
                                    >
                                        Edit
                                    </Button>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}