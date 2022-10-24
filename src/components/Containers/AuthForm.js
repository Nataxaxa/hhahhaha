import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export default function AuthForm() {
    return <div style ={{
        backgroundColor: "#f4f4f4",
        padding: 50,
        borderRadius: 10,
        width: 200,
    }}>
        <TextField id="outlined-basic" label="имя любимое твое" variant="outlined" /> 
        <TextField id="filled-basic" label="мое любимое" variant="filled" type="password" /> 
        <Button variant="contained" color="inherit">ТыкТык</Button>
    </div>
}