import * as d3 from 'd3';
import {Selection} from "d3";
import React, {useState, useRef, FunctionComponent, useEffect, RefObject} from 'react';
import { Layout } from "../components";
import HorizontalBarChart from '../charts/horizontalBarChart';

import "../styling/globalStyles.scss";
const city_part_count = [{"key":"","doc_count":36991},{"key":"Gamle Oslo","doc_count":4763},{"key":"Sagene","doc_count":3838},{"key":"Alna","doc_count":3636},{"key":"Søndre Nordstrand","doc_count":3025},{"key":"Frogner","doc_count":2943},{"key":"Grünerløkka","doc_count":2826},{"key":"Stovner","doc_count":2748},{"key":"Nordstrand","doc_count":2627},{"key":"Vestre Aker","doc_count":2325},{"key":"St. Hanshaugen","doc_count":2316},{"key":"Grorud","doc_count":2268},{"key":"Nordre Aker","doc_count":2061},{"key":"Østensjø","doc_count":1729},{"key":"Ullern","doc_count":1689}];

function parentWidth(svg: Selection<SVGSVGElement, unknown, null, unknown>) {
    const { width } = svg.node().getBoundingClientRect();

    const paddingLeft = +window.getComputedStyle(svg.node()).paddingLeft.split('px')[0];
    const paddingRight = +window.getComputedStyle(svg.node()).paddingRight.split('px')[0];

    const paddingSum = paddingLeft + paddingRight;

    return width - paddingSum
}

function drawChart(svgRef: RefObject<SVGSVGElement>) {
    const chart = new HorizontalBarChart(svgRef.current);
    chart.render(city_part_count);
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
