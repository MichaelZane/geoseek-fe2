import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 20%;
  height: 87%;
  background-color: #30364a;
  border-left: 3px solid black;
  padding-top: 30px;
`;

const Input = styled.input`
  width: 300px;
  padding-left: 10px;
  font-size: 0.9rem;
  border: none;
  height: 44px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  background-color: #3e4958;
  outline: none;
  color: white;
`;

const Button = styled.button`
  width: 330px;
  height: 50px;
  border-radius: 15px;
  outline: none;
  background-color: #c66db2;
  border: none;
  color: white;
  text-align: center;
  font-size: 20px;
  margin: 100px 10px 0px 15px;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.55s ease-in-out;
  -moz-transition: opacity 0.55s ease-in-out;
  -webkit-transition: opacity 0.55s ease-in-out;

  :hover {
    opacity: 1;
    transition: opacity 0.55s ease-in-out;
    -moz-transition: opacity 0.55s ease-in-out;
    -webkit-transition: opacity 0.55s ease-in-out;
    background-color: #ff69b4;
    border: 2px solid black;
  }
`;
const Label = styled.label`
  margin-left: 10%;
  color: white;
`;

export default function CreateGem(props) {
  const [form, setForm] = useState({
    title: "",
    latitude: "",
    longitude: ""
  });

  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  function geocode(address) {
    axios
      .get(
        `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${address}&outFields=Match_addr,Addr_type`
      )
      .then(res => {
        console.log(res);
        if (res) {
          setLongitude(res.data.candidates[0].location.x);
          setLatitude(res.data.candidates[0].location.y);
        }
      })

      .catch(err => {
        console.log("gecode err", err);
        setLongitude({ loading: "Problem geocoding, please try again" });
        setLatitude({ loading: "Problem geocoding, please try again" });
      });
  }

  const submitGem = () => {
    props.setRefresh(!props.refresh);
    props.updatePosition(Number(form.latitude), Number(form.longitude));
  };
  const onFormChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return (
    <FormContainer>
      <form
        onSubmit={e => {
          e.preventDefault();
          axios
            .post("https://geoseek-be-stage.herokuapp.com/api/gems", form)
            .then(res => {
              submitGem();
              props.history.push("/");
            })
            .catch(err => {
              console.log(err);
            });
        }}
      >

        <Label>TITLE</Label>
        <Input
          className="input"
          name="title"
          placeholder="Title"
          value={form.name}
          onChange={onFormChange}
        />
        <Label>LONGITUDE</Label>
        <Input
          className="input"
          name="longitude"
          placeholder="Longitude"
          value={form.name}
          onChange={onFormChange}
        />
        <Label>LATITUDE</Label>
        <Input
          className="input"
          name="latitude"
          placeholder="Latitude"
          value={form.name}
          onChange={onFormChange}
        />
        <Label>DIFFICULTY</Label>
        <Input
          className="input"
          name="difficulty"
          placeholder="Choose 1-5 for difficulty "
          value={form.name}
          onChange={onFormChange}
        />
        <Label>DESCRIPTION</Label>
        <Input
          className="input"
          name="description"
          placeholder="Describe or give clues to find your gem."
          value={form.name}
          onChange={onFormChange}
        />
        <Button type="submit">Create Gem!</Button>
      </form>
    </FormContainer>
  );
}
