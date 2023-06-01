import { DataInfo, InfoItem, InfoList } from './DataDisplay.styled';

const DataDisplay = ({ ipData }) => {
  const {
    ip,
    location: { country, region, timezone } = {},
    isp,
  } = ipData || {};

  return (
    <DataInfo>
      <InfoList>
        <InfoItem>
          <p>IP Address</p> <span>{ip}</span>
        </InfoItem>
        <InfoItem>
          <p>Location</p>
          <span>
            {country}, {region}
          </span>
        </InfoItem>
        <InfoItem>
          <p>Timezone</p>
          <span>UTC {timezone}</span>
        </InfoItem>
        <InfoItem>
          <p>ISP</p>
          <span>{isp}</span>
        </InfoItem>
      </InfoList>
    </DataInfo>
  );
};

export default DataDisplay;
