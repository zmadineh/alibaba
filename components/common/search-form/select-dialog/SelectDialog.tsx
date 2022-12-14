import React, {useState} from 'react';

import {data} from "../../../../model/form/data.type";

import SelectDialogHeader from "./SelectDialogHeader";

import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import SelectDialogListItem from "./SelectDialogListItem";
import {getTitleArray} from "../../../../helper/getTitleArray.helper";
import Grid from "@mui/material/Grid/Grid";
import {Divider} from "@mui/material";
import DataList from "./DataList";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


interface selectDialogProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    data: data[],
    onClose: (value: string) => void,
    label: string,
}

export default function SelectDialog({open, setOpen, data, onClose, label} : selectDialogProps) {

    const [search, setSearch] = useState<string>('');

    const handleClose = () => {
        // onClose(selectedValue);
        setOpen(false)
    };

    const handelItemClick = (value : string) => {
        console.log(value)
        onClose(value);
    };

    return (
        <div>
            <Dialog
                // onClose={handleClose}
                open={open}
                role={"presentation"}
                TransitionComponent={Transition}
                fullScreen
            >
                <SelectDialogHeader
                    search={search}
                    setSearch={setSearch}
                    handleClose={handleClose}
                    label={label}
                />
                <div style={{overflow: "hidden", height: '1px'}}></div>

                <DataList
                    data={data}
                    search={search}
                    handelItemClick={handelItemClick}
                    listDescription={false}
                />
            </Dialog>
        </div>
    );
}