import Button from "@mui/material/Button";



function Cbutton({children}) {
    return (
        <div>
            <Button variant="contained" size="small" disableElevation>
            {children}
            </Button>

        </div>
    )
}

export default Cbutton