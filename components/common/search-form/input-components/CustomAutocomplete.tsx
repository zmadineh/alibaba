import React, {SyntheticEvent} from "react";

import {searchFromValue} from "../../../../model/searchFormValue.type";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


interface autocompleteProps {
    value: string | null,
    setValue:  React.Dispatch<React.SetStateAction<string | null>>,
    input: string | undefined,
    setInput:  React.Dispatch<React.SetStateAction<string | undefined>>,
    dataArray: string[],
    label: string,
    borderRadius: string,
    name: string,
    handleChange: (name: string, value: string | null) => void,
    // selectInput: boolean,
}

export default function CustomAutocomplete({value, setValue, input, setInput, dataArray, label, borderRadius, name, handleChange} : autocompleteProps) {

    const onChangeValue = (event : SyntheticEvent, newValue: string | null) => {
        setValue(newValue);
        handleChange(name, newValue)
        console.log(newValue)
    }

    const onInputChange = (event : SyntheticEvent, newValue: string | undefined) => {
        setInput(newValue)
    }

    return(
      <Autocomplete
          value={value}
          onChange={(event, newValue) => onChangeValue(event, newValue)}
          inputValue={input}
          onInputChange={(event, newInputValue) => onInputChange(event, newInputValue)}
          id='custom-autoComplete'
          fullWidth
          options={dataArray}
          renderInput={(params) => (
              <TextField
                  {...params}
                  label={label}
                  size={"small"}
                  sx={{
                      '& .MuiInputBase-root': {
                          borderRadius: borderRadius
                      }
                  }}
              />
          )}
          />
    )
}