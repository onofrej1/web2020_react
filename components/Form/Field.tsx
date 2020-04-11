function Field (props) {
    const fieldId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)

    const {
        label,
        required,
        Component,
        helpText,
        ...rest
    } = props

    const inputProps = {
        id: fieldId,
        label,
        required,
        ...rest,
    }

    return (
        <div className="field">
            <div className="field__input">
                {<Component {...inputProps}/>}
                <br /><br />
            </div>
            {<div className="field__help">
                {helpText}
            </div>}
        </div>
    )
}

export default Field;