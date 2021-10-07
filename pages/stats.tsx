import React, {useState, useRef, FunctionComponent, useEffect, RefObject} from 'react';
import { Layout } from "../components";
import ResponsiveBarChart from '../components/BarChart';

const data = [
    {
        "country": "AD",
        "hot dog": 168,
        "hot dogColor": "hsl(303, 70%, 50%)",
        "burger": 186,
        "burgerColor": "hsl(175, 70%, 50%)",
        "sandwich": 144,
        "sandwichColor": "hsl(189, 70%, 50%)",
        "kebab": 97,
        "kebabColor": "hsl(218, 70%, 50%)",
        "fries": 160,
        "friesColor": "hsl(114, 70%, 50%)",
        "donut": 127,
        "donutColor": "hsl(135, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 141,
        "hot dogColor": "hsl(5, 70%, 50%)",
        "burger": 91,
        "burgerColor": "hsl(137, 70%, 50%)",
        "sandwich": 140,
        "sandwichColor": "hsl(300, 70%, 50%)",
        "kebab": 17,
        "kebabColor": "hsl(159, 70%, 50%)",
        "fries": 25,
        "friesColor": "hsl(188, 70%, 50%)",
        "donut": 7,
        "donutColor": "hsl(240, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 76,
        "hot dogColor": "hsl(343, 70%, 50%)",
        "burger": 160,
        "burgerColor": "hsl(15, 70%, 50%)",
        "sandwich": 15,
        "sandwichColor": "hsl(297, 70%, 50%)",
        "kebab": 7,
        "kebabColor": "hsl(360, 70%, 50%)",
        "fries": 47,
        "friesColor": "hsl(288, 70%, 50%)",
        "donut": 64,
        "donutColor": "hsl(229, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 31,
        "hot dogColor": "hsl(234, 70%, 50%)",
        "burger": 73,
        "burgerColor": "hsl(189, 70%, 50%)",
        "sandwich": 177,
        "sandwichColor": "hsl(313, 70%, 50%)",
        "kebab": 66,
        "kebabColor": "hsl(12, 70%, 50%)",
        "fries": 20,
        "friesColor": "hsl(32, 70%, 50%)",
        "donut": 141,
        "donutColor": "hsl(339, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 45,
        "hot dogColor": "hsl(282, 70%, 50%)",
        "burger": 181,
        "burgerColor": "hsl(177, 70%, 50%)",
        "sandwich": 30,
        "sandwichColor": "hsl(231, 70%, 50%)",
        "kebab": 7,
        "kebabColor": "hsl(338, 70%, 50%)",
        "fries": 43,
        "friesColor": "hsl(287, 70%, 50%)",
        "donut": 151,
        "donutColor": "hsl(191, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 35,
        "hot dogColor": "hsl(280, 70%, 50%)",
        "burger": 66,
        "burgerColor": "hsl(340, 70%, 50%)",
        "sandwich": 120,
        "sandwichColor": "hsl(270, 70%, 50%)",
        "kebab": 12,
        "kebabColor": "hsl(237, 70%, 50%)",
        "fries": 58,
        "friesColor": "hsl(102, 70%, 50%)",
        "donut": 60,
        "donutColor": "hsl(281, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 0,
        "hot dogColor": "hsl(56, 70%, 50%)",
        "burger": 93,
        "burgerColor": "hsl(312, 70%, 50%)",
        "sandwich": 166,
        "sandwichColor": "hsl(233, 70%, 50%)",
        "kebab": 37,
        "kebabColor": "hsl(359, 70%, 50%)",
        "fries": 137,
        "friesColor": "hsl(341, 70%, 50%)",
        "donut": 142,
        "donutColor": "hsl(10, 70%, 50%)"
    }
]


const stats: FunctionComponent = () => {
    return (
        <div className="page" id="chart">
            <Layout title="Statistics" background={true}>
                <ResponsiveBarChart data={data}/>
            </Layout>
        </div>
    )
}

export default stats;
