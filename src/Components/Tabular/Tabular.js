import * as React from 'react';
//import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import CheckedButton from '../CheckedButton/CheckedButton';
import dataJSON from '../../food_list/food_list.json';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import GroceryCheckBox from '../GroceryCheckBox/GroceryCheckBox';

var data = [];
var ingredients = [];

for (let x in dataJSON) {
  data.push([x, dataJSON[x]])
}

for (let x in data) {
    for(let i in data[x][1]["ingredients"]) {
        if(!ingredients.includes(data[x][1]["ingredients"][i])) {
            ingredients.push(data[x][1]["ingredients"][i])
        }
    }
}
console.log(ingredients)
console.log(typeof(ingredients))


export default function Tabular() {
  return (
    <Tabs defaultValue={1}>
      <TabsList>
        <Tab value={1}>Meals</Tab>
        <Tab value={2}>Groceries</Tab>
        <Tab value={3}>Recipes</Tab>
      </TabsList>
      <TabPanel value={1}>
        <ButtonStyle>
        <Stack direction="row" spacing={5}>
        {
          data.map(element => (
            <CheckedButton image={element[1]["image"]} name={element[0]}></CheckedButton>
          ))
        }
        </Stack>
        </ButtonStyle>
      </TabPanel>
      <TabPanel value={2}>
        <GroceryCheckBox ingredients={ingredients}></GroceryCheckBox>
      </TabPanel>
      <TabPanel value={3}>Third page</TabPanel>
    </Tabs>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
  };
  `,
);

const ButtonStyle = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));