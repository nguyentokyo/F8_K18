import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import type { Student } from "../../../utils"
import { useState } from "react";

interface Props {
    isOpen: boolean
    onClose: () => void
    student: Student
}

const StudentDialog = ({ student, isOpen, onClose }: Props) => {

    const [editingStudentId, setEditingStudentId] = useState(student);


    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            role="alertdialog"
            maxWidth={'xs'}
        >
            <DialogTitle id="alert-dialog-title">Student Dialog</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    margin={'dense'}
                    label="Tên"
                    variant="standard"
                    value={editingStudentId?.name}
                />
                <TextField
                    fullWidth
                    margin={'normal'}
                    label="Tuổi"
                    variant="standard"
                />
                <TextField
                    fullWidth
                    margin={'normal'}
                    label="Lớp"
                    variant="standard"
                />
                <TextField
                    fullWidth
                    margin={'normal'}
                    label="Địa chỉ"
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>
                    Disagree
                </Button>
                <Button onClick={onClose}>Agree</Button>
            </DialogActions>
        </Dialog>
    )
}

export default StudentDialog