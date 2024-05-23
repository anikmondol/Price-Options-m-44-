import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Chart = () => {

    const students = [
        { id: 1, name: "Alice Johnson", math: 85, physics: 78, chemistry: 89 },
        { id: 2, name: "Bob Smith", math: 78, physics: 82, chemistry: 76 },
        { id: 3, name: "Charlie Brown", math: 92, physics: 91, chemistry: 94 },
        { id: 4, name: "David Wilson", math: 74, physics: 68, chemistry: 72 },
        { id: 5, name: "Eva Martinez", math: 88, physics: 85, chemistry: 90 },
        { id: 6, name: "Frank Harris", math: 90, physics: 87, chemistry: 85 },
        { id: 7, name: "Grace Lee", math: 67, physics: 70, chemistry: 65 },
        { id: 8, name: "Hannah Kim", math: 95, physics: 93, chemistry: 97 },
        { id: 9, name: "Ian Thompson", math: 81, physics: 79, chemistry: 83 },
        { id: 10, name: "Jack Davis", math: 76, physics: 74, chemistry: 78 }
      ];
      



    return (
        <div className='md:ml-1'>
            <LineChart width={1200} height={500} data={students}>
                <XAxis dataKey="name" />
                <YAxis dataKey="" />

                <Line type={'monotone'} dataKey={'math'} stroke='red'></Line>
                <Line type={'monotone'} dataKey={'physics'} stroke='green'></Line>
                <Line type={'monotone'} dataKey={'chemistry'} stroke='yellow'></Line>

            </LineChart>
        </div>
    );
};

export default Chart;