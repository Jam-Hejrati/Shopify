import {TextField} from "@mui/material";


export default function FormInputs() {

  return (
      <>
        <TextField label="Username" variant="outlined" margin="normal"/>
        <TextField label="Password" variant="outlined" type="password"/>
      </>
  )
}