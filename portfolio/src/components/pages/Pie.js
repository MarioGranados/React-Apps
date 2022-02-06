import React, { Component } from 'react'
import Chart from 'react-google-charts'

const pieData = [
    ['Programming', 'Experience'],
    ['JavaScript', 10],
    ['C++', 2],
    ['Java', 4],
    ['MySQL', 4],
    ['HTML', 10],
    ['CSS', 10]
]
const pieOptions = {
    title: 'Web Development Experience',
    pieHole: 0.4,
}
function PieChart() {
        return (
            <div>
                <h2 className={'display-4'}>Experience</h2>
                <Chart
                    width={'100%'}
                    height={'50vh'}
                    chartType="PieChart"
                    loader={<div>Loading...</div>}
                    data={pieData}
                    options={pieOptions}
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
        )
}
export default PieChart