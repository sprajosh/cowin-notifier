import React, { useState } from "react";
import Layout from "./Layout";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { states, districts } from "../Constants";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const [stateId, setStateId] = useState(0);
  const [districtId, setDistrictId] = useState(0);

  return (
    <Layout>
      <div style={{textAlign: 'center'}}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>State</InputLabel>
          <Select
            value={stateId}
            onChange={(e) => setStateId(e.target.value as number)}
            label="State"
          >
            {states.map(({ state_id, state_name }) => (
              <MenuItem value={state_id}>{state_name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>District</InputLabel>
          <Select
            value={districtId}
            onChange={(e) => setDistrictId(e.target.value as number)}
            label="District"
          >
            {districts.map(({ district_id, district_name }) => (
              <MenuItem value={district_id}>{district_name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          style={{ height: "100%" }}
          className={classes.formControl}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
    </Layout>
  );
};

export default HomePage;
