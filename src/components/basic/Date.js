import React, {memo, useState} from "react";

import {getDate} from "src/utils/utils";

import DateTimePicker from "@react-native-community/datetimepicker";

import Input from "./Input";

const DateInput = ({
        label = "Date",
        value = getDate(),
        disabled = false,
        mandatory = false,
        onChange = ()=>{},
        ...rest
    }) => {

    const [dateTimePicker, setDateTimePicker] = useState({
        date : new Date(),
        show : false
    });

    const showDateTimePicker = (date) => {
        setDateTimePicker({
            date : new Date(date),
            show : true
        });
    }

    const onDateChange = (event, date) => {
        setDateTimePicker({...dateTimePicker, ["show"] : false});
        if(date === undefined) return false;

        let month = new Date(date).getMonth() + 1;
        if(month < 10) month = "0" + month;

        let day = new Date(date).getDate();
        if(day < 10) day = "0" + day;

        date = new Date(date).getFullYear() +"-"+ month +"-"+ day;
        onChange(date);
    }

    return (
        <>  
            <Input label={label} value={value} onFocus={() => showDateTimePicker(value)} disabled={disabled} mandatory={mandatory} />
            {dateTimePicker.show && <DateTimePicker value={dateTimePicker.date} mode={"date"} onChange={onDateChange} />}
        </>
    )
}

export default memo(DateInput);

