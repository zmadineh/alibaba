import React, {useCallback, useEffect, useState} from "react";

import {swappableInputsDetailType} from "../../../../../model/form/swappableInputsDetail.type";
import {formErrorType} from "../../../../../model/form/fromErrorType.type";

import LaptopSwappableInput from "./LaptopSwappableInput";
import TabletSwappableInput from "./TabletSwappableInput";

import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material";
import MobileSwappableInput from "./MobileSwappableInput";


interface SwappableInputProps {
    setFirstValue: React.Dispatch<React.SetStateAction<string>>,
    setSecValue: React.Dispatch<React.SetStateAction<string>>,
    details: swappableInputsDetailType[],
    listWidth?: string,
    formError: formErrorType,
}

export default function SwappableInput(props : SwappableInputProps) {

    const {details, setFirstValue, setSecValue, formError} = props;

    const firstInputName = details[0].name
    const secondInputName = details[1].name

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));
    const laptopMatch = useMediaQuery(theme.breakpoints.up('md'));

    const [values, setValues] = useState({[firstInputName]: '', [secondInputName]: ''})
    const [error, setError] = useState<{[key: string]: boolean}>({[firstInputName]: false, [secondInputName]: false})
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        if((values[firstInputName] === '' || values[secondInputName] === ''))
            // @ts-ignore
            setError({[firstInputName]: formError[firstInputName], [secondInputName]: formError[secondInputName]})

        // @ts-ignore
        if((formError[firstInputName] || formError[secondInputName]) && (values[firstInputName] === '' || values[secondInputName] === ''))
            setErrorMessage(`${details[0].label} یا ${details[1].label} را پر کنید.`)
    })

    const validationData = useCallback((name: string, value: string) => {
        let otherName: string = '';
        if (name === firstInputName){
            otherName = secondInputName;
            setFirstValue(value)
        }
        else{
            otherName = firstInputName;
            setSecValue(value)
        }

        if(values[otherName] === value && values[otherName] !== '') {
            setError({[name]: false, [otherName]: true})
            setValues({[name]: value, [otherName]: ''})
            setErrorMessage(`${details[0].label} و ${details[1].label} نمیتوانند یکسان باشند.`)
            return false;
        }
        else {
            const newV = value
            setValues({...values, [name]: newV})
            setError({[firstInputName]: false, [secondInputName]: false})
            setErrorMessage('')
            return true;
        }
    }, [values, error]);

    const flipData = useCallback(() => {
        if (values[firstInputName] && values[secondInputName]) {
            const temp1 = values[firstInputName];
            const temp2 = values[secondInputName];
            setValues({...values, [firstInputName] : temp2, [secondInputName] : temp1})
            setFirstValue(temp2)
            setSecValue(temp1)
        }
    }, [values]);

    return (
        <>
            {mobileMatch &&
                <MobileSwappableInput
                    {...props}
                    values={values}
                    flipData={flipData}
                    error={error}
                    errorMessage={errorMessage}
                    validationData={validationData}
                />
            }

            {!mobileMatch && tabletMatch &&
                <TabletSwappableInput
                    {...props}
                    values={values}
                    setValues={setValues}
                    flipData={flipData}
                    error={error}
                    validationData={validationData}
                />
            }

            {laptopMatch &&
                <LaptopSwappableInput
                    {...props}
                    values={values}
                    flipData={flipData}
                    error={error}
                    errorMessage={errorMessage}
                    validationData={validationData}
                />
            }
        </>
    )
}