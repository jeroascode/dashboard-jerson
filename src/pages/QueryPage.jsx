/* eslint-disable react-hooks/exhaustive-deps */

import { Box, Button, Divider, Heading } from "@chakra-ui/react";
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Title
} from "@tremor/react";

import { useGetAssistanceBySubjectQuery } from "../api/apiSlice";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const QueryPage = () => {
    const { data: dataAssistanceBySubject, isSuccess: isSuccessAssistanceBySubject } = useGetAssistanceBySubjectQuery()

    const [currentAssistanceBySubject, setCurrentAssistanceBySubject] = useState([])

    useEffect(() => {
        if (isSuccessAssistanceBySubject) {
            setCurrentAssistanceBySubject(dataAssistanceBySubject)
        }
    }, [isSuccessAssistanceBySubject])

    return (
        <Box w='100%' bg='white'>
            <Box w='100%' h='90px' display='flex' flexDir='column' gap={7} mt='35px' pl='35px' pr='35px'>
                <Box display='flex' alignItems='center' justifyContent='center'>
                    <Box display='flex' position='absolute' left='35px'><Heading fontSize='2xl' whiteSpace='nowrap'>Menu 1</Heading></Box>
                    <Button bg='#06D6A0' color='white'><CSVLink data={currentAssistanceBySubject}>Descargar Reporte</CSVLink></Button>
                </Box>
                <Divider />
            </Box>
            <Box display='flex' gap='35px' pt='0' pb='35px' pl='35px' pr='35px'>
                <Card>
                    <Title>Asistencia por Asignatura</Title>
                    <Table className="mt-5">
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Asignatura</TableHeaderCell>
                                <TableHeaderCell>Session_1</TableHeaderCell>
                                <TableHeaderCell>Session_2</TableHeaderCell>
                                <TableHeaderCell>Session_3</TableHeaderCell>
                                <TableHeaderCell>Session_4</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentAssistanceBySubject.map((item) => {
                                return <TableRow key={item}>
                                    <TableCell>{item.Asignatura}</TableCell>
                                    <TableCell>{item.Session_1}</TableCell>
                                    <TableCell>{item.Session_2}</TableCell>
                                    <TableCell>{item.Session_3}</TableCell>
                                    <TableCell>{item.Session_4}</TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </Card>
            </Box>
        </Box>
    )
};

export default QueryPage;