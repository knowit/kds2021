// Initialize the SVG
import * as d3 from 'd3';
import { hideTooltip, showTooltipMove, showTooltipOver } from './tooltip';

export function initSvg(svg) {
    this.svg = svg;

    svg.style('width', '100%');

    this.canvas = svg
        .append('g')
        .classed('canvas', true)
        .attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    this.xAxis = this.canvas.append('g').classed('axis x', true);
    this.yAxis = this.canvas.append('g').classed('axis y', true);
    this.rows = this.canvas.append('g').classed('rows', true);
}

// Resize the svg element
export function resize() {
    resizeSvg.call(this);

    this.canvas
        .transition()
        .duration(this.duration)
        .attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    this.innerHeight = this.height - this.padding.top - this.padding.bottom;
    this.innerWidth = this.width - this.padding.left - this.padding.right;

    const xAxisPlacement = this.isMobileView ? this.innerHeight : this.innerHeight + 30;

    this.xAxis.attr('transform', `translate(0, ${xAxisPlacement})`);

    this.x.range([0, this.innerWidth]);
}

function enterRowElements(el) {
    const g = el.append('g').classed('row', true);

    g.insert('rect')
        .classed('rowFill', true)
        .attr('fill', 'blue')
        .attr('height', this.rowHeight)
        .attr('x', -this.padding.left)
        .attr('width', this.width);

    // Row divider
    g.insert('rect')
        .classed('divider', true)
        .attr('fill', 'blue')
        .attr('x', -this.padding.left)
        .attr('width', this.width)
        .attr('height', 1)
        .attr('y', this.rowHeight);

    // Text element
    g.append('text')
        .attr('class', 'geography')
        .attr('fill', 'blue')
        .attr('y', this.rowHeight / 2 + 6);

    g.append('rect').attr('class', 'bar');

    g.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

    return g;
}

function updateRowElements(el) {
    return el.transition().attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
}

export function initRows(el) {
    el.selectAll('g.row').data(this.data).join(enterRowElements.bind(this), updateRowElements.bind(this));
}

export function styleRows(el) {
    el.selectAll('rect.rowFill')
        .attr('fill-opacity', 0)
        .attr('width', this.padding.left + this.width + this.padding.right);

    el.selectAll('rect.divider')
        .attr('fill-opacity', 0)
        .attr('width', this.padding.left + this.width + this.padding.right);

    el.selectAll('text.geography')
        .text((d) => {
            if (this.isMobileView) {
                return `${d.key} (${d.doc_count})`;
            }
            return d.key;
        })
        .attr('x', () => {
            if (this.isMobileView) {
                return 0;
            }
            return -10;
        })
        .attr('y', this.isMobileView ? 15 : this.rowHeight / 2 + 4)
        .attr('text-anchor', this.isMobileView ? 'start' : 'end')
        .style('cursor', false)
        .style('text-decoration', false)
        .attr('font-weight', 400)
        .append('title')
        .html((d) => d.key);
}

export function updateBars(el) {
    el.attr('height', () => {
        if (this.isMobileView) {
            return 7;
        }
        return this.barHeight;
    })
        .attr('y', () => {
            if (this.isMobileView) {
                return (this.rowHeight - this.barHeight) / 2 + 12;
            }
            return (this.rowHeight - this.barHeight) / 2;
        })
        .attr('opacity', 1)
        .transition()
        .duration(this.duration)
        .attr('width', (d) => this.x(d.doc_count))
        .attr('x', 0);
}

export function handleTooltips(el) {
    el.on('mouseover', (event, d) => showTooltipOver(d3.format('~d')(d.doc_count)))
        .on('mousemove', showTooltipMove)
        .on('mouseleave', hideTooltip);
}

export const parentWidth = (svg) => {
    const { width } = svg.node().getBoundingClientRect();

    const paddingLeft = +window.getComputedStyle(svg.node()).paddingLeft.split('px')[0];
    const paddingRight = +window.getComputedStyle(svg.node()).paddingRight.split('px')[0];

    const paddingSum = paddingLeft + paddingRight;

    return width - paddingSum;
};

export function resizeSvg() {
    this.svg
        .transition()
        .duration(this.duration)
        .attr('height', this.padding.top + this.height + this.padding.bottom)
        .attr('width', this.padding.left + this.width + this.padding.right);
}
