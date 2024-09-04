import { FormEvent, useState } from "react";
import { v4 as createId } from "uuid";
import Dropdown from "../Dropdown";
import { itemProps } from "../../utils/globalType";
import FormInput from "../FormInput";

export default function AddItemsForm() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [items, setItems] = useState<itemProps[]>([]);

    async function addItem(e: FormEvent) {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        await setItems((prevItem) => [{ name: target.itemToAdd.value, id: createId(), selected: false }, ...prevItem]);
        target.reset();
    }
    function selectHandler(selected: itemProps) {
        setItems(items.map((item) => (item.id === selected.id ? { ...item, selected: !item.selected } : item)));
    }

    return (
        <form onSubmit={addItem}>
            <div className="drop-container">
                <FormInput inputName="itemToAdd" open={showDropdown} onInputFocus={() => setShowDropdown(true)} />
                {showDropdown && <Dropdown itemsData={items} close={() => setShowDropdown(false)} onSelect={selectHandler} />}
            </div>
        </form>
    );
}
