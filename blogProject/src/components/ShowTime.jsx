import {parseISO,formatDistanceToNow} from "date-fns-jalali";

const  ShowTime = ({timeStamp}) => {
    let timeAgo = '';
    if (timeStamp) {
        const date = parseISO(timeStamp);
        const  time = formatDistanceToNow(date);
        timeAgo = `${time} قبل `
    }
    return (
        <span >
            <i>{timeAgo}</i> &nbsp;
        </span>
    );
}

export  default  ShowTime;