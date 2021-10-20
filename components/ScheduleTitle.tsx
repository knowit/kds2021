import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Link from "next/link";

interface props {
    title: string;
    id: any;
    clamped?: boolean;
    isInSchedule: boolean;
}

const ScheduleTitle = ({ title, id, isInSchedule, clamped }: props) => {
    let [over, setOver] = React.useState(false);

    return (
        <div>
            {isInSchedule ? (
                <>
                    <div
                        className='schedule-title-wide'
                        onMouseOver={() => setOver(true)}
                        onMouseOut={() => setOver(false)}>

                        <div>
                            <LinesEllipsis
                                style={{ wordBreak: 'break-word', display: over ? 'none' : 'block' }}
                                className='title'
                                text={title}
                                maxLine='3'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            />
                        </div>
                        <Link href={`/TalksAndSpeakers/#${encodeURIComponent(id)}`}>
                            <a className="title-link">
                                <h1 className="title" style={{ display: over ? 'block' : 'none' }}>
                                    {title}
                                </h1>
                            </a>
                        </Link>
                    </div>
                    <div className='schedule-title-small'>
                        <Link href={`/TalksAndSpeakers/#${encodeURIComponent(id)}`}>
                            <a className="title-link">
                                <h1 className="title">
                                    {title}
                                </h1>
                            </a>
                        </Link>
                    </div>
                </>
            ) : (
                <Link href={`/Schedule/#${encodeURIComponent(id)}`}>
                    <a className="title-link">
                        <h1 className="title" style={{ display: over ? 'none' : 'block' }}>
                            {title}
                        </h1>
                    </a>
                </Link>
            )}
        </div>
    );
}
export default ScheduleTitle;
