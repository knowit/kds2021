import { NONAME } from 'dns';
import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

interface props {
    title: string;
    clamped?: boolean;
}

const ScheduleTitle = ({title, clamped}:props) => {
    let [over, setOver] = React.useState(false);

    let visibility = {
        visibility: 'hidden'
    }

return (
    <div    onMouseOver={()=>setOver(true)} 
    onMouseOut={()=>setOver(false)}>
        <div >
<LinesEllipsis
style={{display: over? 'none' : 'block'}}
className='title'
text={title}
maxLine='3'
ellipsis='...'
trimRight
basedOn='letters'
isClamped='false'
/>
</div>
<h1 className="title" style={{display: over? 'block' : 'none'}}>
    {title}
</h1>
</div>
);
}
export default ScheduleTitle