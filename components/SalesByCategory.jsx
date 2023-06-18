"use client"

import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell, Legend } from "recharts"

const data = [
    {
        name: "T-Shirts",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Shirts",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Sweatshirts&Hoodies",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Coats&Jackets",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Pants",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jeans",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#ADFA1D'];

const Bullet = ({ backgroundColor, size }) => {
    return (
        <div
            className="rounded-full"
            style={{
            backgroundColor,
            width: size,
            height: size
            }}
        ></div>
    );
};

const CustomizedLegend = (props) => {
    const { payload } = props;
    return (
        <ul className="grid grid-cols-2 list-none">
            {payload.map((entry, index) => (
            <li key={`item-${index}`} className="flex flex-col justify-center items-start">
                <div className="flex items-center">
                <Bullet backgroundColor={entry.payload.fill} size="10px" />
                <div className="ml-3">{entry.value}</div>
                </div>
                <div style={{ marginLeft: "20px" }}>{entry.payload.value}</div>
            </li>
            ))}
        </ul>
    );
};

export function SalesByCategory() {
    return (
        <ResponsiveContainer width="100%" height={450}>
            <PieChart>
                <Pie
                    dataKey="total"
                    isAnimationActive={true}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    label
                    paddingAngle={5}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend content={<CustomizedLegend />} />
            </PieChart>
        </ResponsiveContainer>
    )
}