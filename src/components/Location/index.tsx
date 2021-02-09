import React from "react";
import useCurrentLocation from "@lib/geoLocation";
import AlgoliaPlaces from "algolia-places-react";

const Location = ({
  placeholder = "Enter an address",
  onChange = console.log,
  value = "",
  ...props
}) => {
  return (
    <AlgoliaPlaces
      {...props}
      placeholder={placeholder}
      defaultValue={value}
      options={{
        appId: process.env.ALGOLIA_SEARCH_APPLICATION_ID,
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      }}
      onChange={({ suggestion }) => onChange(suggestion)}
    />
  );
};

export default Location;
