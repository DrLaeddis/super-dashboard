import { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler, ArcElement } from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { UserData } from "../../Dummy";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export default function ChartBar(props:any) {

    var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
        }]
    }

    const option = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "test chart",
                color: "red",
                font: {
                    size: 18
                }
            }
        },

        elements: {
            line: {
                tension: 0,
                borderWidth: 1,
                borderColor: "black",
                fill: "start",
                backgroundColor: "darkblue"
            },
            point: {
                radius: 10,
                hitRadius: 10
            }
        },
        scales: {
            x: {
                diplay: true,
                title: {
                    color: "white"
                },
            },
            y: {
                diplay: true,
                title: {
                    color: "white"
                }
            }
        },
    }

    return(
        <div className="chartContainer">
            <div className="charts">
                <Bar data={data}  width="550px" options={option} />
            </div>
            <div className="charts Pie">
                <Pie data={data} width="100%" options={option} />
            </div>
        </div>
    )
}