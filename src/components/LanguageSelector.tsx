import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { SUPPORTED_LANGUGES } from "../constant/constants"
import { AUTO_LANGUAGE, FromLanguage, Language, SectionType } from "../types";


/* interface Props {
    onChange: (language: Language) => void;
} */


type Props =
    | { type: SectionType.FROM, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SectionType.TO, value: Language, onChange: (language: Language) => void }


export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }
    return (
        <Form.Select aria-label="Selecciona el Idioma" onChange={handleChange} value={value}>
            {type === SectionType.FROM && <option value={AUTO_LANGUAGE}> Detectar Idioma</option>}
            {
                Object.entries(SUPPORTED_LANGUGES).map(([key, literal]) => {
                    return <option key={key} value={key}>{literal}</option>
                })
            }
        </Form.Select >
    )
}