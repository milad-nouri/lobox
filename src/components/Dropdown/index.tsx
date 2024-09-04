import { itemProps } from "../../utils/globalType";
import SelectItem from "../SelectItem";

export interface DropdownProps {
    itemsData: itemProps[];
    close: () => void;
    onSelect: (item: itemProps) => void;
}
export default function Dropdown(props: DropdownProps) {
    const { itemsData, close, onSelect } = props;

    return (
        <>
            <div className="drop-down">
                {itemsData?.map((item) => (
                    <SelectItem key={item.id} item={item} onSelect={onSelect} />
                ))}
                {!itemsData?.length && <div className="no-items">No Items</div>}
            </div>
            <div onClick={close} className="back-drop" />
        </>
    );
}
