import React from 'react';
import { ResponsiveBar } from "@nivo/bar";

const colors = [
    '#B7DEBD',
    '#4B6455',
    '#FAC0B1',
    '#DBEEDE' ,
    '#A5B1AA',
    '#E4E1DB',
    '#FCDFD8',
];

const ResponsiveBarChart = ({data, layout, margin}) => {
    const datas = data.sort((a,b) => a.count - b.count)
    return (
        <ResponsiveBar
            animate
            data={datas}
            layout={layout}
            indexBy="company"
            keys={['count']}
            valueScale={{type: 'linear'}}
            indexScale={{type: 'band', round: true}}
            colors={colors}
            padding={0.3}
            margin={margin}
        />
    )
};

export default ResponsiveBarChart;
