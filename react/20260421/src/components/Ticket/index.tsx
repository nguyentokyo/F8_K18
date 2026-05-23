import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const tasks = [
    {
        id: 1,
        title: "ticket 1: 修正",
        subtasks: ["API作成", "UI調整", "レビュー"]
    },
    {
        id: 2,
        title: "ticket 2: 開発",
        subtasks: ["不具合修正", "テスト", "リリース"]
    }
];

export default function TaskList() {
    const [data, setData] = useState({});

    const handleChange = (taskId, index, field, value) => {
        const key = `${taskId}-${index}`;

        setData({
            ...data,
            [key]: {
                ...data[key],
                [field]: value
            }
        });
    };

    const getTotalHours = (taskId) => {
        let total = 0;

        Object.keys(data).forEach((key) => {
            if (key.startsWith(taskId)) {
                total += Number(data[key]?.hours || 0);
            }
        });

        return total;
    };

    return (
        <div>
            {tasks.map((task) => (
                <Accordion key={task.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight="bold">
                            {task.title} | Total: {getTotalHours(task.id)}h
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        {task.subtasks.map((sub, index) => {
                            const key = `${task.id}-${index}`;

                            return (
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        alignItems: "center",
                                        marginBottom: "10px"
                                    }}
                                >
                                    <Typography style={{ width: "180px" }}>
                                        {sub}
                                    </Typography>

                                    <TextField
                                        type="number"
                                        label="Hours"
                                        size="small"
                                        value={data[key]?.hours || ""}
                                        onChange={(e) =>
                                            handleChange(
                                                task.id,
                                                index,
                                                "hours",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <TextField
                                        type="date"
                                        size="small"
                                        value={data[key]?.date || ""}
                                        onChange={(e) =>
                                            handleChange(
                                                task.id,
                                                index,
                                                "date",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <Button variant="contained">
                                        Save
                                    </Button>
                                </div>
                            );
                        })}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}