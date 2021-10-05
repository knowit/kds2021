import { select } from 'd3';


export const showTooltipOver = (str, delay = 0) => {
    const body = select('body');
    const tooltip = body
        .append('div')
        .attr('class', 'tooltip')
        .attr('aria-hidden', true)
        .html(str)
        .style('top', '-30px')
        .style('left', function leftAlignment() {
            const div = select(this)?.node()?.getBoundingClientRect()?.width;
            return `${div / -2}px`;
        });

    setTimeout(() => {
        tooltip.classed('showTooltip', true);
    }, delay);
};

export const showTooltipMove = (event) => {
    const body = select('body');
    body.select('div.tooltip').style('transform', `translate(${event.pageX}px, ${event.pageY}px)`);
};

export const hideTooltip = () => {
    const body = select('body');
    body.select('div.tooltip').remove();
};
