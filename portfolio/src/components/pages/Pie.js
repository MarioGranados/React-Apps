import React, { Component } from 'react'
import Chart from 'react-google-charts'

const pieData = [
    ['Programming', 'Experience'],
    ['JavaScript', 11],
    ['C++', 2],
    ['Java', 4],
    ['MySQL', 4],
]
const pieOptions = {
    title: 'My Daily Activities',
    pieHole: 0.4,
}
function PieChart() {
        return (
            <div>
                <h2 className={'display-4'}>Experience</h2>
                <Chart
                    width={'600px'}
                    height={'320px'}
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