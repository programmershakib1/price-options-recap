import { Bar, BarChart, LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const mathMarksData = [
        { "id": 1, "name": "Alice Johnson", "math": 75, "physics": 80, "chemistry": 78 },
        { "id": 2, "name": "Bob Smith", "math": 82, "physics": 79, "chemistry": 85 },
        { "id": 3, "name": "Charlie Brown", "math": 90, "physics": 92, "chemistry": 88 },
        { "id": 4, "name": "Diana White", "math": 68, "physics": 72, "chemistry": 70 },
        { "id": 5, "name": "Edward Harris", "math": 85, "physics": 88, "chemistry": 90 },
        { "id": 6, "name": "Fiona Lewis", "math": 73, "physics": 76, "chemistry": 80 },
        { "id": 7, "name": "George Martin", "math": 88, "physics": 85, "chemistry": 87 },
        { "id": 8, "name": "Hannah Clark", "math": 92, "physics": 90, "chemistry": 95 },
        { "id": 9, "name": "Ian Lee", "math": 79, "physics": 81, "chemistry": 83 },
        { "id": 10, "name": "Julia Wilson", "math": 84, "physics": 86, "chemistry": 82 }
      ];
    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='black'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
            </LChart>
            <BarChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="math" fill="#8884d8" />
                <Bar dataKey="physics" fill="#8884d8" />
                <Bar dataKey="chemistry" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default LineChart;