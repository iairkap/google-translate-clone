
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { useStore } from "../src/hooks/useStore"
import { AUTO_LANGUAGE } from "../src/constant/constants"
import { ArrowsIcon } from './components/icon'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types'
import { TextArea } from './components/TextArea'


function App() {
  const { fromLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    toLanguage,
    fromText,
    result,
    setFromText,
    setResult,
    loading } = useStore()


  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col xs="auto">
          <Stack gap={2}>
            <LanguageSelector type={SectionType.FROM} value={fromLanguage} onChange={setFromLanguage} />
            <TextArea
              type={SectionType.FROM}
              value={fromText}
              onChange={setFromText}
              loading={loading}
            />
          </Stack>
        </Col>



        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>

            <ArrowsIcon />
          </Button>
        </Col>

        <Col xs="auto">
          <Stack gap={2}>

            <LanguageSelector
              type={SectionType.TO}
              value={toLanguage}
              onChange={setToLanguage} />
            <TextArea
              type={SectionType.TO}
              value={result}
              onChange={setResult} />
            loading = {loading}
          </Stack>


        </Col>
      </Row>

    </Container >
  )
}

export default App
