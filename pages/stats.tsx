import * as d3 from 'd3';
import React, {useState, useRef, FunctionComponent, useEffect, RefObject} from 'react';
import { Layout } from "../components";

import "../styling/globalStyles.scss";


function drawChart(svgRef: RefObject<SVGSVGElement>) {
    const data = [12, 5, 6, 6, 8, 10];
    const h = 120;
    const w = 250;
    const svg = d3.select(svgRef.current);

    svg
        .attr("width", w)
        .attr("height", h)
        .style("margin-top", 50)
        .style("margin-left", 50);

    svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 40)
        .attr("y", (d, i) => h - 10 * d)
        .attr("width", 20)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "steelblue");
}

const Stats: FunctionComponent = () => {
    const svg = useRef<SVGSVGElement>(null);

    useEffect(() => {
        drawChart(svg);
    }, [svg]);

    return (
        <div className="page" id="chart">
            <Layout title="Statistics" background={true}>
                <svg ref={svg} />
            </Layout>
        </div>
    )
}

export default Stats;
