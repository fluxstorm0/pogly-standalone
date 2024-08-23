import { TextField } from "@mui/material";

interface IProps {
  focused: boolean;
  label: string;
  color: string;
  onChange: Function;
  value?: string;
  defaultValue?: string;
  password?: boolean;
  placeholder?: string;
}

export const StyledInput = (props: IProps) => {
  return (
    <TextField
      label={props.label}
      value={props.value}
      defaultValue={props.defaultValue}
      autoFocus={props.focused}
      variant="outlined"
      inputProps={{
        style: { color: props.color },
      }}
      InputLabelProps={{
        style: { color: props.color },
      }}
      InputProps={{
        sx: {
          ".MuiOutlinedInput-notchedOutline": {
            border: `2px solid ${props.color}`,
            color: props.color,
          },
          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              border: `2px solid ${props.color}`,
              color: props.color,
            },
          },
        },
      }}
      onChange={(event: any) => props.onChange(event.target.value)}
      type={props.password ? "password" : "text"}
      autoComplete="one-time-code"
      placeholder={props.placeholder ? props.placeholder : ""}
    />
  );
};
