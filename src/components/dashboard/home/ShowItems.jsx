import ShowItem from "./ShowItem"

/* eslint-disable react/prop-types */
const ShowItems = ({ title, items }) => {
    return (
        <div className="flex flex-col gap-y-2">

            <h1 className="text-[22px] text-center">{title}</h1>
            <hr />

            <div className="flex flex-wrap gap-x-5 px-8">
                {items.map((item, i) => (
                    <ShowItem key={i} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ShowItems
