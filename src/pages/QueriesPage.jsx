/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Box, Divider, Heading, Text as ChText } from "@chakra-ui/react";
import { Card, Title, AreaChart, DonutChart, BarList, Bold, Flex, Metric, Text } from "@tremor/react";
import { useGetTopSubjectQuery, useGetTopStudentQuery, useGetTopSubjectMaxQuery, useGetTopAcademicProgramAssitanceQuery } from "../api/apiSlice";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const QueriesPage = () => {
  const { data: dataTopSubjects, isSuccess: isSuccessTopSubjects } = useGetTopSubjectQuery()
  const { data: dataTopStudent, isSuccess: isSuccessTopStudent } = useGetTopStudentQuery()
  const { data: dataTopSubjectMax, isSuccess: isSuccessTopSubjectMax } = useGetTopSubjectMaxQuery()
  const { data: dataTopAcademicProgramAssitance, isSuccess: isSuccessTopAcademicProgramAssitance } = useGetTopAcademicProgramAssitanceQuery()

  const [currentTopSubject, setCurrentTopSubject] = useState([])
  const [currentTopStudent, setCurrentTopStudent] = useState([])
  const [currentTopSubjectMax, setCurrentTopSubjectMax] = useState([])
  const [currentTopAcademicProgramAssitance, setCurrentTopAcademicProgramAssitance] = useState([])

  useEffect(() => {
    if (isSuccessTopSubjects) {
      setCurrentTopSubject(dataTopSubjects)
    }
  }, [isSuccessTopSubjects])

  useEffect(() => {
    if (isSuccessTopStudent) {
      setCurrentTopStudent(dataTopStudent)
    }
  }, [isSuccessTopStudent])

  useEffect(() => {
    if (isSuccessTopSubjectMax) {
      const subjectMax = dataTopSubjectMax[0];
      const subjectTotal = dataTopSubjectMax[1];
      const bestSubject = { name: subjectMax, total: subjectTotal }
      setCurrentTopSubjectMax(bestSubject)
    }
  }, [isSuccessTopSubjectMax])

  useEffect(() => {
    if (isSuccessTopAcademicProgramAssitance) {
      let academicProgramAssignment = dataTopAcademicProgramAssitance.map((academic) => {
        return { name: academic.Programa_Academico, value: academic.Total }
      })
      setCurrentTopAcademicProgramAssitance(academicProgramAssignment)
    }
  }, [isSuccessTopAcademicProgramAssitance])

  return (
    <Box w='100%' bg='white'>
      <Box w='100%' h='90px' display='flex' flexDir='column' gap={7} mt='35px' pl='35px' pr='35px'>
        <Heading fontSize='2xl' whiteSpace='nowrap'>Menu 2</Heading>
        <Divider />
      </Box>
      <Box display='flex' flexDir='column' gap='35px' pt='0' pb='35px' pl='35px' pr='35px'>
        <Box w='100%' display='flex'>
          <Card>
            <Title>Query 1</Title>
            <AreaChart
              className="h-72 mt-4"
              data={chartdata}
              index="date"
              categories={["SemiAnalysis", "The Pragmatic Engineer"]}
              colors={["indigo", "cyan"]}
            />
          </Card>
        </Box>
        <Box display='flex' w='100%' gap='35px'>
          <Card className="max-w-lg">
            <Title>Top de Asistencia por Programa Académico</Title>
            <Flex className="mt-4">
              <Text>
                <Bold>Programa</Bold>
              </Text>
              <Text>
                <Bold>Total</Bold>
              </Text>
            </Flex>
            <BarList data={currentTopAcademicProgramAssitance} className="mt-2" />
          </Card>
          <Card className="max-w-lg">
            <Title>Top Materias por Asistencia</Title>
            <DonutChart
              className="mt-6"
              data={currentTopSubject}
              category="Total"
              index="Asignatura"
              colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
          </Card>
          <Box display='flex' flexDir='column' w='100%' gap='35px'>
            <Box display='flex' w='100%' gap='35px'>
              <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                <Text >Materia con Mayor Asistencia</Text>
                <ChText pt='3px' fontWeight='bold'>{currentTopSubjectMax.name}</ChText>
                <Metric>{currentTopSubjectMax.total}</Metric>
              </Card>

              <Card className="max-w-lg">
                <Title>Top Asistencia por Correo Estudiante</Title>
                <DonutChart
                  className="mt-6"
                  data={currentTopStudent}
                  category="Total"
                  index="Correo"
                  variant="pie"
                  colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                />
              </Card>
            </Box>
            <Box display='flex' w='100%' gap='35px'>
              <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                <Text>Query 6</Text>
                <Metric>$ 34,743</Metric>
              </Card>
              <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                <Text >Query 7</Text>
                <Metric>$ 34,743</Metric>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QueriesPage;