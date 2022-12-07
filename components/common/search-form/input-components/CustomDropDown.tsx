import React, {SyntheticEvent} from "react";
import {MenuItem, TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import {searchFromValue} from "../../../../model/searchFormValue.type";

interface CustomDropDownProps {
    label: string,
    name: string,
    // changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    changeHandler: (name: string, value: string) => void,
    values : Array<{value : string,label : string}>,
    currentValue : string,
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>,
    borderRadius: string,
    variant: "standard" | "filled" | "outlined" | undefined,
}

const CustomDropDown = (props: CustomDropDownProps) => {

    const onChange = (event: any) => {
        props.setCurrentValue(event.target.value)
        props.changeHandler(props.name, event.target.value)
    }

    return (
        <TextField
            select //converts to a dropdown
            label={props.label}
            name={props.name}
            onChange={onChange}
            value={props.currentValue}

            fullWidth
            variant={"outlined"}
            size={"medium"}

            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" >
                        <CalendarMonthOutlinedIcon />
                        {/*{iconMap.find(item => item.iconName === iconName).icon}*/}
                    </InputAdornment>
                ),
            }}
            sx={{
                minHeight: 0,

                '& .MuiInputBase-root': {
                    borderRadius: props.borderRadius,
                    borderColor: "grey.200",
                },

                // '& .MuiOutlinedInput-input ': {
                //     minHeight: 0,
                //     height: '1.1rem',
                // },
                //
                // '& .MuiSelect-select': {
                //     minHeight: 0,
                //     height: '1.1rem',
                // },
                //
                // '& .MuiOutlinedInput-input': {
                //     height: '1.1rem',
                // },

                '& .MuiInputBase-root::before': {
                    borderColor: "grey.200",
                },

                '& .MuiInput-root::after': {
                    borderColor: "grey.300",
                },

                '& .MuiOutlinedInput-root.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: "grey.400",
                        borderWidth: '0.5px',
                    },
                },

                '& .MuiInputLabel-root.Mui-focused': {
                    color: "grey.400",
                },

                '& .MuiInput-input': {
                    height: '2.4rem',
                },
            }}

        >
            {props.values.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default CustomDropDown;

