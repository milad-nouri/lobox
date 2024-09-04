import { itemProps } from "../../utils/globalType";

export interface selectItemProps {
    item: itemProps;
    onSelect: (item: itemProps) => void;
}
export default function SelectItem(props: selectItemProps) {
    const { item, onSelect } = props;

    return (
        <div className={`list-item ${item.selected ? "selected" : ""}`} onClick={() => onSelect(item)}>
            {item.name}
            {item.selected && <span className="item-check">&#x2713;</span>}
        </div>
    );
}
