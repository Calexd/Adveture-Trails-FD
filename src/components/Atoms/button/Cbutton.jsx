import Button from "@mui/material/Button";



function Cbutton({children, variant = "contained", type = ""}) {

  
    return (
        <div>
            <Button type={type} variant={variant} size="small" disableElevation>
            {children}
            </Button>

        </div>
    )
}

export default Cbutton