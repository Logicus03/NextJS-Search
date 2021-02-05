import React from "react";
import useCurrentLocation from "@lib/geoLocation";
import AlgoliaPlaces from "algolia-places-react";

const Location = ({
  value = "",
  placeholder = "Enter an address",
  onAutocomplete,
  onChange,
  ...props
}) => {
  const { location, error } = useCurrentLocation();
  const appId = "pl5IEYRXJIBG";
  const apiKey = "b169db65e9d17841323631f13441bd0d";

  return (
    <AlgoliaPlaces
      placeholder={placeholder}
      options={{
        appId,
        apiKey,
      }}
      onChange={(result) => console.log(result)}
    />
  );
};

export default Location;
