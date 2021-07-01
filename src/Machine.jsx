import React from 'react';
import False from './False';
import True from './True';


const Machine = (props) => {

    let { x, y, z } = props;
    return (
        ((x === y) && (y === z)) ? <True x={x} y={y} z={z} /> : <False x={x} y={y} z={z} />
);
}
export default Machine;