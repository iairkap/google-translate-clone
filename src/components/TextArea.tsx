import React from "react";
import { Form } from "react-bootstrap";
import { SectionType } from "../types";



interface Props {
    type: SectionType
    loading?: boolean
    value: string
    onChange: (value: string) => void
}


const commonStyles = { height: "200px", resize: "none", border: 0 }

const getPlaceHolder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.FROM) return "Introducir texto"
    if (loading == true) return "Cargando..."
    return "Traduccion"
}

export const TextArea = ({ loading, type, value, onChange }: Props) => {
    const styles = type === SectionType.FROM
        ? commonStyles
        : { ...commonStyles, backgroundColor: "#f8f9fa" }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)

    }

    return (
        <Form.Control
            as='textarea'
            autoFocus={type === SectionType.FROM}
            placeholder={getPlaceHolder({ type, loading })}
            value={value}
            style={styles}
            onChange={handleChange}
        />

    )
}