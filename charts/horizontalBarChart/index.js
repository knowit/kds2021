import * as d3 from 'd3';
import { parentWidth, resize, initSvg, styleRows, initRows, updateBars, handleTooltips } from './helpers';

export default class HorizontalBarChart {
    constructor(svgElement) {
        if (!svgElement) {
            throw new Error('svg not defined');
        }
        this.padding = { left: 190, top: 30, right: 25, bottom: 20 };
        this.mobileWidth = 420;
        this.isMobileView = false;
        this.height = 450;
        this.barHeight = 18;
        this.rowHeight = 31;
        this.duration = 250;

        d3.select(svgElement).selectAll('*').remove();
        d3.select(svgElement).call(initSvg.bind(this));

        this.x = d3.scaleLinear().nice();
        this.xBand = d3.scaleBand();
    }

    render(values) {
        this.height = values.length * this.rowHeight;
        this.data = values.filter((d) => d.key !== '');

        this.width = parentWidth(this.svg);
        this.isMobileView = this.width < this.mobileWidth;

        this.padding.left = this.isMobileView ? 10 : 190;
        this.padding.bottom = this.isMobileView ? 0 : 30;

        this.x.domain([0, d3.max(this.data, (d) => d.doc_count)]);

        resize.call(this);

        this.xAxis
            .transition()
            .duration(this.duration)
            .call(d3.axisBottom(this.x).ticks((this.x.range()[1] - this.x.range()[0]) / 60));

        this.rows = this.rows.call(initRows.bind(this)).call(styleRows.bind(this));

        this.rows
            .selectAll('rect.bar')
            .data(this.data, (d) => d.doc_count)
            .join('rect')
            .classed('bar', true)
            .call(updateBars.bind(this))
            .call(handleTooltips.bind(this));
    }
}
