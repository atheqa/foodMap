import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Box = styled.div`
    width: 300px;
`;

const WeekDay = (props) => {

    const handleChange = (ev) => {
        props.setFood(ev.target.value);
      };

      console.log(props.day)

    return (
        <Box>
            Day: {props.day}
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Food</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.food}
                    label="Food"
                    onChange={handleChange}
                >
                    <MenuItem value="quick-chicken-tomato-pasta">Quick Chicken-Tomato Pasta</MenuItem>
                    <MenuItem value="fried-rice-with-chicken">Fried Rice with Chicken</MenuItem>
                    <MenuItem value="tomato-tuna-soup">Tomato-Tuna Soup</MenuItem>
                    <MenuItem value="lasagne">Lasagne</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )

}

WeekDay.propTypes = {
    day: PropTypes.string,
    food: PropTypes.string,
    setFood: PropTypes.func,
};

export default WeekDay;
