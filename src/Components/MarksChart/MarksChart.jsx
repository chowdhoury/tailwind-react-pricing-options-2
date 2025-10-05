import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData=marksDataRes.data
    // console.log(marksData);
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math:studentData.marks.math
        }
        student.average = (student.math + student.chemistry + student.physics) / 3;
        return student
    })
    // console.log(marksChartData)
    return <div>
        <BarChart height={500} width={800} data={marksChartData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar fill='blue' dataKey={'average'}></Bar>
            <Bar fill='red' dataKey={'math'}></Bar>
            <Bar fill='green' dataKey={'physics'}></Bar>
            <Bar fill='yellow' dataKey={'chemistry'}></Bar>
      </BarChart>
  </div>;
};

export default MarksChart;