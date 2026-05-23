
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Column, Row} from "../../utils"

interface Props {
    columns: Column[];
    rows: Row[];
    maxWidth?: number | string;
    onClickEdit: (id: number) => void;
    onClickDelete: (id: number) => void;
}

const TableContainer = ({columns, rows, maxWidth, onClickEdit, onClickDelete}: Props)=> {

    const onEdit = (id : number) => {
        if (onClickEdit) {
            onClickEdit(id)
        }
    }

    const onDelete = (id : number) => {
        if (onClickDelete) {
            onClickDelete(id)
        }
    }


    return (
        <Table sx={{ maxWidth, margin: 'auto' }} size="small" aria-label="simple table">
            <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableCell key={index}>{column.text}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.map((row, index) => {
                        return (
                            <TableRow key={index}>
                                {
                                    columns.map((column, index) => {
                                        if (column.value === 'action') {
                                            return (
                                                <TableCell key={index}>
                                                    {/*<Button variant="contained" onClick={() => onEdit(std.id)}>Edit</Button>*/}
                                                    <EditOutlinedIcon color={'success'} onClick={() => onEdit(row.id)}></EditOutlinedIcon>
                                                    <DeleteIcon color={'error'} onClick={() => onDelete(row.id)}></DeleteIcon>
                                                </TableCell>
                                            )
                                        }
                                        return <TableCell style={column.styles} key={column.value}>{row[column.value]}</TableCell>
                                        }
                                    )
                                }
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

export default TableContainer