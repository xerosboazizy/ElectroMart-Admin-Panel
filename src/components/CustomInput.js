import React from 'react'

const CustomInput = (props) => {
    const { type, label, i_id, i_class } = props
    return (
        <div class="mb-3">
            <label htmlfor={label}
                class="form-label">{label}</label>
            <input type={type}
                class={`form-control ${i_class}`}
                id={i_id}
            />
        </div>
    )
}

export default CustomInput