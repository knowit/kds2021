import React from 'react';
import { ResponsiveBar } from "@nivo/bar";

const ResponsiveBarChart = ({data}) => {
    console.log(data);
    return (
        <ResponsiveBar
            data={data}
            indexBy="country"
            keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
            valueScale={{type: 'linear'}}
            indexScale={{type: 'band', round: true}}
            colors={{ scheme: 'nivo' }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            padding={0.3}
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        />
    )
};

export default ResponsiveBar;
