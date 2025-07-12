export function VideoCard(props: any) {
    return (
        <div>
            <img src={props.image} className="rounded-xl" />

            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full w-12 h-12" src={props.thumbImage} />
                </div>

                <div className="col-span-11 pl-2">
                    <div>
                        {/* Kanada Raja Pandharicha */}
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {/* Rahul Deshpande */}
                        {props.author}
                    </div>

                    <div className="col-span-11 text-gray-400 text-base">
                        {/* 10 mins | 13 days ago */}
                        {props.views} | {props.timestamp}
                    </div>
                </div>

            </div>
        </div>
    )
}