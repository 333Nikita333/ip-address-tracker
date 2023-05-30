const DataDisplay = ({ ipData }) => {
  const {
    ip,
    location: { country, region, timezone } = {},
    isp,
  } = ipData || {};

  return (
    <div>
      <p>IP Address: {ip}</p>
      <p>
        Location: {country}, {region}
      </p>
      <p>Timezone: {timezone}</p>
      <p>ISP: {isp}</p>
    </div>
  );
};

export default DataDisplay;
