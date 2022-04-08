export function scrollSizer(scroll, limit, props, resize) {
    const { top, left } = scroll;
    const { width, height, } = props.size;
    const { x, y } = props.offSet;
    
    const newProps = { ...props };

    if(top < limit) {
        newProps.size.height = height + resize;
        newProps.offSet.y = y + resize;
    }

    if(top > height - limit) {
        newProps.size.height = height + resize;
    }

    if(left < limit) {
        newProps.size.width = width + resize;
        newProps.offSet.x = x + resize;
    }

    if(left > width - limit) {
        newProps.size.width = width + resize;
    }

    return newProps;
}


