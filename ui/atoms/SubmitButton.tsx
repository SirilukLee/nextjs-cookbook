import { Labels } from "../../pages/core/configs";

const SubmitButton = (id:any) => {
    const input = {
        label: Labels.SUBMIT
    }

    return (
        <button type="submit">{input.label}</button>
    )
}

export default SubmitButton