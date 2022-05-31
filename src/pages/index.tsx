import { useEffect } from "react";
import {
  Intro,
  AboutUs,
  Productions,
  WhoWeAre,
  Partners,
  Layout,
} from "../components";
import "aos/dist/aos.css";
import "../styles/global.scss";
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const { google } = require("googleapis");

function App({ serverData: totalCount }: any) {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  return (
    <Layout totalCount={totalCount}>
      <Intro />
      <AboutUs />
      <Productions />
      <WhoWeAre />
      <Partners />
    </Layout>
  );
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    client_id: Number(process.env.CLIENT_ID),
    private_key: process.env.PRIVATE_KEY?.replace(
      new RegExp("\\\\n", "g"),
      "\n"
    ),
  },
});

const analyticsDataClient = new BetaAnalyticsDataClient({
  auth,
});

const propertyId = 316503316;

export async function getServerData() {
  const result = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "2022-01-01",
        endDate: "today",
      },
    ],
    metrics: [
      {
        name: "screenPageViews",
      },
    ],
    dimensions: [
      {
        name: "pagePath",
      },
    ],
    orderBys: [
      {
        desc: true,
        metric: {
          metricName: "screenPageViews",
        },
      },
    ],
  });

  const realtimeResult = await analyticsDataClient.runRealtimeReport({
    property: `properties/${propertyId}`,
    metrics: [
      {
        name: "screenPageViews",
      },
    ],
    dimensions: [
      {
        name: "country",
      },
    ],
  });

  const { rows } = result[0];
  const { rows: realtimeRows } = realtimeResult[0];
  const { metricValues } = rows[0];
  if (realtimeRows.length > 0) {
    for (const { metricValues: metricRealtimeValues } of realtimeRows) {
      const totalCount = Number(metricValues[0].value);
      const realtimeCount = Number(metricRealtimeValues[0].value);

      return {
        props: Number(totalCount + realtimeCount),
      };
    }
  } else {
    const totalCount = Number(metricValues[0].value);

    return {
      props: totalCount,
    };
  }
}

export default App;
