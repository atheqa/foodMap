import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Box = styled.div`
  width: 320px;
`;

const Container = styled.div`
  width: 300px;
`;

const ButtonContainer = styled.div`
  width: 300px;
  justify-content: center;
  padding-top: 5px;
`;

const WeekDay = (props) => {
  console.log(props.day);

  return (
    <Box>
      <Container>
        <p>Day: {props.day}</p>
        <p>Lunch</p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Food</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.lunch}
            label="Food"
            onChange={(ev) => props.setLunch(props.day, ev)}
          >
            <MenuItem value="quick-chicken-tomato-pasta">
              Quick Chicken-Tomato Pasta
            </MenuItem>
            <MenuItem value="fried-rice-with-chicken">
              Fried Rice with Chicken
            </MenuItem>
            <MenuItem value="tomato-tuna-soup">Tomato-Tuna Soup</MenuItem>
            <MenuItem value="lasagne">Lasagne</MenuItem>
          </Select>
        </FormControl>{' '}
        <p>Dinner</p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Food</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.dinner}
            label="Food"
            onChange={(ev) => props.setDinner(props.day, ev)}
          >
            <MenuItem value="quick-chicken-tomato-pasta">
              Quick Chicken-Tomato Pasta
            </MenuItem>
            <MenuItem value="fried-rice-with-chicken">
              Fried Rice with Chicken
            </MenuItem>
            <MenuItem value="tomato-tuna-soup">Tomato-Tuna Soup</MenuItem>
            <MenuItem value="lasagne">Lasagne</MenuItem>
          </Select>
        </FormControl>{' '}
      </Container>
      <ButtonContainer>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="outlined">Save</Button>
        </Stack>
      </ButtonContainer>
    </Box>
  );
};

WeekDay.propTypes = {
  day: PropTypes.string,
  dinner: PropTypes.string,
  lunch: PropTypes.string,
  setLunch: PropTypes.func,
  setDinner: PropTypes.func,
};

export default WeekDay;
