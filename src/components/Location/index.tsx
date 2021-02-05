import React, { useState } from "react";
import useCurrentLocation from "@lib/geoLocation";
import AlgoliaPlaces from "algolia-places-react";

const Location = ({
  placeholder = "Enter an address",
  onChange = console.log,
  ...props
}) => {
  const { location, error } = useCurrentLocation();
  const [place, setPlace] = useState("");

  const appId = "pl5IEYRXJIBG";
  const apiKey = "b169db65e9d17841323631f13441bd0d";

  return (
    <AlgoliaPlaces
      placeholder={placeholder}
      options={{
        appId,
        apiKey,
      }}
      onChange={({ suggestion }) => onChange(suggestion)}
    />
  );
};

export default Location;
